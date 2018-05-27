<template>
  <v-container grid-list-md text-xs-center>
    <v-layout v-resize="onResize">
      <!-- Layout Style Card -->
      <v-flex xs8>
        <card/>
      </v-flex>
      <!-- Card Windows Size -->
      <v-flex class="card-window-size" v-bind:class="{ hidden: !cardWindowsSize }">
        <v-card width="300px" height="150px">
          <v-card-title class="headline mb-0">Window Size</v-card-title>
          <div>{{ windowSize }}</div>
          <v-card-actions/>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- フッター -->
    <v-footer color="blue darken-3" height="50" style="z-index: 100;" app>
      <v-toolbar-title></v-toolbar-title>
      <!-- Floating Action Button -->
      <v-card-text class="floating-action-button" @click="cardWindowsSize = !cardWindowsSize">
        <v-btn absolute dark fab top right color="pink">
          <v-icon>photo_size_select_small</v-icon>
        </v-btn>
      </v-card-text>
    </v-footer>
  </v-container>
</template>

<script>
import Card from './../130.organisms/Card'

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
    Card
  },
  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    },
    cardWindowsSize: true
  }),
  mounted () {
    this.onResize()
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-window-size {
  position: fixed;
  right: 1em;
}
.hidden {
  display: none;
}
</style>
