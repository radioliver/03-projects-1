<script setup>
import GuitarImage from './GuitarImage.vue'
import GuitarTitle from './GuitarTitle.vue';

defineProps({
    guitar: {
        type: Object,
        required: true
    }
})
</script>



<template>
    <div>
        <div class="lef-column">
            <GuitarImage :title="guitar.title"/>
        </div>
        <div class="right-column">
              <GuitarTitle :title="guitar.title"/>
        </div>
    </div>
</template>



<style scoped>
.right-column {
    margin-left: 2rem;
    width: 30%;
}
</style>