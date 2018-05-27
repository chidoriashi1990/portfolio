<template>
  <div>
    <v-card class="white--text elevation-10" style="margin-bottom: 1em;" v-bind:class="item.class" :color="item.color" v-for="item in items" :key="item.title">
      <v-card-title>
        <div>
          <div class="headline mb-0">{{ item.class }}</div>
          <div>{{ item.msg }}</div>
        </div>
      </v-card-title>
      <v-card-actions/>
    </v-card>
  </div>
</template>

<script>
export default {
  name: location.href.split(/\/(?!.*\/)/)[1].split(/\.(?!.*\.)/)[0],
  components: {

  },
  data () {
    return {
      items: [
        {
          class: 'hidden-xs-only',
          msg: '縦向きスマートフォン(<600px)のとき隠す',
          color: 'red'
        },
        {
          class: 'hidden-sm-only',
          msg: '横向きスマートフォン(600px > < 960px)のとき隠す',
          color: 'pink'
        },
        {
          class: 'hidden-md-only',
          msg: 'ノートパソコン(960px > < 1264*)のとき隠す',
          color: 'purple'
        },
        {
          class: 'hidden-lg-only',
          msg: 'デスクトップ(1264 > < 1904px*)のとき隠す',
          color: 'indigo'
        },
        {
          class: 'hidden-xl-only',
          msg: '4kモニター(> 1904px*)のとき隠す',
          color: 'teal'
        },
        {
          class: 'hidden-lg-and-down',
          msg: 'デスクトップ(1264 > < 1904px*)より小さいとき隠す',
          color: 'orange'
        }
      ]
    }
  },
  methods: {
    /**
     * 概要
     * @param {string} val: 説明
     */
    tmp (val) {

    }
  }
}
</script>

<style lang="scss" scoped>
// $cardHeight: 0vh;
</style>
