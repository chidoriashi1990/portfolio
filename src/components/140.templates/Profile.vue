<template>
  <v-content>

    <my-toolbar :linkItems="linkItems" :scrollOption="option"/>

    <!-- parallax image -->
    <section>
      <v-parallax :src="require('./../../assets/profile/g4712_h.jpg')" class="mb-5" height="300">
        <v-layout column align-center justify-center class="indigo--text">
          <h1 class="display-2 mb-2 text-xs-center">XXX</h1>
          <div class="subheading mb-3 text-xs-center">Yusuke's portfolio</div>
        </v-layout>
      </v-parallax>
    </section>

    <section id="whoAmI">
      <!-- headline: Who am I ? profile -->
      <headline :headline="linkItems[1].label" subheading="Profile"/>

      <!-- profile -->
      <section>
        <v-container class="mb-4" fluid>
          <v-layout wrap row>
            <v-flex xs12 offset-xs0 md8 offset-md2 lg8 offset-lg2>
              <!-- card: profile -->
              <card-profile :avatarSrc="require('./../../assets/profile/g4712.jpg')" :cardItem="cardProfile" class="mb-4">
                <!-- grid icon -->
                <template slot="grid-icon">
                  <div class="text-xs-center">
                    <v-icon>fas fa-github</v-icon>
                  </div>
                </template>
                <!-- link button -->
                <template slot="button">
                  <div class="text-xs-center">
                    <v-btn dark color="indigo" :href="cardProfile.link" target="_blank">
                      Go to GitHub
                    </v-btn>
                  </div>
                </template>
              </card-profile>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <!-- headline: Who am I ? profile -->
      <!-- <headline headline="" subheading="Programming language I have used"/> -->
    </section>

    <section id="works">
      <!-- headline: Works -->
      <headline :headline="linkItems[2].label" subheading="GitHub Repositories"/>
      <!-- Repositories -->
      <v-container class="mb-5" grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12 sm12 md4 v-bind:class="gridSystem" v-for="(gi, index) in worksGitHubItems" :key="index">
            <grid-item flat :title="gi.title" :text="gi.text" :link="gi.link">
              <template slot="media">
                <!-- Repositories: Image -->
                <div class="text-xs-center">
                  <v-avatar slot="activator" size="144px" class="elevation-7 my-3">
                    <img :src="gi.media">
                  </v-avatar>
                </div>
              </template>
            </grid-item>
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

    <my-footer/>

  </v-content>
</template>

<script>
import MyToolbar from './../130.organisms/Toolbar'
import MyFooter from './../130.organisms/Footer'
import Headline from './../120.molecules/Headline'
import CardProfile from './../120.molecules/CardProfile'
import Card from './../120.molecules/Card'
import GridItems from './../120.molecules/GridItems'
import GridItem from './../120.molecules/GridItem'

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
    MyToolbar,
    MyFooter,
    Headline,
    CardProfile,
    Card,
    GridItems,
    GridItem
  },
  data () {
    return {
      linkItems: [
        { icon: '', label: 'TOP', to: '#top' },
        { icon: '', label: 'Who am I ?', to: '#whoAmI' },
        { icon: '', label: 'Works', to: '#works' }
      ],
      // Card Item
      cardProfile: {
        name: 'Yusuke Miyakawa',
        text: '',
        link: 'https://github.com/chidoriashi1990'
      },
      // Grid Items
      worksGitHubItems: [
        {
          media: 'https://chidoriashi1990.github.io/img/Template-Vue-Project.jpg',
          title: 'template-vuejs-project',
          text: 'Project model that incorporates Vue-Cli, Vuex, Vuetify and Storybook',
          link: 'https://github.com/chidoriashi1990/template-vuejs-project'
        },
        {
          media: 'https://chidoriashi1990.github.io/static/img/g4712.5e06d9f.jpg',
          title: 'my-github-pages',
          text: 'This is my github.io source code',
          link: 'https://github.com/chidoriashi1990/my-github-pages'
        },
        {
          media: 'https://chidoriashi1990.github.io/img/OCR_Hollowing.png',
          title: 'ocr',
          text: 'OCR system by TensorFlow and Python 3',
          link: 'https://github.com/chidoriashi1990/ocr'
        }
      ],
      // Return top option
      option: {
        duration: 800,
        offset: -100
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
