<template>
  <v-app>
    <my-toolbar/>
    <!-- コンテンツ -->
    <transition>
    <router-view/>
    </transition>
    <!-- <my-footer/> -->
  </v-app>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import MyToolbar from '@/components/130.organisms/Toolbar'
import MyFooter from '@/components/130.organisms/Footer'

export default {
  name: 'App',
  components: {
    MyToolbar,
    MyFooter
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
