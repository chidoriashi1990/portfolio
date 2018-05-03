<template>
  <div class="header">
    <slot class="headerName"></slot>
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
  height: 3vh;
  padding: 10px 0px;
  z-index: 100;
  display: block;
}

.headerName {
  position: fixed;
  top: 1vh;
  left: 5vw;
  font-size: 4vh;
}
</style>
