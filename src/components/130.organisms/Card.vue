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
          class: 'hidden-xs-and-down',
          msg: '縦向きスマートフォン(<600px)より小さいとき隠す',
          color: 'green'
        },
        {
          class: 'hidden-sm-and-down',
          msg: '横向きスマートフォン(600px > < 960px)より小さいとき隠す',
          color: 'light-green'
        },
        {
          class: 'hidden-md-and-down',
          msg: 'ノートパソコン(960px > < 1264*)より小さいとき隠す',
          color: 'lime'
        },
        {
          class: 'hidden-lg-and-down',
          msg: 'デスクトップ(1264 > < 1904px*)より小さいとき隠す',
          color: 'orange'
        },
        {
          class: 'hidden-xl-and-down',
          msg: '4kモニター(> 1904px*)より小さいとき隠す',
          color: 'amber'
        },
        {
          class: 'hidden-xs-and-up',
          msg: '縦向きスマートフォン(<600px)より大きいとき隠す',
          color: 'deep-orange'
        },
        {
          class: 'hidden-sm-and-up',
          msg: '横向きスマートフォン(600px > < 960px)より大きいとき隠す',
          color: 'blue-grey'
        },
        {
          class: 'hidden-md-and-up',
          msg: 'ノートパソコン(960px > < 1264*)より大きいとき隠す',
          color: 'grey'
        },
        {
          class: 'hidden-lg-and-up',
          msg: 'デスクトップ(1264 > < 1904px*)より大きいとき隠す',
          color: 'black'
        },
        {
          class: 'hidden-xl-and-up',
          msg: '4kモニター(> 1904px*)より大きいとき隠す',
          color: 'brown'
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
