<template>
  <input
    class="input__search"
    type="search"
    placeholder="Search"
    name="search"
    @search="loadCards($event.currentTarget.value)"
  >
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['loadCards'])
  }
}
</script>

<style lang="scss" scoped>
.input__search {
  width: 100%;
  border-radius: 1.5em;
  border: 3px solid;
  font-size: 1.5em;
  padding: 5px 15px;
  outline: none;
  background: white;

  &:focus {
    box-shadow: 0 0 0 1px;
  }
}
</style>
