<template>
<v-app>
  <VuetifyTemplate/>
  <div>
    <router-link to="/">
      <v-btn color="success">HOME</v-btn>
    </router-link>
  </div>
</v-app>
</template>

<script>
import VuetifyTemplate from '@/components/140.templates/VuetifyTemplate'

export default {
  name: 'MaterialSample',
  components: {
    VuetifyTemplate
  },
  data () {
    return {
      msg: 'MaterialSample!'
    }
  }
}
</script>

<style lang="scss" scoped>
.MaterialSample {
  height: 80vh;
}
</style>
