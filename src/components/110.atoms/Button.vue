<template>
  <button class="button-styles">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button'
}
</script>

<style lang="scss" scope>
  .button-styles {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: #FFFFFF;
    cursor: pointer;
    font-size: 15pt;
    padding: 3px 10px;
    margin: 10px;
  }
</style>
