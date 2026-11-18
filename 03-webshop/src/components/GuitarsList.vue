<script setup>
import {useGuitarStore} from '../store/guitars.js'
import {onMounted} from 'vue'
import GuitarItem from './GuitarItem.vue'


const {guitars, fetchGuitars} = useGuitarStore()


onMounted(async () => {
  await fetchGuitars()  
  console.log('Guitars fetched:', guitars.value)
})

</script>

<template>
  <div class ="guitars">
    <GuitarItem v-for="guitar in guitars" :key="guitar.id" :guitar="guitar"/>
  </div>
</template>

<style scoped>

</style>
