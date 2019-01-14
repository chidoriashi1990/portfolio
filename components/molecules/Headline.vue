<template>
  <section>
    <v-flex xs12 class="mb-4">
      <div class="text-xs-center">
        <h2 class="headline">{{headline}}</h2>
        <span class="subheading">{{subheading}}</span>
      </div>
    </v-flex>
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
    headline: {
      type: String,
      default: 'Headline',
      required: false
    },
    subheading: {
      type: String,
      default: 'Subheading',
      required: false
    }
  }
}
</script>

<style scoped>
</style>
