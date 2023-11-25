<script setup>
import TeamList from '../components/TeamList.vue'
</script>

<template>
<TeamList 
:members="members" 
:TeamsList="TeamsList"/>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['members', 'TeamsList']
}
</script>