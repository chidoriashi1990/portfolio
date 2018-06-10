<template>
  <section>
    <v-container class="mb-5" grid-list-xs>
      <v-layout row wrap>
        <v-flex v-bind:class="gridSystem" v-for="gi in gridItems" :key="gi.title">
          <!-- Card -->
          <v-card v-bind:class="flat" class="mx-3 my-2" :height="height">
            <!-- title -->
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">{{gi.title}}</div>
            </v-card-title>
            <!-- text -->
            <v-card-text class="card-text">
                {{gi.text}}
            </v-card-text>
            <!-- actions -->
            <v-card-actions style="position: absolute; bottom: 0;">
              <v-btn flat color="indigo" :href="gi.link" target="_blank">Explore</v-btn>
            </v-card-actions>
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
    },
    flat: {
      type: String,
      default: 'elevation-0 transparent',
      required: false
    },
    height: {
      type: String,
      default: '200',
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
