<template>
  <form action="">
    <textbox></textbox>
    <span class="root">
      <my-button>認証</my-button>
      <balloon>認証する</balloon>
    </span>
  </form>
</template>

<script>
import Textbox from './../110.atoms/Textbox'
import MyButton from './../110.atoms/Button'
import Balloon from './../110.atoms/Balloon'

export default {
  name: 'auth-form',
  components: {
    Textbox,
    MyButton,
    Balloon
  }
}
</script>

<style lang="scss" scoped>
.root {
  display: inline-block;
  position: relative;
}

.root > *:first-child + * {
  display: none;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translate(-50%, -100%) translateY(0);
  white-space: nowrap;
}

.root > *:first-child:hover + * {
  display: inline-block;
}
</style>
