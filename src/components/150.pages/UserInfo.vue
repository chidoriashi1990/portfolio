<template>
  <div id="UserInfo">
    <one-col-two-row :id="id" :name="name"></one-col-two-row>
  </div>
</template>

<script>
import OneColTwoRow from '@/components/140.templates/sample/OneColTwoRow'

export default {
  name: 'UserInfo',
  components: {
    OneColTwoRow
  },
  data () {
    return {
      msg: 'UserInfo'
    }
  },
  methods: {

  },
  computed: {
    id   () { return this.$store.getters['userInfo/id'] },
    name () { return this.$store.getters['userInfo/name'] }
  }
}
</script>
