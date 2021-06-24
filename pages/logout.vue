<template>
    <div class="register">
        <button @click="logout">ログアウト</button>
        <br>
        <nuxt-link to="/">戻る</nuxt-link>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    alert('ログアウトが完了しました')
                    this.$router.replace('/')
                })
        }
    }
}
</script>