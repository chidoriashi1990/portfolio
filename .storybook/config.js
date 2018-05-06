import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// 正規表現で「components/{カテゴリー}」以下の「_stories.js」を取得
const req = require.context("../src/components", true, /_stories.js$/)

// forEachループでrequire()
function loadStories() {
  // Welcomeが先に読まれるように配置
  require('../src/stories')
  // components以下のstories.jsを読み込む
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
