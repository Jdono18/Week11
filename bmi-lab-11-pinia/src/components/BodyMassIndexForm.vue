<script setup>
import { ref } from 'vue'
// needs to use the store

import {useBMIStore} from "../stores/BMIStore.js";
import {storeToRefs} from "pinia";

const BMIStore = useBMIStore()

// allow access to the height reactive data from the store

const { height } = storeToRefs(BMIStore)
const { weight } = storeToRefs(BMIStore)

</script>

<template>  <!-- prints the HTML below including creating input fields for user height and weight v-model to link refs to pinia store height and weight variables  -->

  <h2> This is Body Mass Index form to enter your data </h2>

  <label>Enter your height in meters</label>
  <input v-model="height">

  <label>Enter your weight in kilograms</label>
  <input v-model="weight">

  <br> <br>

</template>

<style scoped>

</style>
