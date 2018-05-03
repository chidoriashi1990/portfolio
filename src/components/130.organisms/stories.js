import { storiesOf } from '@storybook/vue'

/* addons */
// import { action } from '@storybook/addon-actions'
// LinkTo を使いコンポーネント間を遷移
// import { linkTo } from '@storybook/addon-links'
// Knobs を使いボタンの背景色とラベルを変更
// import { withKnobs, text, color } from '@storybook/addon-knobs'
// import { withNotes } from '@storybook/addon-notes'
// Centered を使いコンポーネントをページ中央に配置
// import Centered from '@storybook/addon-centered'
// コンポーネントの使い方・見た目・propsのName,Type,Defaultを確認
import VueInfoAddon from 'storybook-addon-vue-info'

/* components */
import UserAuth from './UserAuth'

storiesOf('Organisms', module)
  .addDecorator(VueInfoAddon)
  .add('user-auth', () => ({
    components: { UserAuth },
    template: '<user-auth></user-auth>',
    methods: { }
  }))

storiesOf('Tempates', module)
  .add('user-auth', () => ({
    components: { UserAuth },
    template: '<user-auth></user-auth>',
    methods: { }
  }))
