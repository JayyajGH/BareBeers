<template>
  <header class="u-margin-bottom--medium" id="header">
      <a href="#main" class="u-hidden-visually skip__link">Skip to main content</a>

      <nav class="site-nav">
        <div>
          <a href="/" class="logo__anchor" title="Bare Beers">
            <img src="~/assets/images/beer.svg" class="logo u-padding--small" alt="Bare Beers"/>
          </a>
        </div>
        <ul class="site-nav__menu">
          <li class="site-nav__item site-nav__item--home"><a class="site-nav__link body--bold-light" href="/">Home</a></li>
          <li class="site-nav__item"><a class="site-nav__link body--bold-light" href="/#bears">Bears</a></li>
          <li class="site-nav__item"><a class="site-nav__link body--bold-light" href="/#beers">Beers</a></li>
        </ul>
      </nav>
      <div class="hero u-margin-bottom--large">
        <h1 class="main-heading">Bare Beers</h1>
      </div>
    </header>
</template>

<style scoped lang="scss">
.site-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem 0.5rem 1rem;
}

.logo__anchor {
  position: absolute;
}

.logo {
  width: 60px;
  border-radius: 3px;
  background-color: var(--white);

  @media (min-width: 50em) {
    width: 90px;
  }
}

.site-nav__menu {
  display: flex;
  flex-direction: row;
}

.site-nav__item {
  padding-left: 0.5rem;

  @media (min-width: 50em) {
    padding-left: 1rem;
  }
}

.site-nav__link {
  font-size: 1.5rem;
  transition: 0.3s;
  text-decoration: none;
  color: var(--grey-base);

  &:hover {
    color: var(--black);
    border-top: 2px solid var(--black);
    padding-top: 2px;
  }
}

.skip__link:focus {
  position: static;
  width: auto;
  height: auto;
}

.main-heading {
  position: absolute;
  top: 100px;
  color: var(--white);
  font-size: 5rem;
  margin-left: -6px;
}

.hero {
  background-image: url('~assets/images/masthead.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  min-height: 250px;

  @media (min-width: 93.75em) {
    background-image: url('~assets/images/masthead-large.jpg');
    min-height: 450px;
  }
}
</style>
