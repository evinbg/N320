<template>
<main>
    <h1>My Sessions</h1>
    <h2>{{ updateCount }}</h2>
    <div class="sessions" v-if="userSessions.length > 0">
        <user-session v-for="session in userSessions"
        :id="session.id"
        :title="session.title"
        :presenter="session.presenter"
        :sTime="session.sTime"
        :sDay="session.sDay"
        @remove-session="removeSession"></user-session>
    </div>
</main>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    inject: ['userSessions'],
    computed: {
        updateCount() {
            if (this.userSessions.length == 0) {
                return `No sessions have been added`;
            } else if (this.userSessions.length == 1) {
                return `${this.userSessions.length} session has been added:`;
            } else {
                return `${this.userSessions.length} sessions have been added:`;
            }
            this.sessionCount = 0;
        }
    },
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

h1 {
    font-weight: normal;
    color: var(--pink);
    padding: 40px;
    padding-bottom: 0;
}

h2 {
    margin: 40px;
    margin-top: 20px;
    margin-bottom: 0px;
    display: flex;
    height: 35px;
}

.sessions {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    margin: 40px;
    color: black;
    border-radius: 2px;
    border-style: solid;
    border-radius: 20px;
    box-shadow: 8px 8px 12px 0px #444444;
}
</style>