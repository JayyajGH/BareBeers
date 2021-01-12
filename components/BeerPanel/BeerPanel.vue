<template>
  <a v-if="beer" href="/DetailsView" class="beer">
    <article itemscope itemtype="https://schema.org/Product">
      <img class="beer__image" :src="beer.image.url" alt="" itemprop="image">
      <div class="beer-details">
        <h2 class="header2 beer-details__brewery" itemprop="brand">{{beer.brewery}}</h2>
        <h3 class="header3 beer-details__name" itemprop="name">{{beer.name}}</h3>
        <data :value="beer.price" itemprop="price" class="beer-details__price body--bold">{{beer.price | currency}}</data>
        <button class="button button--primary">Buy</button>
      </div>
    </article>
  </a>
</template>

<script>
export default {
    name: 'BeerPanel',
    props: {
      beer : {
        type : Object,
        required: true
      }
    },
    filters: {
      currency: function (value) {
        if (!value) return ''
        return '£' + value;
      }
    }
  }
</script>

<style scoped lang="scss">
.beer {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transform: scale(1.01);
  }
}

.beer__name {
  color: var(--black);
}

.beer-details {
  text-align: center;
}

.beer__description {
  color: var(--white);
  background-color: rgba(0,0,0,0.8);
}

.beer__image {
  width: 100%;
}

.beer-details__price {
  display: block;
}
</style>
