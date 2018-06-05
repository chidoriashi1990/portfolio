<template>
  <div id="Profile">
    <v-jumbotron>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">Gradient over Image</h3>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>

    <v-content>
      <v-container app>
        <img src="./../../assets/profile/g4712.png" alt="">
      </v-container>
    </v-content>

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
