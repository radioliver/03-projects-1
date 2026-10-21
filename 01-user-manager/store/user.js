import { deleteUser, getUsers, updateUser } from "../apis/userAPI.js";
import { ref } from "vue";

const users = ref([]);

export  function useUserStore() {
    async function fetchUsers() {
        users.value = await getUsers();
    }

    async function removeUser(id) {
        await deleteUser(id)
        users.value = users.value.filter(user => user.id != id)  
    }

    async function modifyUser(userId, updatedUser) {
        const  {id,...userData} = updatedUser;
        const response = await updateUser(userId, userData);
        users.value = users.value.map(user => user.id === id ? response: user)
    }

    return {
        users,
        fetchUsers,
        removeUser,
        modifyUser
        
    };
}