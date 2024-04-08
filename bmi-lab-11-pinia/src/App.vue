<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'
import { useBMIStore} from "./stores/BMIStore.js";
import {storeToRefs} from "pinia";

const BMIStore = useBMIStore()

const { calculatedBMI } = storeToRefs(BMIStore)

</script>

<template>

  <h1> Body Mass Index Calculator </h1>

  hello from app.vue!

  <BodyMassIndexForm/>

  <div> Your BMI is {{ calculatedBMI }} </div>


</template>

<style scoped>

</style>
