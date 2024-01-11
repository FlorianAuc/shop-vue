<template>
  <div class="selected-product">
    <h2 class="title is-3">Produit Sélectionné</h2>
    <div>
      <img :src="products.picture" alt="picture" class="product-image" />
      <h2><strong>Nom:</strong> {{products.name}}</h2>
      <p><strong>Prix:</strong> {{ products.price }} €</p>
      <p><strong>Description:</strong>  {{ products.about }}</p>
      <p><strong>Couleur:</strong> <span class="color" :style="{backgroundColor:products.color }"></span></p>
      <p><strong>Date:</strong>  {{ dateFr }}</p>
      <button @click="desactive">Désactiver</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  products: {
    type: Object,
    
  }
});

const emit = defineEmits(['desactive'])

const desactive = () =>{
  emit('desactive', props.products._id)
}

const dateFr = computed(()=>{
  return new Date(props.products.registered.substr(0,10)).toLocaleDateString()
})
</script>

<style lang="scss">

.color{
  width: 1rem;
  height: 1rem;
  display: inline-block;
}
</style>