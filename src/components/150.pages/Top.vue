<template>
  <div id="top">
    <my-toolbar/>
    <profile/>
    <my-footer/>
  </div>
</template>

<script>
import MyToolbar from '@/components/130.organisms/Toolbar'
import Profile from '@/components/140.templates/Profile'
import MyFooter from '@/components/130.organisms/Footer'

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
    MyToolbar,
    Profile,
    MyFooter
  }
}
</script>

<style lang="scss" scoped>

</style>
