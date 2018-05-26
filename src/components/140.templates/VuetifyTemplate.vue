<template>
  <div id="VuetifyTemplate">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {

  },
  data () {
    return {
      msg: 'VuetifyTemplate',
      source: []
    }
  },
  methods: {
    /**
     * 概要
     * @param {string} val: 説明
     */
    tmp (val) {

    }
  },
  props: {
    prop1: {
      type: String,
      default: 'default',
      required: true // requiredは必ず要求するプロパティ
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
#VuetifyTemplate {
  margin: 1vh;
}
</style>
