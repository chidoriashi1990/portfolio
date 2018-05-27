<template>
  <v-app>
    <!-- ツールバー・ナビゲーション -->
    <!-- ナビゲーション -->
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <!-- リンク -->
      <list/>
      <!-- ユーザーグループ -->
      <list-group/>
    </v-navigation-drawer>
    <!-- ツールバー -->
    <v-toolbar color="blue darken-3" clipped-left app>
      <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer"/>
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
    <v-footer color="blue darken-3" height="50" app>
      <v-toolbar-title></v-toolbar-title>
      <!-- Floating Action Button -->
      <v-card-text class="floating-action-button">
        <v-btn absolute dark fab top right color="pink">
          <v-icon>add</v-icon>
        </v-btn>
      </v-card-text>
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
