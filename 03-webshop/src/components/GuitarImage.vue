<script setup>

defineProps({
    title: {
        type: String,
        required: true
    }
})


</script>



<template>
    <img :src="`guitars/${title}.jpg`" alt="`${title}`" class="guitar-image" />
</template>



<style scoped>
.guitar-image {
    margin-left: 10rem;
    height: 12rem;
}
</style>