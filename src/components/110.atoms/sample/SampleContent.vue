<template>
  <div :class="sampleClass">
    <div class="sample-content">sample content</div>
  </div>
</template>

<script>
export default {
  name: 'sample-content',
  props: {
    class: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    sampleClass () {
      const style = {}
      style[`sample-${this.class}`] = true
      return style
    }
  }
}
</script>

<style lang="scss" scope>
  $content-position: fixed;
  $content-background-color: aliceblue;

  @mixin sample-style($height, $width, $content-position, $content-background-color) {
    height: $height;
    width: $width;
    position: $content-position;
    background-color: $content-background-color;
  }

  .sample-default {
    @include sample-style(300px, 300px, $content-position, $content-background-color)
  }
  .sample-max-width {
    @include sample-style(300px, 100%, $content-position, $content-background-color)
  }
  .sample-max {
    @include sample-style(100%, 100%, $content-position, $content-background-color)
  }

  .sample-content {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
  }
</style>
