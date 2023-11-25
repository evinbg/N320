<script setup>
import InputForm from '../components/InputForm.vue'
import FilteredList from '../components/FilteredList.vue'
</script>

<template>
<main>
  <InputForm :members="members" @filter-data="displayMembers"/>
  <FilteredList
  :members="members"
  :teamName="teamName"
  :displayRole="displayRole"
  @join-team="joinTeam"/>
</main>
</template>

<script>
export default {
  data() {
    return {
      displayRole: '',
      teamName: ''
    }
  },
  props: ['members'],
  methods: {
    displayMembers(name, role) {
      this.teamName = name;
      this.displayRole = role;
    },
    joinTeam(id, team) {
      this.$emit('join-team', id, team);
    }

  }
}
</script>