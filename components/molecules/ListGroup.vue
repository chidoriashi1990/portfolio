<template>
  <v-list>
    <v-list-group v-for="subItem in subItems" :key="subItem.title" prepend-icon="account_circle" value="true">
      <v-list-tile slot="activator">
        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
      </v-list-tile>
      <v-list-tile v-for="item in subItem.items" :key="item.title">
        <v-list-tile-action><v-icon/></v-list-tile-action>
        <v-list-tile-content><v-list-tile-title>{{ item.title }}</v-list-tile-title></v-list-tile-content>
      </v-list-tile>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      subItems: [
        {
          title: 'AdminUser',
          items: [
            { title: 'user1' },
            { title: 'user2' },
            { title: 'user3' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
