<script setup>
import { ref } from 'vue';

const props = defineProps(['numero'])
let contador = ref(0)
function aumentarContador() {
    contador.value++
}
</script>

<template>
    <div class="apuesta">
        <h1>{{ numero }}</h1>
        <button @click="aumentarContador">Apostar $1</button>
        <p>
            Usted ha apostado {{ contador }} en el numero {{ numero }}
        </p>
    </div>
</template>

<style scoped>
.apuesta {
    border: 2px solid black;
    margin: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
