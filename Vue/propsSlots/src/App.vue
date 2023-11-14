<template>
<h1>Props and Slots</h1>
<div>
  <props-one 
  v-bind:greeting="greeting"
  :who="who"
  :myVue="myVue"
  msg="Props are awesome!"></props-one>
  <props-two v-bind="book"></props-two>
</div>
<div>
  <h1>Student Data</h1>
  <student-data 
  v-for="student in students" :key="student.sName"
  :sName="student.sName" 
  :sAge="student.sAge" 
  :major="student.major"
  :cLevel="student.cLevel"
  :graduate="student.graduate"
  ></student-data>
</div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'hello',
      who: 'Vue',
      count: 1,
      myVue: 'Vue.js',
      book: {
        id: 1,
        title: "Vue 3 Development"
      },
      students: [
        {
          sName: 'Robert Smith',
          sAge: 22,
          major: "Web Development",
          cLevel: 3,
        },
        {
          sName: 'Susan Rutherford',
          sAge: 25,
          major: "Informatics",
          graduate: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
