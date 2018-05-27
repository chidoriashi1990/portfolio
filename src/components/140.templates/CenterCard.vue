<template>
  <v-container grid-list-md text-xs-center>
    <!-- Card -->
    <v-layout column align-center justify-center>
      <v-flex xs4>
        <card/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from './../130.organisms/Card'

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>

</style>
