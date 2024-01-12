
<template>

  <FormContact @soummettre="newContact"/>
  <p v-if="messageOk">{{ messageText }}</p>
</template>

<script setup>
import FormContact from '@/components/FormContact.vue';
import router from '@/router';
const newContact = (infos) =>{

  console.log(infos.name);
  setTimeout(() => {
    router.push('/')
    
  }, 2000);
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