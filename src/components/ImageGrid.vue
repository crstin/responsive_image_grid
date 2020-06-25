<template>
  <div class="image-grid-container">
    <div v-if="loading">Loading...</div>

    <div v-else v-for="image in images" :key="image.id">
      <a :href="image.links.html">
        <figure>
          <img :src="image.urls.small" :alt="image.alt_description" />
          <figcaption>
            <a :href="image.user.portfolio_url">{{ image.user.first_name }}</a>
          </figcaption>
        </figure>
      </a>
    </div>

    <div v-if="failure">
      There has been an error retrieving the requested data
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: true,
      failure: false,
      images: {}
    }
  },
  mounted() {
    axios
      .get(
        `${process.env.VUE_APP_UNSPLASH_BASE_URL}/photos/?client_id=${process.env.VUE_APP_UNSPLASH_ACCESS_KEY}`
      )
      .then((response) => {
        this.images = response.data
      })
      .catch((error) => {
        console.log(error)
        this.failure = true
      })
      .finally(() => (this.loading = false))
  }
}
</script>

<style scoped lang="scss">
$imgBaseSize: 333px;

.image-grid-container {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($imgBaseSize, 1fr));
  grid-auto-rows: minmax(150px, 1fr);
  grid-gap: 2rem;
  grid-auto-flow: dense;
  justify-items: center;
  font-size: 1.25em;

  a {
    display: block;
    word-break: break-all;
    text-decoration: none;
    color: white;
  }

  figure {
    position: relative;
    height: $imgBaseSize;
    width: $imgBaseSize;
    display: flex;
    align-items: flex-end;

    img {
      height: inherit;
      width: inherit;
      object-fit: cover;

      &:hover {
        opacity: 0.2;
        transition: opacity;
        transition-duration: 2000ms;
        transition-timing-function: ease-out;
      }
    }

    figcaption {
      text-align: center;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);

      > a {
        padding: 22px 0;
        text-shadow: lighten(#fdfdfd, 7%);

        &:hover {
          color: #aaa;
          transition: color;
          transition-duration: 1000ms;
          transition-timing-function: ease-out;
        }
      }
    }
  }
}
</style>
