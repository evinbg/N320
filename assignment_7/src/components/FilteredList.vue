<template>
<div class="container">
    <member-info v-for="member in members" :key="member.id"
    :displayRole="displayRole"
    :role="member.role"
    :team="member.team"
    :teamName="teamName"
    :id="member.id"
    @join-team="joinTeam">
        <template #mName>Name: {{ member.name }}</template>
        <template #mRole>Role: {{ member.role }}</template>
        <template #mId>ID: {{ member.id }}</template>
        <template #mPhone>Phone: {{ member.phone }}</template>
        <template #mEmail>Email: {{ member.email }}</template>
        <template #mTeam v-if="member.team !== ''">Team: {{ member.team }}</template>
    </member-info>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['members', 'displayRole', 'teamName'],
    methods: {
        joinTeam(id, team) {
            this.$emit('join-team', id, team);
        }
    }
}
</script>

<style scoped>
.container {
    background-color: lightgray;
    width: 410px;
    padding: 5px;
    display: inline-block;
    margin: 5px;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
}
</style>