<template>
  <div class="card-list container">
    <div class="search__container">
      <p-search></p-search>
    </div>

    <div class="list__container">
      <router-link v-for="card in cards" :key="card.id" :to="`/cards/${card.id}`">
        <p-card :info="card"></p-card>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import PCard from '@/components/PCard'
import PSearch from '@/components/PSearch'

export default {
  components: { PCard, PSearch },
  computed: {
    ...mapGetters(['cards'])
  },
  created () {
    this.loadCards()
  },
  methods: {
    ...mapActions(['loadCards'])
  }
}
</script>
<style lang="scss" scoped>
.card-list .list__container {
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    height: 100%;
  }
}

.search__container{
  padding: 0 10px;
  margin: 10px 0;
}

.p-card {
  margin: 10px;
}
</style>
