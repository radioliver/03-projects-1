<script setup>
import { RouterLink } from 'vue-router'
</script>



<template>
    <nav class="nav">
        <ul>
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
</style>