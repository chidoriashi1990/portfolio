<template>
  <section>
    <!-- Card -->
    <v-card v-bind:class="flat" class="mx-3 my-2" :height="height">
      <slot name="media"></slot>
      <!-- title -->
      <v-card-title primary-title v-bind:class="{'layout': true, 'justify-center': true, displayNone: titleDisable}">
        <div class="headline">{{title}}</div>
      </v-card-title>
      <!-- chips -->
      <slot name="chips"></slot>
      <!-- text -->
      <v-card-text class="card-text mx-2" v-bind:class="{displayNone: textDisable}">
          {{text}}
      </v-card-text>
      <!-- actions -->
      <v-card-actions v-bind:class="{displayNone: actionDisable}">
        <v-btn flat color="indigo" :href="link" target="_blank">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  methods: {
  },
  data () {
    return {
    }
  },
  props: {
    flat: {
      type: String,
      default: 'elevation-0 transparent',
      required: false
    },
    textDisable: {
      type: Boolean,
      default: false,
      required: false
    },
    actionDisable: {
      type: Boolean,
      default: false,
      required: false
    },
    height: {
      type: String,
      default: 'auto',
      required: false
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    text: {
      type: String,
      default: '',
      required: false
    },
    link: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.card-text {
  word-wrap: break-word;
  min-height: 100px;
}
.displayNone {
  display: none;
}
</style>
