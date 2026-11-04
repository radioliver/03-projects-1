<script setup>
import { ref } from 'vue';

const isFormVisible = ref(false);

function showForm() {
  isFormVisible.value = true;
}

</script>

<template>
    <button class="btn btn-primary mb-3" @click="showForm">Create User</button>
  <form  v-show="isFormVisible">
    <div class="mb-3">
      <label for="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        class="form-control"
        required
    
      />
    </div>
    <div class="mb-3">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        class="form-control"
        required
       
      />
    </div>
    <div class="mb-3">
      <label for="emailAdress">E-mail</label>
      <input
        type="email"
        name="emailAdress"
        id="emailAdress"
        class="form-control"
        required
      />
    </div>
  </form>
</template>


