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
  data () {
    return {
      items: [
        {
          title: 'Top',
          icon: 'home',
          to: '/'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
