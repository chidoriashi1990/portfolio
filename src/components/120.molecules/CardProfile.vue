<template>
  <v-card>
    <v-card-text class="card-text">
      <!-- avatar image -->
      <div class="text-xs-center">
        <v-avatar slot="activator" size="72px" class="elevation-7">
          <img :src="avatarSrc">
        </v-avatar>
      </div>
      <!-- avatar name -->
      <div class="headline my-3 text-xs-center" style="font-weight:bold">{{cardItem.name}}</div>
      <div class="mx-3">{{cardItem.text}}</div>
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
    avatarSrc: {
      type: String,
      default: null,
      required: false
    },
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
