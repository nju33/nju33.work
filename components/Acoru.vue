<template>
  <div ref="box">
    <slot/>
  </div>
</template>

<script>
// import Acoru from 'acoru';
import Acoru from './acoru.js';

export default {
  props: {
    opens: {
      type: String,
      default: null
    },
    opts: {
      type: Object,
      default: () => {}
    },
    onopen: {
      type: Function
    },
    onopened: {
      type: Function
    },
    onclose: {
      type: Function
    },
    onclosed: {
      type: Function
    }
  },
  name: 'Acoru',
  data() {
    return {
      acoru: null
    }
  },
  methods: {
    open(name) {
      this.acoru.open(name);
    },
    isOpen() {
      return this.acoru.isOpen();
    },
    getActive() {
      return this.acoru.getActive();
    }
  },
  mounted() {
    this.acoru = new Acoru(this.$refs.box, this.opts);
    this.acoru.init();
    if (this.opens !== null) {
      this.acoru.open(this.opens);
    }
    if (this.onopen) {
      this.acoru.on('open', this.onopen);
    }
    if (this.onopened) {
      this.acoru.on('opened', this.onopened);
    }
    if (this.onclose) {
      this.acoru.on('close', this.onclose);
    }
    if (this.onclosed) {
      this.acoru.on('closed', this.onclosed);
    }
  }
}
</script>

<style scoped>
</style>
