<template>
  <div>
    <site-header></site-header>
    <nuxt />
    <site-footer></site-footer>
  </div>
</template>

<script>
  import SiteHeader from '~/components/SiteHeader/SiteHeader';
  import SiteFooter from '~/components/SiteFooter/SiteFooter';

  export default {
    components: { SiteHeader, SiteFooter }
  }
</script>

<style scoped>
</style>
