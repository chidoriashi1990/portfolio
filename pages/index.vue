<template>
  <profile-desktop>
    <!-- Main Component -->
    <template #main>
      <profile-card
        :profile-image="profileImage"
        :action-buttons="socialData"
        class="mb-12"
      />

      <!-- About -->
      <section-card id="about" title="about" class="mb-12">
        <template #text>
          <v-card flat>
            <v-card-actions>
              <v-icon x-large>mdi-format-quote-open</v-icon>
            </v-card-actions>
          </v-card>

          <div class="mx-8">
            <p class="font-weight-bold text-subtitle-1 text--primary">
              {{ $t('about-sub-title') }}
            </p>
            <p class="body-2 text--primary">
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

      <!-- Works -->
      <section-card id="works" title="works" class="mb-12">
        <template #text>
          <!-- Sub title -->
          <p class="text-h6">
            {{ $t('work.sub-titile-1') }}
          </p>
          <v-divider />

          <!-- Timeline -->
          <v-timeline dense>
            <v-timeline-item
              v-for="(item, i) in timeline"
              :key="i"
              color="transparent"
              large
            >
              <template #icon>
                <v-icon large>{{ item.icon }}</v-icon>
              </template>
              <v-card>
                <v-card-text>
                  <div>{{ item.yyyymm }}</div>
                  <div class="text-subtitle-1 text--primary">
                    {{ $t(item.title) }}
                  </div>
                  <div
                    v-for="(content, j) in item.contents"
                    :key="j"
                    class="text--primary"
                  >
                    {{ $t(content + '.text') }}
                  </div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </template>
      </section-card>
    </template>

    <!-- Dark Mode Switch -->
    <template #right-side>
      <div class="d-none d-sm-flex">
        <dark-mode-switch @darkMode="darkModeSwitch" />
      </div>
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
      timeline: [
        {
          yyyymm: '2014-04',
          icon: 'mdi-domain',
          title: 'work.history.domain01.title',
          contents: ['work.history.domain01.contents.content01'],
        },
        {
          yyyymm: '2013-03',
          icon: 'mdi-school',
          title: 'work.history.university.title',
          contents: ['work.history.university.contents.content01'],
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
