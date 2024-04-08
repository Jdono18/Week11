<script setup>
import { ref } from 'vue'
// needs to use the store

import {useBMIStore} from "../stores/BMIStore.js";
import {storeToRefs} from "pinia";

const BMIStore = useBMIStore()

// allow access to the height reactive data from the store

const { height } = storeToRefs(BMIStore)
const { weight } = storeToRefs(BMIStore)

// todo add weight

</script>

<template>

  <h2> This is Body Mass Index form to enter your data </h2>

  <label>Enter your height in meters</label>
  <input v-model="height">

  <label>Enter your weight in kilograms</label>
  <input v-model="weight">

  <br> <br>

 <!-- <button v-on:click="statsEntered"> Calculate </button> -->




</template>

<style scoped>

</style>
