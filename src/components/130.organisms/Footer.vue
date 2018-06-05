<template>
  <!-- フッター -->
  <v-footer height="50" app fixed dark>
    <v-flex xs12 py-3 text-xs-center>
      &copy;{{ new Date().getFullYear() }} — <strong>Yusuke Miyakawa</strong>
    </v-flex>
  </v-footer>
</template>

<script>
export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0]
}
</script>

<style lang="scss" scoped>

</style>
