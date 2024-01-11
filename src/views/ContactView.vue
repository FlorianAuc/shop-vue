<script setup>
import FormContact from '@/components/FormContact.vue';
</script>

<template>

  <FormContact @soummettre="newContact"/>
</template>

<script>

const newContact = (infos) =>{
  console.log(infos.name);
}

</script>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>