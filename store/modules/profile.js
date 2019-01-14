/**
 * moduleUserInfo:
 * ユーザー情報のStoreを管理するモジュール
 *
 * Tips:
 *  this.$store.getters['userInfo/id']
 *  this.$store.dispatch['userInfo/id']
 */
export default {
  namespaced: true,
  /* state: Storeの状態 */
  state: {
    linkItems: [
      { icon: '', label: 'TOP', to: '#top' },
      { icon: '', label: 'Who am I ?', to: '#whoAmI' },
      { icon: '', label: 'I have used', to: '#IhaveUsed' },
      { icon: '', label: 'Works', to: '#works' }
    ],
    cardProfile: {
      name: 'Yusuke Miyakawa',
      text: '',
      link: 'https://github.com/chidoriashi1990'
    },
    usedProgramList: [
      {
        media: 'https://upload.wikimedia.org/wikipedia/commons/8/80/HTML5_logo_resized.svg',
        text: 'HTML5'
      },
      {
        media: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        text: 'JavaScript'
      },
      {
        media: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        text: 'Python3'
      },
      {
        media: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
        text: 'C#'
      }
    ],
    usedFrameworkList: [
      {
        media: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
        text: 'Vue.js'
      },
      {
        media: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
        text: 'Angular'
      }
    ],
    worksGitHubItems: [
      {
        media: 'https://chidoriashi1990.github.io/img/Template-Vue-Project.jpg',
        title: 'template-vuejs-project',
        chips: [
          {text: 'Vue.js', color: 'indigo', textColor: 'white'},
          {text: 'vue-cli', color: 'indigo', textColor: 'white'},
          {text: 'Vuex', color: 'indigo', textColor: 'white'},
          {text: 'vue-router', color: 'indigo', textColor: 'white'},
          {text: 'Vuetify', color: 'indigo', textColor: 'white'},
          {text: 'Storybook', color: 'indigo', textColor: 'white'}
        ],
        text: 'Project model that incorporates Vue-Cli, Vuex, Vuetify and Storybook',
        link: 'https://github.com/chidoriashi1990/template-vuejs-project'
      },
      {
        media: 'https://chidoriashi1990.github.io/static/img/g4712.5e06d9f.jpg',
        title: 'my-github-pages',
        chips: [
          {text: 'Vue.js', color: 'indigo', textColor: 'white'},
          {text: 'vue-cli', color: 'indigo', textColor: 'white'},
          {text: 'Vuex', color: 'indigo', textColor: 'white'},
          {text: 'vue-router', color: 'indigo', textColor: 'white'},
          {text: 'Vuetify', color: 'indigo', textColor: 'white'},
          {text: 'Storybook', color: 'indigo', textColor: 'white'}
        ],
        text: 'This is my github.io source code',
        link: 'https://github.com/chidoriashi1990/my-github-pages'
      },
      {
        media: 'https://chidoriashi1990.github.io/img/OCR_Hollowing.png',
        title: 'ocr',
        chips: [
          {text: 'TensorFlow', color: 'indigo', textColor: 'white'},
          {text: 'Python 3', color: 'indigo', textColor: 'white'}
        ],
        text: 'OCR system by TensorFlow and Python 3',
        link: 'https://github.com/chidoriashi1990/ocr'
      },
      {
        media: '',
        title: 'vue-pwa-rss-reader',
        chips: [
          {text: 'PWA', color: 'indigo', textColor: 'white'},
          {text: 'Vue.js', color: 'indigo', textColor: 'white'},
          {text: 'vue-cli', color: 'indigo', textColor: 'white'},
          {text: 'Vuex', color: 'indigo', textColor: 'white'},
          {text: 'vue-router', color: 'indigo', textColor: 'white'},
          {text: 'Vuetify', color: 'indigo', textColor: 'white'},
          {text: 'Storybook', color: 'indigo', textColor: 'white'}
        ],
        text: 'This is a modern RSS reader made with PWA made by Vue.js.',
        link: 'https://github.com/chidoriashi1990/vue-pwa-rss-reader'
      }
    ]
  },
  /* getters: Storeの算出プロパティ */
  getters: {
    linkItems: state => state.linkItems,
    cardProfile: state => state.cardProfile,
    usedProgramList: state => state.usedProgramList,
    usedFrameworkList: state => state.usedFrameworkList,
    worksGitHubItems: state => state.worksGitHubItems
  },
  /* mutations: stateを同期処理で変更する */
  mutations: {
  },
  /* actions: mutationを同期/非同期処理でコミットする */
  actions: {
  }
}
