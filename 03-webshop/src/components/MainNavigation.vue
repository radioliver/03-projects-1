<script setup>
import { RouterLink } from 'vue-router'
</script>



<template>
    <nav class="nav">
        <ul class="nav-list">
            <li>
                <router-link :to="{name: 'guitars-list'}">Guitars</router-link>
            </li>
            <li>
                <router-link :to="{name: 'cart'}">Cart</router-link>
            </li>

        </ul>
    </nav>
</template>



<style scoped>
.nav{

    background-color: var(--dark);

}
.nav-list{
    padding: 1rem 0;
    display: flex;
    justify-content: space-evenly;
}
</style>