<template>
  <!-- ツールバー -->
  <v-toolbar scroll-off-screen scroll-threshold="60" clipped-left app dark height="60">
    <v-toolbar-title class="white--text">
      github.io
    </v-toolbar-title>
    <v-btn flat icon disabled/>
    <!-- リンクボタン -->
    <v-toolbar-items v-for="item in linkItems" v-bind:key="item.label">
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
  data: () => ({
    linkItems: [
      { icon: '', label: 'HOME', to: '#top' },
      { icon: '', label: 'Who am I ?', to: '#whoAmI' },
      { icon: '', label: 'Works', to: '#works' }
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
