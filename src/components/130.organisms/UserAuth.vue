<template>
  <div>
    <p>ユーザー認証</p>
    <user-image class="userImage"></user-image>
    <auth-form></auth-form>
  </div>
</template>

<script>
import UserImage from './../110.atoms/UserImage'
import AuthForm from './../120.molecules/AuthForm'

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
