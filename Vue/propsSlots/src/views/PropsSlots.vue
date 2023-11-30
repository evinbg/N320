<template>
<h1>Props View</h1>

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
  <slot-one>
    <h2>This is from App.vue</h2>
    <template v-slot:greetingthing>{{ greeting }}</template>
    <template #person></template>
  </slot-one>
</div>
<div>
  <!-- <slot-two>
    <ul v-if="pastStudents.length != 0">
      <li v-for="s in pastStudents" :key="s.sName">{{ s.sName }}</li>
    </ul>
  </slot-two> -->
</div>
<div>
  <project-data></project-data>
</div>
</template>

<script>
import ProjectData from '../components/projectData.vue';

export default {
  components: {
    ProjectData
  },
  props: ['greeting', 'who', 'count', 'book', 'myVue']
}
</script>