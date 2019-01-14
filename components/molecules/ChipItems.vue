<template>
  <v-container class="my-0 mx-0 py-0">
    <v-layout>
      <v-flex class="mx-3 mx-0">
        <span v-for="(chip, index) in chips" :key="index">
          <v-chip :color="chip.color" :text-color="chip.textColor">{{chip.text}}</v-chip>
        </span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  props: {
    chips: {
      type: Array,
      default: Array,
      required: false
    }
  }
}
</script>

<style scoped>
</style>
