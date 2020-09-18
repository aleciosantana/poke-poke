<template>
  <div id="app">
    <p-header></p-header>
    <router-view/>
  </div>
</template>
<script>
import PHeader from '@/components/PHeader'

export default {
  components: { PHeader }
}
</script>
<style lang="scss">
#app {
  display: flex;
  flex-direction: column;

  .router__container {
    height: 1px;
    flex-grow: 1;
  }
}
</style>
