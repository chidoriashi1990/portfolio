<template>
  <v-card
    :dark="switchValue"
    rounded="xl"
    elevation="0"
    outlined
    class="d-inline-flex px-8 py-2"
    min-width="242"
    min-height="106"
  >
    <v-card-actions>
      <v-switch
        v-model="switchValue"
        inset
        color="purple"
        @click="clickSwitch"
      />
      <v-btn fab x-large elevation="0" :ripple="false" class="ml-8">
        <v-icon fab color="yellow darken-1"> mdi-weather-night </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DarkModeSwitch',
  data: () => ({
    switchValue: false,
  }),
  created() {
    const darkmode = localStorage.getItem('darkmode')
    if (darkmode === null) {
      this.checkDarkMode()
    } else {
      this.switchValue = JSON.parse(darkmode.toLowerCase())
    }
    this.clickSwitch()
  },
  methods: {
    clickSwitch() {
      localStorage.setItem('darkmode', this.switchValue)
      this.$emit('darkMode', this.switchValue)
    },
    checkDarkMode() {
      // eslint-disable-next-line nuxt/no-globals-in-created
      if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
        this.switchValue = true
      } else {
        this.switchValue = false
      }
    },
  },
}
</script>
