<script setup>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue'  // imports BodyMassIndexForm vue component
import { useBMIStore} from "./stores/BMIStore.js";  // imports pinia store from BMIStore.js
import {storeToRefs} from "pinia";  // sets up pinia store

const BMIStore = useBMIStore()  // initializes BMIStore variable that calls the useBMIStore() function from BMIStore.js

const { calculatedBMI } = storeToRefs(BMIStore)  // initializes { calculatedBMI } ref from pinia store

</script>

<template>  <!-- prints the following HTML including passing the BodyMassIndexForm vue component below  -->

  <h1> Body Mass Index Calculator </h1>

  hello from app.vue!

  <BodyMassIndexForm/>

  <div> Your BMI is {{ calculatedBMI }} </div>


</template>

<style scoped>

</style>
