<template>
  <v-card>
    <v-card-title primary-title>
      <div class="headline">{{cardItem.title}}</div>
    </v-card-title>
    <v-card-text class="card-text">
      {{cardItem.text}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    cardItem: {
      type: Object,
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
