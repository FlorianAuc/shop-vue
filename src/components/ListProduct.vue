<template>
  <div class="container">
    <h1 class="title is-1">Notre shop</h1>
    <div class="columns">
      <div class="column is-three-quarters">
        <h2 class="title is-3">Liste de produits</h2>
        <ul class="menu-list">
          <li
            v-for="(product, index) in products"
            :key="index"
            :data-id="index"
            class="list-product menu-item"
          >
            <img :src="product.picture" alt="picture" class="product-image" />
            {{ product.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>


const props = defineProps({
  products: {
    type: Array
  }
});



</script>

<style lang="scss">
h1 {
  font-size: 2rem;
  font-weight: 500;
}

.list-product {
  cursor: pointer;

  .product-image {
    max-width: 100px;
    max-height: 100px;
  }
}
</style>
