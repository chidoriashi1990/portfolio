<template>
    <section>
      <v-container class="mb-5" grid-list-xs>
        <v-layout row wrap>
          <v-flex v-bind:class="gridSystem" v-for="gi in gridItems" :key="gi.title">
            <!-- Card -->
            <v-card class="elevation-0 transparent">
              <!-- icon -->
              <v-card-text class="text-xs-center">
                <div class="headline">{{gi.icon}}</div>
              </v-card-text>
              <!-- title -->
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{gi.title}}</div>
              </v-card-title>
              <!-- text -->
              <v-card-text class="card-text">
                  {{gi.text}}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
</template>

<script>
export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  props: {
    gridSystem: {
      type: String,
      default: '',
      required: false
    },
    gridItems: {
      type: Array,
      default: null,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card-text {
  word-wrap: break-word;
}
</style>
