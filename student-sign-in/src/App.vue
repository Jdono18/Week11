<script setup>

  import NewStudentForm from "./components/NewStudentForm.vue";  // imports NewStudentForm component from file path
  import StudentTable from "./components/StudentTable.vue";  // imports StudentTable component from file path
  import StudentMessage from "./components/StudentMessage.vue";   // imports StudentMessage component from file path



</script>

<template>

  <!-- HTML here -->
  <StudentMessage></StudentMessage>   <!-- passes StudentMessage Component -->
  <NewStudentForm></NewStudentForm>   <!-- passes NewStudentForm Component -->
  <StudentTable></StudentTable>       <!-- passes StudentTable Component -->



</template>

<style scoped>

/* CSS here */

</style>