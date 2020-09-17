<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
