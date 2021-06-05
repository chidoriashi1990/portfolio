<template>
  <profile-desktop>
    <!-- Main Component -->
    <template #main>
      <profile-card
        :profile-image="profileImage"
        :action-buttons="socialData"
        class="mb-12"
      />

      <section-card id="about" title="about" class="mb-12">
        <template #text>
          <v-card flat>
            <v-card-actions>
              <v-icon x-large>mdi-format-quote-open</v-icon>
            </v-card-actions>
          </v-card>

          <div class="mx-8">
            <p class="font-weight-bold text-subtitle-1">
              {{ $t('about-sub-title') }}
            </p>
            <p class="body-2">
              {{ $t('about') }}
            </p>
          </div>

          <v-card flat>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-icon x-large>mdi-format-quote-close</v-icon>
            </v-card-actions>
          </v-card>
        </template>
      </section-card>

      <section-card id="works" title="works" class="mb-12">
        <template #text>
          {{ $t('work') }}
        </template>
      </section-card>
    </template>

    <!-- Dark Mode Switch -->
    <template #right-side>
      <dark-mode-switch @darkMode="darkModeSwitch" />
    </template>
  </profile-desktop>
</template>

<script>
import ProfileDesktop from '@/layouts/ProfileDesktop'

import ProfileCard from '@/components/Card/ProfileCard'
import SectionCard from '@/components/Card/SectionCard'
import DarkModeSwitch from '@/components/Switch/DarkModeSwitch'

export default {
  components: { ProfileDesktop, ProfileCard, SectionCard, DarkModeSwitch },
  data: () => {
    return {
      profileImage: 'https://avatars.githubusercontent.com/u/3616178?v=4',
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
    }
  },
  methods: {
    darkModeSwitch(darkModeVal) {
      this.$vuetify.theme.dark = darkModeVal
    },
  },
}
</script>
