<template>
  <v-app>
    <div class="MaterialSample">
      <h1>MaterialSample</h1>
      <v-menu transition="slide-y-transition">
        <v-btn slot="activator" dark color="primary">Slide Y Transition</v-btn>
        <v-list>
          <v-list-tile v-for="n in 5" :key="n">
            <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'MaterialSample',
  components: {

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
