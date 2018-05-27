<template>
  <v-list class="pt-0">
    <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
      <v-list-tile-action><v-icon>{{ item.icon }}</v-icon></v-list-tile-action>
      <v-list-tile-content><v-list-tile-title>{{ item.title }}</v-list-tile-title></v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  data () {
    return {
      items: [
        {
          title: 'Top',
          icon: 'home',
          to: '/'
        },
        {
          title: 'LayoutCard',
          icon: 'sim_card',
          to: '/LayoutCard'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// $cardHeight: 0vh;
</style>
