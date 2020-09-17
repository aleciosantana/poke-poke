<template>
  <div class="card-list container">
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

export default {
  components: { PCard },
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

.p-card {
  margin: 10px;
}
</style>
