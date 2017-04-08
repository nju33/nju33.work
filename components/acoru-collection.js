import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import {getDataAttr, getUID, isChild} from './helpers';

const wm = new WeakMap();

export default class AcoruCollection {
  constructor(name, trigger, target, acoru) {
    this.name = name;
    this.trigger = trigger;
    this.target = target;
    this.acoru = acoru;
    this.handleClick = this.createClickHandler.bind(this);

    this.root = null;
    this.rootSize = 0;
    this.size = 0;
    this.active = false;

    this.handleTransitionend = this.createTransitionendHandler.bind(this);
    const resizeHandler = this.createResizeHandler();
    this.handleThrottleResize = resizeHandler.throttle.bind(this);
    this.handleDebounceResize = resizeHandler.debounce.bind(this);
  }

  init() {
    let clone = this.target.cloneNode(true);

    Object.assign(clone.style, {
      display: '',
      zIndex: -9999
    });

    document.body.appendChild(clone);
    this.size = this.parentAxis === 'vertical' ?
                  clone.clientHeight :
                  clone.clientWidth;
    document.body.removeChild(clone);
    clone = null;

    const prop = this.parentAxis === 'vertical' ? 'height' : 'width';
    console.log(this.acoru.opts);
    Object.assign(this.target.style, {
      display: '',
      [prop]: 0,
      overflow: 'hidden',
      webkitTransitionTimingFunction: this.acoru.opts.transitionTimingFunction,
      transitionTimingFunction: this.acoru.opts.transitionTimingFunction,
      webkitTransitionDuration: this.acoru.opts.transitionDuration,
      transitionDuration: this.acoru.opts.transitionDuration,
      webkitTransitionProperty: `${prop}`,
      transitionProperty: `${prop}`
    });

    if (this.parentPosition === 'static') {
      this.parent.style.position = 'relative';
    }

    this.target.setAttribute('data-acoru-uid', this.acoru.uid);

    this.root = this.target;
    if (!isChild(this.parent, this.target)) {
      const root = this.getRoot();
      this.root = root;
      if (this.parentAxis === 'vertical') {
        this.rootSize = root.clientHeight;
      } else {
        this.rootSize = root.clientWidth;
      }
      this.target.style[prop] = this.rootSize + 'px';
    }

    this.trigger.addEventListener('click', this.handleClick);

    this.root.addEventListener('transitionend', this.handleTransitionend);
    window.addEventListener('resize', this.handleThrottleResize);
    window.addEventListener('resize', this.handleDebounceResize);
  }

  get prop() {
    if (this.parentAxis === 'vertical') {
      return 'height';
    }
    return 'width';
  }

  get parent() {
    let el = this.target.parentElement;
    while (el.tagName !== 'HTML') {
      if (el.getAttribute('data-acoru-parent') !== null) {
        return el;
      }
      el = el.parentElement;
    }
    return this.trigger.parentElement;
  }

  get parentAxis() {
    const axis = getDataAttr(this.parent, 'axis') || 'vertical';
    if (!/vertical|horizontal/.test(axis)) {
      throw new Error(
        'Specify \'vertical\' or \'horizontal\' for [data-acoru-axis]'
      );
    }
    return axis;
  }

  get parentMode() {
    const mode = getDataAttr(this.parent, 'mode') || 'single';
    if (!/single|multi/.test(mode)) {
      throw new Error(
        'Specify \'single\' or \'multi\' for [data-acoru-mode]'
      );
    }
    return mode;
  }

  get parentOverflow() {
    return getComputedStyle(this.parent).overflow;
  }

  get parentPosition() {
    return getComputedStyle(this.parent).position;
  }

  get parentSize() {
    if (this.parentAxis === 'vertical') {
      return this.parent.clientHeight;
    }
    return this.parent.clientWidth;
  }

  get parentInnerSize() {
    if (this.parentAxis === 'vertical') {
      const len = this.parent.children.length;
      const last = this.parent.children[len - 1];
      return last.offsetTop + last.clientHeight;
    }
    const len = this.parent.children.length;
    const last = this.parent.children[len - 1];
    return last.offsetLeft + last.clientWidth;
  }

  createTransitionendHandler() {
    if (this.root.classList.contains('acoru-open')) {
      this.root.classList.remove('acoru-open');
      this.acoru.getEvent('opened').forEach(ev => {
        ev(this);
      });
    } else if (this.root.classList.contains('acoru-close')) {
      this.root.classList.remove('acoru-close');
      this.acoru.getEvent('closed').forEach(ev => {
        ev(this);
      });
    }
  }

  createResizeHandler() {
    return {
      throttle: throttle(() => {
        if (this.isOpen()) {
          this.close();
        }
      }, 150),
      debounce: debounce(() => {
        if (this.isOpen()) {
          this.close();
        }
      }, 150)
    };
  }

  getRoot() {
    let el = this.target.parentElement;
    for (;;) {
      if (el.parentElement === this.parent) {
        break;
      }
      el = el.parentElement;
    }
    return el;
  }

  getTargetSize() {
    if (this.parentAxis === 'vertical') {
      return this.target.clientHeight;
    }
    return this.target.clientWidth;
  }

  getActiveSiblingCollection() {
    return this.acoru.getActiveCollection(this.acoru.uid);
  }

  createClickHandler() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  getParentHeight() {
    return this.target.clientHeight;
  }

  isOpen() {
    const prop = this.parentAxis === 'vertical' ? 'height' : 'width';
    return this.target.style[prop] !== this.rootSize + 'px';
  }

  calcOverflowSize() {
    const result = this.height + this.parentHeight;
    if (result > 0) {
      return 0;
    }
    return result;
  }

  calcSize(activeCollection = null) {
    let size = 0;
    if (this.parentOverflow === 'hidden') {
      size = this.parentInnerSize;

      if (this.parentMode === 'single' && activeCollection !== null) {
        size -= activeCollection.getTargetSize();
      } else if (activeCollection === null) {
        size -= this.rootSize;
      }

      const overflow = size + this.size - this.parentSize;
      return this.size - overflow;
    }

    return this.size;
  }

  open() {
    this.root.classList.add('acoru-open');
    this.acoru.getEvent('open').forEach(ev => {
      ev(this);
    });

    setTimeout(() => {
      const prop = this.parentAxis === 'vertical' ? 'height' : 'width';
      const activeCollection = this.getActiveSiblingCollection();
      if (this.parentOverflow === 'hidden') {
        if (this.parentMode === 'single' && activeCollection !== null) {
          activeCollection.close();
        }

        setTimeout(() => {
          Object.assign(this.target.style, {
            overflow: 'auto',
            [prop]: this.calcSize(activeCollection) + 'px'
          });
        }, 0);
      } else {
        Object.assign(this.target.style, {
          [prop]: this.calcSize(activeCollection) + 'px'
        });
      }

      this.root.classList.add('acoru-opened');
      this.active = true;

      this.parent.classList.remove('acoru-not-open');
      this.parent.classList.add('acoru-open');
    }, 0);
  }

  close() {
    this.root.classList.add('acoru-close');
    this.acoru.getEvent('close').forEach(ev => {
      ev(this);
    });

    setTimeout(() => {
      const prop = this.parentAxis === 'vertical' ? 'height' : 'width';
      Object.assign(this.target.style, {
        overflow: 'hidden',
        [prop]: this.rootSize + 'px'
      });

      this.root.classList.remove('acoru-opened');
      this.active = false;

      const activeCollection = this.acoru.getActiveCollection(this.acoru.uid);
      if (activeCollection === null) {
        this.parent.classList.remove('acoru-open');
        this.parent.classList.add('acoru-not-open');
      }
    }, 0);
  }

  teardown() {
    this.root.removeEventListener('transitionend', this.handleTransitionend);
    window.removeEventListener('resize', this.handleThrottleResize);
    window.removeEventListener('resize', this.handleDebounceResize);
  }
}
