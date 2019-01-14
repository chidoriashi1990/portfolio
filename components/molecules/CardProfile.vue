<template>
  <section>
    <v-card flat>
      <!-- avatar image -->
      <div class="text-xs-center">
        <v-avatar slot="activator" size="72px" class="elevation-7">
          <img :src="avatarSrc" :href="cardItem.link">
        </v-avatar>
      </div>
      <!-- avatar name -->
      <div class="headline mt-3 text-xs-center" style="font-weight:bold">{{cardItem.name}}</div>
      <div class="mx-3">{{cardItem.text}}</div>
    </v-card>
    <!-- grid icon -->
    <slot name="grid-icon"/>
    <!-- link button -->
    <slot name="button"/>
  </section>
</template>

<script>
export default {
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

<style scoped>
</style>
