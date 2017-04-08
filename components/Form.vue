<template>
  <form class="form" action="https://form.run/api/v1/r/AN8H5mGd4cHpXhMbsBBR" method="post" target="_blank">
    <div class="form-group name">
      <label>お名前</label>
      <input class="input-name" name="お名前" type="text">
    </div>

    <div class="form-group email">
      <label>メールアドレス</label>
      <input class="input-email" name="メールアドレス" type="email" data-formrun-type="email" data-formrun-required>
      <!-- <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div> -->
    </div>

    <div class="form-group about">
      <label>何について</label>
      <input class="input-about" name="何について" type="text" data-formrun-required>
      <!-- <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div> -->
    </div>

    <div class="form-group content">
      <label>その内容</label>
      <textarea class="input-content" name="お問い合わせ" data-formrun-required></textarea>
      <!-- <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div> -->
    </div>

    <button class="submit" type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
  </form>
</template>

<script>
export default {
}
</script>

<style scoped>
label {
  font-size: .9em;
  /*background: rgba(255,255,255,.4);*/
  box-sizing: border-box;
  padding: 0 .5em;
}

input,
textarea {
  border: 1px solid transparent;
  background: rgba(255,255,255,.4);
  outline: none;
  box-sizing: border-box;
  transition: .4s;
}

input:focus,
textarea:focus {
  /*border-color: #ccc;*/
  /*background: #fff;*/
}

.form {
  width: 100%;
  padding: 0 1rem;
}

.name label,
.name input {
  width: 13rem;
}
.email label,
.email input {
  width: 100%;
}
.about label,
.about input {
  width: 100%;
}
.content label,
.content textarea {
  width: 100%;
}

@media (min-width: 425px) {
  .name label,
  .name input {
    width: 10rem;
  }
  .email label,
  .email input {
    width: 18rem;
  }
  .about label,
  .about input {
    width: 18rem;
  }
  .content label,
  .content textarea {
    width: 70%;
  }
}

/*.input-email {
  width: 18em;
}

.input-about {
  width: 18em;
}

.input-content {
  width: 70%;
}*/

.form-group {
  margin: .5em 0;
}

.form-group label {
  display: block;
}

.form-group input,
.form-group textarea {
  font-size: inherit;
  padding: .5em;
  box-sizing: border-box;
}

.form-group textarea {
  height: 5em;
}

.submit {
  padding: .5em 1em;
  font-size: inherit;
  background: rgba(255,255,255,.4);
  /*background: transparent;*/
  border: none;
  width: 10rem;
  margin-top: 1em;
  cursor: pointer;
  outline: none;
}
</style>
