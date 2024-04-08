import { defineStore } from 'pinia'  // import and setup pinia store
import { ref, computed } from 'vue' // add ref and computed functions in reactivity api from vue

export const useStudentStore = defineStore('students', () => {  // function to setup pinia store

    const studentList = ref([  // initializes studentList variable as a reactive object
        { name: 'A. Student', starID: 'aa1234zz', present: false},
        { name: 'B. Student', starID: 'bb1234zz', present: false},
    ])

    const mostRecentStudent = ref({}) // empty object - reactive data type

    function addNewStudent(student) {   // new addNewStudent function which takes a student argument
        studentList.value.push(student)   // pushes student to studentList object
    }

    function deleteStudent(studentToDelete) {  // new deleteStudent function which takes a studentToDelete argument
        studentList.value = studentList.value.filter( (student) => {  // filters out the non-deleted (non user selected students) adds these students back to studentList as remaining students.
            return studentToDelete != student
        })
        mostRecentStudent.value = {} // reset most recent message
    }

    function arrivedOrLeft(student) {  // defines arrivedOrLeft function that takes a student argument
        mostRecentStudent.value = student  // sets student as mostRecentStudent.value
    }

    const studentCount = computed( () => {  // initializes the variable studentCount that holds a computed function which returns the length of studentList (# of students)
        return studentList.value.length
    })

    const sortedStudents = computed( () => {  // initializes the variable sortedStudents that holds a computed function which sorts the studentList by alphabetical values.
        return studentList.value.toSorted( (student1, student2) => {
            return student1.name.localeCompare(student2.name)
        })
    })

    return{   // returns the reactive data, functions, and computed properties listed below
        // reactive data
        studentList,
        mostRecentStudent,

        // functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // computed properties
        studentCount,
        sortedStudents
    }



})