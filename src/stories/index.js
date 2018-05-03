import { storiesOf } from '@storybook/vue'

/* addons */
// LinkTo を使いコンポーネント間を遷移
import { linkTo } from '@storybook/addon-links'

/* components */
import Welcome from './Welcome.vue'

storiesOf('Welcome', module)
  .add('to Storybook', () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
    methods: { action: linkTo('Button') }
  }))
