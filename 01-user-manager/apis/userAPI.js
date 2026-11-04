import apiClient from "../utils/apiClients.js";

const urlFragment = "users";

export async function getUsers() {
    const response = await apiClient.get(urlFragment);
    return response.data;
}
//delete
export async function deleteUser(id) {
    const response = await apiClient.delete(`${urlFragment}/${id}`);
}

//put - update

export async function updateUser(userId, updatedUser) {
    const response = await apiClient.put(`${urlFragment}/${userId}`, updatedUser);
    return response.data;
}

//post - create

export async function createUser(user) {
    const response = await apiClient.post(urlFragment, user);
    return response.data;
}