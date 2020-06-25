<template>
  <div id="app">
    <ImageGrid />
  </div>
</template>

<script>
import ImageGrid from './components/ImageGrid.vue'

export default {
  name: 'App',
  components: {
    ImageGrid
  }
}
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';

#app {
  font-family: 'Lato', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 50px;
}
</style>
