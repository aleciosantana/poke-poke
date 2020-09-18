<template>
  <div class="p__header container">
    <div class="back">
      <router-link to="/" v-if="!isRootRoute">
        &#8592;
      </router-link>
    </div>
    <h1>Poké Poké {{ $router.patch }}</h1>
    <pre>
      {{ $route.patch }}
    </pre>
  </div>
</template>
<script>
export default {
  computed: {
    isRootRoute () {
      return this.$route.path === '/cards'
    }
  }
}
</script>
<style lang="scss" scoped>
.p__header {
  display: flex;
  align-items: center;
  padding: 10px;

  h1 {
    font-size: 2.2em;
    margin-left: 10px;
  }

  .back {
    font-size: 2em;
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
