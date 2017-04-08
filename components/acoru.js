import AcoruCollection from './acoru-collection.js';
import {getDataAttr} from './helpers';
import {getUID} from './helpers';

const defaultOpts = {
  transitionTimingFunction: 'linear',
  transitionDuration: '.2s'
};

export default class Acoru {
  constructor(parent = null, opts = defaultOpts) {
    this.parent = parent;
    const els = Array.prototype.slice.call(
      (parent || document).querySelectorAll('[data-acoru-for]')
    );
    this.opts = Object.assign({}, defaultOpts, opts);

    this.uid = getUID();

    this.collections = els.map(el => {
      const name = getDataAttr(el, 'for');
      const target = document.querySelector(`[data-acoru-id=${name}]`);

      if (name && target) {
        return new AcoruCollection(name, el, target, this);
      }
      return null;
    }).filter(item => item !== null);

    this.height = 0;
    this.__event = {};
  }

  init() {
    this.collections.forEach(collection => {
      collection.init();
    });
  }

  isOpen() {
    return Boolean(this.collections.find(c => c.active));
  }

  getActive() {
    return this.collections.find(c => c.active) || null;
  }

  open(name) {
    if (!name) {
      return;
    }

    for (const collection of this.collections) {
      if (collection.name === name) {
        collection.open();
        break;
      }
    }
  }

  close(name) {
    if (!name) {
      return;
    }

    for (const collection of this.collections) {
      if (collection.name === name) {
        collection.close();
        break;
      }
    }
  }

  teardown() {
    this.collections.forEach(collection => {
      collection.teardown();
    });
  }

  on(type, func) {
    if (typeof func !== 'function') {
      throw new TypeError('Required function');
    }

    if (!this.__event[type]) {
      this.__event[type] = [];
    }
    this.__event[type].push(func);
    return this;
  }

  getEvent(type) {
    return this.__event[type] || [];
  }

  getActiveCollection(uid) {
    return this.collections.find(collection => {
      console.log(collection.acoru.uid === uid && collection.active);
      return collection.acoru.uid === uid && collection.active;
    }) || null;
  }
}
