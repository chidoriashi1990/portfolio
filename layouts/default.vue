<template>
  <v-app>
    <v-main>
      <portfoliem-header />
      <v-container>
        <nuxt />
      </v-container>
      <contact-footer title="contact" :action-buttons="socialData" />
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
}
</script>
