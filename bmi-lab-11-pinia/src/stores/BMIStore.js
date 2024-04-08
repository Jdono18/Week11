import { defineStore } from 'pinia'

import { ref, computed } from 'vue'

// store name should be unique and is used in the dev tools to distinguish more than one
// useBMIStore is a function, we are creating and exporting a function definition
// other parts of the program - like components - can call this funciton
// to get access to the store and its variable / data / computed properties

export const useBMIStore = defineStore('bmi',() =>{

    const height = ref(0)
    const weight = ref(0)
    // todo ref for weight

    const calculatedBMI = computed( () => {

        const bmi = (weight.value / (height.value ^2)).toFixed(2) // todo add the correct math

        return bmi

    })

    return{
        height,
        weight,
        calculatedBMI

    }
})