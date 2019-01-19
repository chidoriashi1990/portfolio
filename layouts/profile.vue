<template>
  <v-app>

    <my-toolbar :linkItems="linkItems" :scrollOption="option"/>

    <!-- parallax image -->
    <!-- <section>
      <v-parallax :src="'https://avatars3.githubusercontent.com/u/3616178?s=400&u=31c2ba033be86ce669e96456bca7cecd1e1f769b&v=4'" class="mb-5" height="300">
        <v-layout column align-center justify-center class="indigo--text">
          <h1 class="display-2 mb-2 text-xs-center"></h1>
          <div class="subheading mb-3 text-xs-center"></div>
        </v-layout>
      </v-parallax>
    </section> -->

    <section id="whoAmI">
      <!-- headline: Who am I ? profile -->
      <headline :headline="linkItems[1].label" subheading="Profile"/>

      <!-- profile -->
      <section>
        <v-container fluid>
          <v-layout wrap row>
            <v-flex xs12 offset-xs0 md8 offset-md2>
              <!-- card: profile -->
              <card-profile :avatarSrc="'https://avatars3.githubusercontent.com/u/3616178?s=400&u=31c2ba033be86ce669e96456bca7cecd1e1f769b&v=4'" :cardItem="cardProfile" class="mb-4">
                <!-- grid icon -->
                <template slot="grid-icon">
                  <div class="text-xs-center">
                    <v-icon>fas fa-github</v-icon>
                  </div>
                </template>
                <!-- link button -->
                <template slot="button">
                  <div class="text-xs-center">
                    <v-btn dark color="indigo" :href="cardProfile.link" target="_blank">GitHub</v-btn>
                    <v-btn dark color="indigo" href="https://twitter.com/MiyakawaYusuke" target="_blank">twitter</v-btn>
                    <v-btn dark color="indigo" href="https://qiita.com/chidoriashi1990" target="_blank">Qiita</v-btn>
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
          <v-flex xs12 sm12 md4 v-for="(gi, index) in worksGitHubItems" :key="index">
            <grid-item flat :title="gi.title" :text="gi.text" :link="gi.link">
              <!-- Repositories: Image -->
              <!-- <template v-if="gi.media != ''" slot="media">
                <div class="text-xs-center">
                  <v-avatar slot="activator" size="144px" class="elevation-7 my-3">
                    <img :src="gi.media">
                  </v-avatar>
                </div>
              </template> -->
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

  </v-app>
</template>

<script>
import MyToolbar from './../components/organisms/Toolbar'
import MyFooter from './../components/organisms/Footer'
import Headline from './../components/molecules/Headline'
import CardProfile from './../components/molecules/CardProfile'
import Card from './../components/molecules/Card'
import GridItems from './../components/molecules/GridItems'
import GridItem from './../components/molecules/GridItem'
import ChipItems from './../components/molecules/ChipItems'

export default {
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
      // Return top option
      option: {
        duration: 800,
        offset: -100
      }
    }
  },
  computed: {
    // main link item
    linkItems () { return this.$store.getters['profile/linkItems'] },
    // Card Profile
    cardProfile () { return this.$store.getters['profile/cardProfile'] },
    // Chip Used Program List
    usedProgramList () { return this.$store.getters['profile/usedProgramList'] },
    // Framework List
    usedFrameworkList () { return this.$store.getters['profile/usedFrameworkList'] },
    // Grid Items
    worksGitHubItems () { return this.$store.getters['profile/worksGitHubItems'] }
  }
}
</script>

<style scoped>
.card-text {
  word-wrap: break-word;
}
</style>
