<script setup>
import { useUserStore } from '../store/user.js';
import UsersTable from './components/usersTable.vue';
import CreateUserForm from './components/CreateUserForm.vue';
import SearchUser from './components/SearchUser.vue';


const {  fetchUsers } = useUserStore();

try {
  fetchUsers();
} catch (error) {
  console.error('Error fetching users:', error);
}



</script>

<template>
  
  <div class="container">
    <CreateUserForm />
    <SearchUser />
    <UsersTable />
  </div>

</template>

<style scoped>

</style>
