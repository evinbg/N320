<template>
<main>
    <h1>My Sessions</h1>
    <user-session v-for="session in userSessions"
    :id="session.id"
    :title="session.title"
    :presenter="session.presenter"
    :sTime="session.sTime"
    :sDay="session.sDay"
    @remove-session="removeSession"></user-session>
</main>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    inject: ['userSessions'],
    methods: {
        removeSession(id) {
            this.$emit('remove-session', id);
        }
    },
    inheritAttrs: false
}
</script>

<style scoped>
main {
    margin-top: 100px;
}
</style>