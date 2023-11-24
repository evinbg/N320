<template>
<div>
    <member-info v-for="member in members" :key="member.id"
    :displayRole="displayRole"
    :role="member.role"
    :teamName="teamName">
        <template #mName>Name: {{ member.name }}</template>
        <template #mRole>Role: {{ member.role }}</template>
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
    }
}
</script>

<style scoped>
</style>