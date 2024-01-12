<template>
  <main>
    <h1>This is a contact page</h1>

    <div class="form-contact" @submit.prevent="formuler">
      <form action="">
        <label for=""
          >Nom:
          <input type="text" v-model="newContact.name" />
        </label>
        <label for=""
          >Email:
          <input type="email" v-model="newContact.email" />
        </label>
        <button>Envoyer</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
const newContact = ref({
  name: '',
  email: ''
})
const emit = defineEmits(['soumettre'])
const formuler = () => {
  alert('test')
  emit('soummettre', newContact.value)
}
</script>

<style lang="scss">
.form-contact form label {
  margin-inline-end: 1rem;
}
</style>
