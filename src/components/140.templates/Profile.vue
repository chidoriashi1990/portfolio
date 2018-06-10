<template>
  <v-content>

    <my-toolbar :linkItems="linkItems" />

    <!-- parallax image -->
    <section>
      <v-parallax :src="require('./../../assets/profile/g4712_h.jpg')" class="mb-5" height="300">
        <v-layout column align-center justify-center class="indigo--text">
          <h1 class="display-2 mb-2 text-xs-center">XXX</h1>
          <div class="subheading mb-3 text-xs-center">Yusuke's portfolio</div>
        </v-layout>
      </v-parallax>
    </section>

    <!-- headline -->
    <headline :headline="linkItems[1].label" :subheading="b"/>

    <!-- card layout -->
    <section>
      <v-container class="mb-4" fluid>
        <v-layout wrap row>
          <v-flex xs12 offset-xs0 md8 offset-md2 lg8 offset-lg2>
            <!-- Card -->
            <card :cardItem="cardItem"/>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <!-- Grid -->
    <grid-items gridSystem="xs12 sm12 md4" :gridItems="gridItems"/>

    <!-- Return top -->
    <v-fab-transition>
      <v-btn dark color="indigo" fab fixed bottom right
             @click="$vuetify.goTo('#top', option)">
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>

    <my-footer/>

  </v-content>
</template>

<script>
import MyToolbar from '@/components/130.organisms/Toolbar'
import MyFooter from '@/components/130.organisms/Footer'
import Headline from './../120.molecules/Headline'
import Card from './../120.molecules/Card'
import GridItems from './../120.molecules/GridItems'

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
    MyToolbar,
    MyFooter,
    Headline,
    Card,
    GridItems
  },
  data () {
    return {
      linkItems: [
        { icon: '', label: 'TOP', to: '#top' },
        { icon: '', label: 'Who am I ?', to: '#whoAmI' },
        { icon: '', label: 'Works', to: '#works' }
      ],
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
