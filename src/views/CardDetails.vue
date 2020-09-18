<template>
  <div class="card-details container">
    <div class="img__container">
      <img :src="card.imageUrlHiRes" alt="">
    </div>
    <div class="info__container">
      <div class="id__content">
        <span>{{ card.id }}</span>
      </div>

      <h1 class="card__name">{{ card.name }}</h1>

      <section class="weakness">
        <h2>Types</h2>
        <div>
          <span v-for="type in card.types" :key="type">
            {{ type }}
          </span>
        </div>
      </section>

      <section class="weakness">
        <h2>Weaknesses</h2>
        <div>
          <span v-for="weakness in card.weaknesses" :key="weakness.type">
            {{ weakness.type }}
          </span>
        </div>
      </section>

      <section class="attack">
        <h2>Attacks</h2>
        <div class="patch__conteiner">
          <div class="attack__patch" v-for="attack in card.attacks" :key="attack.name">
            <dl>
              <dt>{{ attack.name }}</dt>
              <dd>{{ attack.damage }}</dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    card: {}
  }),
  created () {
    const { id } = this.$route.params
    this.findCard(id)
  },
  methods: {
    async findCard (id) {
      try {
        const response = await fetch(`https://api.pokemontcg.io/v1/cards/${id}`)
        const data = await response.json()

        this.card = data.card
      } catch (error) {
        // TODO: handle exception
        console.log(error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.card-details {
  display: flex;
  flex-wrap: wrap;
}

.id__content {
  display: flex;
  justify-content: flex-end;
  span {
    font-size: 0.8em;
    border-radius: 0.8em;
    background: black;
    color: white;
    font-weight: bold;
    padding: 3px 8px;
  }
}

.card__name {
  font-size: 3em;
  margin: 20px 0;
}

section{
  &.weakness, &.types {
    border-left: 1px solid;
    border-bottom: 1px solid;
    padding: 0 10px;
    border-radius: 0 0 0 4px;

    h2 {
      font-size: 1em;
      margin: 20px 0 0;
    }

    div {
      min-height: 35px;
    }

    span {
      margin: 10px;
      display: inline-block;
    }
  }
}

section.attack {
  h2 {
    font-size: 1em;
    border-bottom: 2px solid;
    margin: 20px 0 0;
    padding: 0 10px;
  }
}

.img__container, .info__container {
  padding: 10px;
  width: 50%;
  min-width: 300px;
  flex-grow: 1;
}

.img__container img {
  width: 100%;
}

.patch__conteiner {
  display: flex;
  min-height: 100px;

  .attack__patch {
    flex-grow: 1;
    width: 100%;
    min-width: 150px;
    min-height: 80px;
    padding: 10px;
    margin: 10px;
    border: 3px solid black;
    border-radius: 4px;
    color: white;
    background: black;
    box-shadow: 0 0 0 2px white inset;

    dl {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    dd {
      text-align: right;
    }
  }
}
</style>
