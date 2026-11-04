<script setup>
  import { defineProps, ref, watch } from 'vue'
  import { useUserStore } from '../../store/user.js'
  

  const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const closeButton = ref()

const userFormData = ref(props.user)
const {modifyUser} = useUserStore()

async function handleSaveButtonClick() {
  try {
    await modifyUser(userFormData.value)
    closeButton.value.click() // Close the modal after saving changes
  } catch (error) {
    alert( error.message)
    console.error('Error modifying user:', userFormData.value, error)
  }
}

watch (
  () => props.user,
  (newUser) => {
    userFormData.value = { ...newUser }
  }
)


</script>

<template>
  <div
    class="modal fade"
    id="editUserModal"
    tabindex="-1"
    aria-labelledby="editUserModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="">
            <div class="mb-3">
              <label for="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" class="form-control" required v-model="userFormData.firstName" />
            </div>
            <div class="mb-3">
              <label for="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName" class="form-control" required v-model="userFormData.lastName"/>
            </div>
            <div class="mb-3">
              <label for="emailAdress">E-mail</label>
              <input
                type="email"
                name="emailAdress"
                id="emailAdress"
                class="form-control"
                required
                v-model="userFormData.emailAdress"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button ref="closeButton" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" 
          @click="handleSaveButtonClick"
          >Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
