<script setup>

defineProps({
    title: {
        type: String,
        required: true
    }
})


</script>



<template>
    <h1>{{ title }}</h1>
</template>



<style scoped>
.guitar-image {
    margin-left: 10rem;
    height: 12rem;
}
</style>