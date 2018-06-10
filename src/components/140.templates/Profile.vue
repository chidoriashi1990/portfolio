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
      <grid-items gridSystem="xs12 sm12 md4" :gridItems="worksGitHubItems" flat height="220"/>
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

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
    MyToolbar,
    MyFooter,
    Headline,
    CardProfile,
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
      cardProfile: {
        name: 'Yusuke Miyakawa',
        text: '',
        link: 'https://github.com/chidoriashi1990'
      },
      // Grid Items
      worksGitHubItems: [
        {
          media: '',
          title: 'Template-Vue-Project',
          text: 'Project model that incorporates Vue-Cli, Vuex and Storybook',
          link: 'https://github.com/chidoriashi1990/Template-Vue-Project'
        },
        {
          media: '',
          title: 'my-github-pages',
          text: 'This is my github.io source code',
          link: 'https://github.com/chidoriashi1990/my-github-pages'
        },
        {
          media: '',
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
