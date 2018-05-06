<template>
<div id="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <div class="content">content</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SingleContent',
  components: {

  }
}
</script>

<style lang="scss" scoped>
@mixin content-style($bgcolor) {
  background-color: $bgcolor;
}
.content {
  height: 90vh;
  width: 100vw;
  @include content-style(aliceblue);
}
</style>
