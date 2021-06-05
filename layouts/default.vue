<template>
  <v-app>
    <v-main>
      <portfoliem-header @menu="scrollTo" @transMode="cangeTransMode" />
      <v-container>
        <nuxt class="wrapper" />
      </v-container>
      <contact-footer
        id="contact"
        title="contact"
        :action-buttons="socialData"
      />
    </v-main>
  </v-app>
</template>

<script>
import PortfoliemHeader from '@/components/Header/PortfoliemHeader'
import ContactFooter from '@/components/Footer/ContactFooter'

export default {
  components: {
    PortfoliemHeader,
    ContactFooter,
  },
  data: () => ({
    socialData: [
      {
        icon: 'mdi-email',
        href: 'mailto:chidoriashi00918@gmail.com',
      },
      {
        icon: 'mdi-linkedin',
        href: 'https://www.linkedin.com/in/yusuke-miyakawa-a0a219191/',
      },
      {
        icon: 'mdi-facebook',
        href: 'https://www.facebook.com/YuM1909',
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com/MiyakawaYusuke',
      },
      {
        icon: 'mdi-github',
        href: 'https://github.com/chidoriashi1990',
      },
    ],
  }),
  methods: {
    /**
     * @module scrollTo
     * @param {string} menu
     */
    scrollTo(menu) {
      this.$vuetify.goTo('#' + menu)
    },
    /**
     * @module cangeTransMode
     * @param {string} transMode
     */
    cangeTransMode(transMode) {
      switch (transMode) {
        case 'en':
          this.$router.push('/')
          break
        default:
          this.$router.push('/' + transMode)
      }
    },
  },
}
</script>

<style scoped>
.wrapper {
  padding-bottom: 260px;
}
</style>
