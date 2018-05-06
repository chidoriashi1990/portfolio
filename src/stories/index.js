import { storiesOf } from '@storybook/vue'

/* addons */
// LinkTo を使いコンポーネント間を遷移
// import { linkTo } from '@storybook/addon-links'

/* components */
import GettingStarted from './introduction/GettingStarted'

storiesOf('Introduction', module)
  .add('Getting started', () => ({
    components: { GettingStarted },
    template: '<getting-started></getting-started>',
    methods: { }
  }))
