<template>
  <div id="top">
    <profile/>
  </div>
</template>

<script>
import Profile from '@/components/140.templates/Profile'

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
    Profile
  }
}
</script>

<style lang="scss" scoped>
</style>
