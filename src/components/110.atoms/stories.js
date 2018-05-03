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
import UserImage from './UserImage'
import Header from './Header'
import MyButton from './Button'
import Balloon from './Balloon'
import Textbox from './Textbox'

storiesOf('Atoms', module)
  .addDecorator(VueInfoAddon)
  .add('user-image', () => ({
    components: { UserImage },
    template: '<user-image></user-image>',
    methods: { }
  }))
  .add('header', () => ({
    components: { Header },
    template: '<header>header</header>',
    methods: { }
  }))
  .add('button', () => ({
    components: { MyButton },
    template: '<my-button>Button</my-button>',
    methods: { }
  }))
  .add('balloon', () => ({
    components: { Balloon },
    template: '<balloon>バルーン</balloon>',
    methods: { }
  }))
  .add('textbox', () => ({
    components: { Textbox },
    template: '<textbox></textbox>',
    methods: { }
  }))
