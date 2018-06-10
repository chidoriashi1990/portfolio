<template>
  <!-- フッター -->
  <v-footer app dark absolute>
    <v-flex xs12 text-xs-center>
      Made by <strong>Yusuke Miyakawa</strong> @ {{ new Date().getFullYear() }}
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
