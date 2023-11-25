<template>
<div class="teamContainer">
    <h1>{{ team.name }}</h1>
    <team-member
    v-for="member in team.members"
    :member="member"></team-member>
</div>
</template>
    
<script>
export default {
    data() {
        return {
        }
    },
    props: ['team'],
    methods: {
    }
}
</script>

<style scoped>
.teamContainer {
    margin: 20px;
    background-color: lightcoral;
    padding: 10px;
    width: 400px;
    height: auto;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
}

h1 {
    margin: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>