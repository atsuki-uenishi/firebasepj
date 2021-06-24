<template>
  <div class="container">
    <h1>ホーム</h1>
    <p>{{message}}</p>
    <nuxt-link to="/register">新規登録</nuxt-link>
    <br>
    <nuxt-link to="/login">ログイン</nuxt-link>
    <br>
    <nuxt-link to="/logout">ログアウト</nuxt-link>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      message: 'ログインができておりません'
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.message = 'ログイン済みです'
      }
    })
  }
}
</script>
