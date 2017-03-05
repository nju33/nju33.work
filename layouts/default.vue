<template>
  <div>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Noto Sans Japanese", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, Meiryo, sans-serif;
  margin: 0 auto;
  min-height: 100vh;
  background: #f8f8f8;
}
</style>
