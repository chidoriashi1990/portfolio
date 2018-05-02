<template>
  <div id="UserInfo">
    <h2>UserInfo</h2>
    <p>id: {{ id }}</p>
    <p>name: {{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  components: {

  },
  data () {
    return {
      msg: 'UserInfo'
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
  computed: {
    id   () { return this.$store.getters['userInfo/id'] },
    name () { return this.$store.getters['userInfo/name'] }
  }
}
</script>

<style lang="scss" scoped>
// $cardHeight: 0vh;
</style>
