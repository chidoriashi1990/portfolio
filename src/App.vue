<template>
  <div id="app">
    <global-header class="header-height">TEST</global-header>
    <div class="main-margin-top">
      <router-view/>
    </div>
  </div>
</template>

<script>
import GlobalHeader from '@/components/110.atoms/GlobalHeader'

export default {
  name: 'App',
  components: {
    GlobalHeader
  }
}
</script>

<style lang="scss">
#app {
  // 横スクロールを禁止
  overflow-x: hidden;
}

$header-height: 40px;
.header-height {
  height: $header-height;
  padding: 0 20px;
}
.main-margin-top {
  margin-top: $header-height + 10px;
}
</style>
