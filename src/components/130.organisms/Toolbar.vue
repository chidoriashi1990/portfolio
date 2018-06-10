<template>
  <!-- ツールバー -->
  <v-toolbar app dark dense height="60">
    <v-toolbar-title class="white--text mr-5">
      github.io
    </v-toolbar-title>
    <!-- リンクボタン -->
    <v-toolbar-items v-for="item in linkItems" v-bind:key="item.label" class="hidden-sm-and-down">
      <v-btn flat @click="$vuetify.goTo(item.to, option)">{{ item.label }}</v-btn>
    </v-toolbar-items>
    <v-spacer/>
    <v-tooltip left>
      <v-btn icon class="white" slot="activator" href="https://github.com/chidoriashi1990" target="_blank">
        <img src="./../../assets/github/GitHub-Mark-32px.png">
      </v-btn>
      <span>Go to GitHub</span>
    </v-tooltip>
  </v-toolbar>
</template>

<script>
export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  props: {
    linkItems: {
      type: Array,
      default: null,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
