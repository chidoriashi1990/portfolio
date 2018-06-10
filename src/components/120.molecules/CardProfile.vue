<template>
  <section>
    <v-card v-bind:class="flat">
      <v-card-text class="card-text" v-bind:class="flat">
        <!-- avatar image -->
        <div class="text-xs-center">
          <v-avatar slot="activator" size="72px" class="elevation-7">
            <img :src="avatarSrc" :href="cardItem.link">
          </v-avatar>
        </div>
        <!-- avatar name -->
        <div class="headline mt-3 text-xs-center" style="font-weight:bold">{{cardItem.name}}</div>
        <div class="mx-3">{{cardItem.text}}</div>
      </v-card-text>
    </v-card>
    <!-- grid icon -->
    <slot name="grid-icon"/>
    <!-- link button -->
    <slot name="button"/>
  </section>
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
    },
    flat: {
      type: String,
      default: 'elevation-0 transparent',
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
