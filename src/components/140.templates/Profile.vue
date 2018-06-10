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
      <!-- headline: Who am I ? -->
      <headline :headline="linkItems[1].label" subheading=""/>
      <!-- card layout -->
      <section>
        <v-container class="mb-4" fluid>
          <v-layout wrap row>
            <v-flex xs12 offset-xs0 md8 offset-md2 lg8 offset-lg2>
              <!-- card: Profile -->
              <card-profile :avatarSrc="require('./../../assets/profile/g4712.jpg')" :cardItem="cardProfile" class="mb-4"/>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </section>

    <section id="works">
      <!-- headline: Works -->
      <headline :headline="linkItems[2].label" subheading="GitHub Repositories"/>
      <grid-items gridSystem="xs12 sm12 md4" :gridItems="worksGitHubItems" flat/>

      <headline headline="" subheading="Other"/>
      <grid-items gridSystem="xs12 sm12 md4" :gridItems="worksGitHubItems"/>
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
      myGithubUrl: 'https://github.com/chidoriashi1990/',
      linkItems: [
        { icon: '', label: 'TOP', to: '#top' },
        { icon: '', label: 'Who am I ?', to: '#whoAmI' },
        { icon: '', label: 'Works', to: '#works' }
      ],
      // Card Item
      cardProfile: {
        name: 'Yusuke Miyakawa',
        text: ''
      },
      // Grid Items
      worksGitHubItems: [
        {
          media: '',
          title: 'Template-Vue-Project',
          text: 'XXXXXXXXXXXXXXXX',
          link: this.myGithubUrl + 'Template-Vue-Project'
        },
        {
          media: '',
          title: 'my-github-pages',
          text: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          link: this.myGithubUrl + 'my-github-pages'
        },
        {
          media: '',
          title: 'ocr',
          text: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
          link: this.myGithubUrl + 'ocr'
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
