<template>
  <div id="app">
    <v-app>
      <!-- ナビゲーション -->
      <v-navigation-drawer v-model="drawer" fixed app>
        <v-toolbar flat>
          <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
          <v-toolbar-title>Aplication</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list dense class="pt-0">
          <v-list-tile v-for="item in items" :key="item.title">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <!-- ツールバー -->
      <v-toolbar app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
        <v-toolbar-title>What is Atomic Design</v-toolbar-title>
      </v-toolbar>
      <!-- コンテンツ -->
      <v-content>
        <v-container fluid>
          <transition>
          <router-view/>
          </transition>
        </v-container>
      </v-content>
      <!-- フッター -->
      <v-footer app>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  name: 'App',
  components: {

  },
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' }
    ]
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
