<template>
  <div id="app">
    <div class="main-margin-top">
      <transition>
      <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
#app {
  // 横スクロールを禁止
  overflow-x: hidden;
}
a {
  text-decoration: none;
}
</style>
