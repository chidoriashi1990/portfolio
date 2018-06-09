<template>
  <div id="Profile">
    <img src="parallaxImageSrc">

    <v-parallax id="whoAmI" src="parallaxImageSrc" height="600">
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-4 indigo--text">Who am I ?</h3>
        </v-flex>
      </v-layout>
    </v-parallax>

    <v-parallax id="works" src="parallaxImageSrc" height="600">
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
      parallaxImageSrc: './../../assets/profile/g4712.jpg',
      // Return top option
      option: {
        duration: 800
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
