<template>
  <div class="box">
    <h2 class="headline">お問い合わせありがとうございます。</h2>
    <div class="body">
      <p><span class="count" v-text="count"></span>秒後、前のページに戻ります。<br/>
        &nbsp;&nbsp;戻らない場合はお手数ですが、<a href="https://nju33.work">コチラ</a>からお戻りください。</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 5
    }
  },
  mounted() {
    setInterval(() => {
      if (this.count > 0) {
        this.count--;
      }
      if (this.count === 0) {
        history.back();
      }
    }, 1000);
  }
}
</script>

<style scoped>
.box {
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1em;
  box-sizing: border-box;
}

.headline {
  font-size: 3em;
  font-weight: lighter;
}

.count {
  font-size: 1.3em;
  margin: .5em;
}
</style>
