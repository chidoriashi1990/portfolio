<template>
<div id="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <div class="content1">
        <h2>UserInfo</h2>
        <p>id: {{ idVal }}</p>
        <p>name: {{ nameVal }}</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div class="content2">
        <user-auth></user-auth>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import UserAuth from './../../130.organisms/sample/UserAuth'

export default {
  name: 'OneColTwoRow',
  components: {
    UserAuth
  },
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    }
  },
  computed: {
    idVal () {
      return this.id
    },
    nameVal () {
      return this.name
    }
  }
}
</script>

<style lang="scss" scoped>
$content-area-height: 90vh;
@mixin content-style($bgcolor) {
  background-color: $bgcolor;
}
.content1 {
  height: $content-area-height/2;
  width: 100vw;
  @include content-style(palegreen);
}
.content2 {
  height: $content-area-height/2;
  width: 100vw;
  @include content-style(plum);
}
</style>
