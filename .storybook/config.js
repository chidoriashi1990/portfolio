import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 正規表現で「components/{カテゴリー}」以下の「stories.js」を取得
const req = require.context("../src/components", true, /stories.js$/)

// forEachループでrequire()
function loadStories() {
  // Welcomeが先に読まれるように配置
  require('../src/stories')
  // components以下のstories.jsを読み込む
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
