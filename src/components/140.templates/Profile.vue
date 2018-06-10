<template>
  <v-content>
    <!-- parallax image -->
    <section>
      <v-parallax :src="require('./../../assets/profile/g4712_h.jpg')" class="mb-5" height="400">
        <v-layout column align-center justify-center class="indigo--text">
          <h1 class="display-2 mb-2 text-xs-center">XXX</h1>
          <div class="subheading mb-3 text-xs-center">Yusuke's portfolio</div>
        </v-layout>
      </v-parallax>
    </section>

    <!-- main contents -->
    <section>
      <v-container class="mb-4" fluid>
        <v-layout wrap row>
          <v-flex xs12 offset-xs0 md8 offset-md2 lg8 offset-lg2>
            <!-- Card -->
            <v-card>
              <v-card-title primary-title>
                <div class="headline">{{cardItem.title}}</div>
              </v-card-title>
              <v-card-text class="card-text">
                {{cardItem.text}}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <!-- Grid -->
    <section>
      <v-container class="mb-5" grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12 sm12 md4 v-for="gi in gridItems" :key="gi.title">
            <!-- Card -->
            <v-card class="elevation-0 transparent">
              <!-- icon -->
              <v-card-text class="text-xs-center">
                <div class="headline">{{gi.icon}}</div>
              </v-card-text>
              <!-- title -->
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{gi.title}}</div>
              </v-card-title>
              <!-- text -->
              <v-card-text class="card-text">
                  {{gi.text}}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

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
      // Card Item
      cardItem: {
        title: 'Card Title',
        text: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      },
      // Grid Items
      gridItems: [
        {icon: 'A', title: 'AAA', text: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'},
        {icon: 'B', title: 'BBB', text: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'},
        {icon: 'C', title: 'CCC', text: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'}
      ],
      // Return top option
      option: {
        duration: 800
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-text {
  word-wrap: break-word;
}
</style>
