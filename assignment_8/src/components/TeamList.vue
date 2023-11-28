<template>
<div class="container" v-if="TeamsList.length > 0">
    <team-info v-for="team in TeamsList" :key="team.name"
    :team="team">
    </team-info>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['TeamsList']
}
</script>

<style scoped>
.container {
    background-color: lightgray;
    width: auto;
    display: inline-block;
    margin: 5px;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
}
</style>