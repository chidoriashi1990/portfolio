<template>
  <v-content>

    <my-toolbar :linkItems="linkItems" :scrollOption="option"/>

    <!-- parallax image -->
    <section>
      <v-parallax :src="require('./../../assets/profile/g4712_h.jpg')" class="mb-5" height="300">
        <v-layout column align-center justify-center class="indigo--text">
          <h1 class="display-2 mb-2 text-xs-center"></h1>
          <div class="subheading mb-3 text-xs-center"></div>
        </v-layout>
      </v-parallax>
    </section>

    <section id="whoAmI">
      <!-- headline: Who am I ? profile -->
      <headline :headline="linkItems[1].label" subheading="Profile"/>

      <!-- profile -->
      <section>
        <v-container fluid>
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
    </section>

    <section id="IhaveUsed">
      <!-- headline: Who am I ? Programming language I have used -->
      <headline headline="I have used" subheading="Programming language"/>
      <v-container class="mb-5 py-0">
        <v-layout row wrap>
          <v-flex xs12 sm12 md3 v-for="(p, index) in usedProgramList" :key="index" class="text-xs-center">
            <grid-item textDisable actionDisable :title="p.text">
              <!-- used language -->
              <template slot="media">
                <div class="text-xs-center">
                  <v-avatar slot="activator" size="144px" class="elevation-7">
                    <img :src="p.media">
                  </v-avatar>
                </div>
              </template>
            </grid-item>
          </v-flex>
        </v-layout>
      </v-container>

      <!-- headline: Who am I ? Framework I have used -->
      <headline headline="" subheading="Framework"/>
      <v-container class="mb-5 py-0">
        <v-layout row wrap>
          <v-flex xs12 sm12 md3 v-for="(f, index) in usedFrameworkList" :key="index" class="text-xs-center">
            <grid-item textDisable actionDisable :title="f.text">
              <!-- used language -->
              <template slot="media">
                <div class="text-xs-center">
                  <v-avatar slot="activator" size="144px" class="elevation-7">
                    <img :src="f.media">
                  </v-avatar>
                </div>
              </template>
            </grid-item>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section id="works">
      <!-- headline: Works -->
      <headline :headline="linkItems[3].label" subheading="GitHub Repositories"/>
      <!-- Repositories -->
      <v-container class="mb-5" grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12 sm12 md4 v-bind:class="gridSystem" v-for="(gi, index) in worksGitHubItems" :key="index">
            <grid-item flat :title="gi.title" :text="gi.text" :link="gi.link">
              <!-- Repositories: Image -->
              <template slot="media">
                <div class="text-xs-center">
                  <v-avatar slot="activator" size="144px" class="elevation-7 my-3">
                    <img :src="gi.media">
                  </v-avatar>
                </div>
              </template>
              <!-- Chips -->
              <template slot="chips">
                <chip-items :chips=gi.chips style="min-height: 100px;"/>
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
import ChipItems from './../120.molecules/ChipItems'

export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {
    MyToolbar,
    MyFooter,
    Headline,
    CardProfile,
    Card,
    GridItems,
    GridItem,
    ChipItems
  },
  data () {
    return {
      linkItems: [
        { icon: '', label: 'TOP', to: '#top' },
        { icon: '', label: 'Who am I ?', to: '#whoAmI' },
        { icon: '', label: 'I have used', to: '#IhaveUsed' },
        { icon: '', label: 'Works', to: '#works' }
      ],
      // Card Profile
      cardProfile: {
        name: 'Yusuke Miyakawa',
        text: '',
        link: 'https://github.com/chidoriashi1990'
      },
      // Chip Used Program List
      usedProgramList: [
        {
          media: 'https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg',
          text: 'HTML5'
        },
        {
          media: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
          text: 'JavaScript'
        },
        {
          media: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
          text: 'Python3'
        },
        {
          media: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
          text: 'C#'
        }
      ],
      usedFrameworkList: [
        {
          media: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
          text: 'Vue.js'
        },
        {
          media: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          text: 'Angular'
        }
      ],
      // Grid Items
      worksGitHubItems: [
        {
          media: 'https://chidoriashi1990.github.io/img/Template-Vue-Project.jpg',
          title: 'template-vuejs-project',
          chips: [
            {text: 'Vue.js', color: 'indigo', textColor: 'white'},
            {text: 'vue-cli', color: 'indigo', textColor: 'white'},
            {text: 'Vuex', color: 'indigo', textColor: 'white'},
            {text: 'vue-router', color: 'indigo', textColor: 'white'},
            {text: 'Vuetify', color: 'indigo', textColor: 'white'},
            {text: 'Storybook', color: 'indigo', textColor: 'white'}
          ],
          text: 'Project model that incorporates Vue-Cli, Vuex, Vuetify and Storybook',
          link: 'https://github.com/chidoriashi1990/template-vuejs-project'
        },
        {
          media: 'https://chidoriashi1990.github.io/static/img/g4712.5e06d9f.jpg',
          title: 'my-github-pages',
          chips: [
            {text: 'Vue.js', color: 'indigo', textColor: 'white'},
            {text: 'vue-cli', color: 'indigo', textColor: 'white'},
            {text: 'Vuex', color: 'indigo', textColor: 'white'},
            {text: 'vue-router', color: 'indigo', textColor: 'white'},
            {text: 'Vuetify', color: 'indigo', textColor: 'white'},
            {text: 'Storybook', color: 'indigo', textColor: 'white'}
          ],
          text: 'This is my github.io source code',
          link: 'https://github.com/chidoriashi1990/my-github-pages'
        },
        {
          media: 'https://chidoriashi1990.github.io/img/OCR_Hollowing.png',
          title: 'ocr',
          chips: [
            {text: 'TensorFlow', color: 'indigo', textColor: 'white'},
            {text: 'Python 3', color: 'indigo', textColor: 'white'}
          ],
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
