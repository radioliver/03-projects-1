<script>
import { useUserStore } from '../../store/user.js'
import { ref, watch } from 'vue'
const searchQuery = ref('')
const { searchUsers } = useUserStore()

watch(searchQuery, (newQuery) => {
  searchUsers(newQuery)
})








</script>

<template>
  <div class="input-group mb-3">
    <input
      
      type="text"
      class="form-control"
      placeholder="Search by first name, last name or email"
      v-model="searchQuery"
    />
  </div>
</template>

<style scoped>
</style>
