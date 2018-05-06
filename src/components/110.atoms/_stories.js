import { storiesOf } from '@storybook/vue'

/* addons */
// import { action } from '@storybook/addon-actions'
// LinkTo を使いコンポーネント間を遷移
// import { linkTo } from '@storybook/addon-links'
// Knobs を使いボタンの背景色とラベルを変更
// import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/vue'
// import { withNotes } from '@storybook/addon-notes'
// Centered を使いコンポーネントをページ中央に配置
// import Centered from '@storybook/addon-centered'
// コンポーネントの使い方・見た目・propsのName,Type,Defaultを確認
import VueInfoAddon from 'storybook-addon-vue-info'

/* components */
import SampleContent from './sample/SampleContent'
import UserImage from './sample/UserImage'
import GlobalHeader from './GlobalHeader'
import MyButton from './Button'
import Balloon from './Balloon'
import Textbox from './Textbox'

storiesOf('Atoms', module)
  // .addDecorator(withKnobs)
  .addDecorator(VueInfoAddon)
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

storiesOf('Atoms/Header', module)
  .add('global-header', () => ({
    components: { GlobalHeader },
    template: '<global-header>header</global-header>',
    methods: { }
  }))

storiesOf('Atoms/Sample', module)
  // .addDecorator(withKnobs)
  .addDecorator(VueInfoAddon)
  .add('sample-content', () => ({
    components: { SampleContent },
    template: '<sample-content class="sample-default"></sample-content>&nbsp;<sample-content class="sample-max-width"></sample-content>',
    methods: { }
  }))
  .add('user-image', () => ({
    components: { UserImage },
    template: '<user-image></user-image>',
    methods: { }
  }))
