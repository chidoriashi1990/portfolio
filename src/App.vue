<template>
  <v-app>
    <!-- コンテンツ -->
    <transition>
    <router-view/>
    </transition>
  </v-app>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: false
  })
}
</script>

<style lang="scss">
@import '../node_modules/vuetify/dist/vuetify.min.css';

#app {
  // 横スクロールを禁止
  overflow-x: hidden;
}
a {
  // リンクの下線を消す
  text-decoration: none;
}
</style>
