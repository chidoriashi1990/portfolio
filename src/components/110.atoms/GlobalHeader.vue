<template>
  <div class="header">
    <h2><slot></slot></h2>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease-in-out;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: #fff;
  z-index: 100;

  // Google Chrome、Safari
  display: -webkit-flex;
  // Firefox
  display: -moz-flex;
  // Internet Explorer
  display: -ms-flex;
  // Opera
  display: -o-flex;
  // CSS3
  display: flex;
}
</style>
