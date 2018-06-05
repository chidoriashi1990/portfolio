<template>
  <div id="Profile">
    <img src="https://chidoriashi1990.github.io/static/img/g4712.6609c58.png">

    <v-parallax id="whoAmI" src="https://chidoriashi1990.github.io/static/img/g4712.6609c58.png" height="600">
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-4 indigo--text">Who am I ?</h3>
        </v-flex>
      </v-layout>
    </v-parallax>

    <v-parallax id="works" src="https://chidoriashi1990.github.io/static/img/g4712.6609c58.png" height="600">
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-4 indigo--text">Works</h3>
        </v-flex>
      </v-layout>
    </v-parallax>

    <!-- Return top -->
    <v-fab-transition>
      <v-btn dark color="indigo" fab fixed bottom right
             @click="$vuetify.goTo('#top', option)">
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {

  },
  data () {
    return {
      option: {
        duration: 800
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
