<template>
  <div>
    <div>ユーザー認証</div>
    <user-image class="userImage"></user-image>
    <auth-form></auth-form>
  </div>
</template>

<script>
import UserImage from './../../110.atoms/sample/UserImage'
import AuthForm from './../../120.molecules/sample/AuthForm'

export default {
  name: 'user-auth',
  components: {
    UserImage,
    AuthForm
  }
}
</script>

<style lang="scss" scoped>
$scaling: 5em;

.userImage {
  width: $scaling;
  height: $scaling;
}
</style>
