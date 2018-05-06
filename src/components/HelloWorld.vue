<template>
  <div class="hello">
    <global-header>test</global-header>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import GlobalHeader from '@/components/110.atoms/GlobalHeader'

export default {
  name: 'HelloWorld',
  components: {
    GlobalHeader
  },
  data () {
    return {
      msg: 'HelloWorld!'
    }
  }
}
</script>

<style scoped>

</style>
