<template>
  <v-content>
    <!-- parallax image -->
    <section>
      <v-parallax :src="require('./../../assets/profile/g4712_h.jpg')" height="400">
        <v-layout column align-center justify-center class="indigo--text">
          <h1 class="display-2 mb-2 text-xs-center">Mesh Portal</h1>
          <div class="subheading mb-3 text-xs-center">Yusuke's portfolio</div>
        </v-layout>
      </v-parallax>
    </section>
    <!-- main contents -->
    <section>
      <v-container fluid>
        <v-layout wrap row>
          <v-flex xs12 offset-xs0 md8 offset-md2 lg8 offset-lg2>
            <!-- Card -->
            <v-card>
              <v-card-title primary-title>
                <div class="headline">Card Title</div>
                <div>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-container grid-list-xl>
      <v-layout row>
        <v-flex xs12 md4 v-for="n in 3" :key="n">
          <!-- Card -->
          <v-card class="elevation-0 transparent">
            <!-- icon -->
            <v-card-text class="text-xs-center">
              <div class="headline">Card Title</div>
            </v-card-text>
            <!-- title -->
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Fast development</div>
            </v-card-title>
            <!-- text -->
            <v-card-text>
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Return top -->
    <v-fab-transition>
      <v-btn dark color="indigo" fab fixed bottom right
             @click="$vuetify.goTo('#top', option)">
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>

  </v-content>
</template>

<script>
export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
  },
  data () {
    return {
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
