<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer app></v-navigation-drawer>
      <v-toolbar app>
        <v-toolbar-side-icon/>
      </v-toolbar>
      <v-content>
        <v-container fluid>
      <transition>
      <router-view/>
      </transition>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  name: 'App',
  components: {

  }
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
