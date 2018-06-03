<template>
  <v-app>
    <!-- ツールバー -->
    <v-toolbar clipped-left app dark height="60">
      <v-toolbar-title class="white--text">What is Atomic Design</v-toolbar-title>
      <v-spacer/>
      <v-btn icon>
        <v-icon class="white--text">more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- コンテンツ -->
    <v-content>
      <v-container app>
        <transition>
        <router-view/>
        </transition>
      </v-container>
    </v-content>
    <!-- フッター -->
    <v-footer height="50" app dark>
      <v-toolbar-title></v-toolbar-title>
    </v-footer>
  </v-app>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import List from '@/components/120.molecules/List'
import ListGroup from '@/components/120.molecules/ListGroup'

export default {
  name: 'App',
  components: {
    List,
    ListGroup
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
