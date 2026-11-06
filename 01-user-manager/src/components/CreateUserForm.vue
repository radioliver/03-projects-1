<script setup>
import { useUserStore } from '../../store/user.js'
import { ref, reactive } from 'vue';

const {addUser} = useUserStore()
const isFormVisible = ref(false)
const createUserFrom = ref()
const userFromDataInitialState = {
  firstName: '',
  lastName: '',
  emailAdress: '',
};

const userFormData = reactive({ ...userFromDataInitialState });

function showForm() {
  isFormVisible.value = true;
}

async function handleSaveClick() {
  
    try {
      if (createUserFrom.value.checkValidity()) {
      await addUser(userFormData);
      Object.assign(userFormData, userFromDataInitialState); // Reset form data after successful submission
      userFormData.firstName = '';
      userFormData.lastName = '';
      userFormData.emailAdress = '';
      } else {
        alert('Please fill in all required fields.');
      } 
    } catch (error) {
      console.error('Error adding user:', error);
    }
   
   

  isFormVisible.value = false; // Hide the form after submission
}

function handleCancelClick() {

  userFormData.firstName = '';
  userFormData.lastName = '';
  userFormData.emailAdress = '';
  isFormVisible.value = false; // Hide the form when canceling
}

</script>

<template>
    <button class="btn btn-primary mb-3" @click="showForm">Create User</button>
  <form  v-show="isFormVisible"
  ref="createUserFrom" >
    <div class="mb-3">
      <label for="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        class="form-control"
        required
        v-model="userFormData.firstName"
      />
    </div>
    <div class="mb-3">
      <label for="lastName">Last Name</label>
      <input
        v-model="userFormData.lastName"
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
        v-model="userFormData.emailAdress"
        type="email"
        name="emailAdress"
        id="emailAdress"
        class="form-control"
        required
      />
    </div>
    <div class="mb-3">
       <button type="button" class="btn btn-primary" @click="handleSaveClick">Save</button>
       <button type="button" class="btn btn-secondary" @click="handleCancelClick">Cancel</button>
    </div>


    
  </form>
</template>


