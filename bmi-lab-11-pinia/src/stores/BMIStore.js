import { defineStore } from 'pinia'

import { ref, computed } from 'vue'

// store name should be unique and is used in the dev tools to distinguish more than one
// useBMIStore is a function, we are creating and exporting a function definition
// other parts of the program - like components - can call this function
// to get access to the store and its variable / data / computed properties

export const useBMIStore = defineStore('bmi',() =>{

    const height = ref(0)  // initializes height variable that sets reactive data type
    const weight = ref(0)  // initializes weight variable that sets reactive data type

    const calculatedBMI = computed( () => {  // initializes variable calculatedBMI that defines computed property to calculate bmi

        const bmi = (weight.value / (height.value ^2)).toFixed(2)

        return bmi

    })

    return{
        height,
        weight,
        calculatedBMI

    }
})