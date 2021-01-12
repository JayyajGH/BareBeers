<template>
  <main class="wrapper" id="main">
    <section class="image-text__panel image-text__panel--dark u-margin-bottom--large" id="bears">
      <h2 class="heading2">Bears</h2>
      <p>Our 300,000 Bears get access to exclusive beers and insider prices for supporting independent brewers</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis fermentum erat. Praesent non ex consectetur, scelerisque mauris tincidunt, placerat velit. Vestibulum luctus bibendum massa, tempus rutrum urna dapibus a. Proin id metus consequat, facilisis est ut, feugiat risus. Nunc eu scelerisque eros. Curabitur at felis eu tellus fermentum vulputate. Nulla facilisi.</p>
    </section>
    <section class="image-text__panel image-text__panel--dark u-margin-bottom--large" id="beers">
      <h2 class="heading2">Beers</h2>
      <ul class="beer-list">
        <li v-for="product in products" class="product-item">
          <beer-panel :beer="product"></beer-panel>
        </li>
      </ul>
  </section>
  </main>
</template>

<script>
import BeerPanel from '~/components/BeerPanel/BeerPanel';
import createRepository from '@/api/repository.js';

export default {
  components: {
    BeerPanel
  },
  async asyncData({ $graphcms }) {
    const repo = createRepository($graphcms)

    return repo.getListOfWines();
  }
}
</script>

<style scoped lang="scss">
.beer-list {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 50em) {
    flex-direction: row;
  }
}

.product-item {
  width: 100%;
  margin-bottom: 60px;

  @media (min-width: 50em) {
    width: 20%;
    margin-bottom: 0;
  }
}
</style>
