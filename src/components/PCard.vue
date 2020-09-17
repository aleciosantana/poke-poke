<template>
  <div class="p-card">
    <div class="card__id">
      <span>{{ info.id }}</span>
    </div>
    <img class="card__img" :src="info.imageUrl" alt="">
    <h2 class="card__name">{{ info.name }}</h2>
    <div class="card__tags__container">
      <span v-for="type in info.types" :key="type">{{ type }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>
<style lang="scss" scoped>
.p-card {
  display: inline-block;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);;
  background: white;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
}

.card__tags__container {
  height: 30px;
  display: flex;
  align-items: center;

  span {
    font-size: 10px;
    border-radius: 4px;
    padding: 5px 8px;
    border: 1px solid;
  }
}

.card__id {
  font-size: 10px;
  font-weight: bold;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.card__img {
  height: 342px;
  width: 245px;
  // width: 100%;
}

.card__name {
  font-size: 16px;
}
</style>
