<template>
<div>
    <div class="container" v-if="role === displayRole && team === ''">
        <slot-button
        @click="joinTeam(id, teamName)">Join {{ teamName }}</slot-button>
        <p>
            <slot name="mName"></slot>
        </p>
        <p>
            <slot name="mRole"></slot>
        </p>
        <slot-button @click="toggleDetails">{{ visibleData ? "Hide" : "Show" }} Details</slot-button>
        <div class="info" v-if="visibleData">
            <p>
                <slot name="mId"></slot>
            </p>
            <p>
                <slot name="mPhone"></slot>
            </p>
            <p>
                <slot name="mEmail"></slot>
            </p>
            <p>
                <slot name="mTeam"></slot>
            </p>
        </div>
    </div>
</div>
</template>
    
<script>
export default {
    data() {
        return {
            visibleData: false,

        }
    },
    props: ['role', 'team', 'displayRole', 'teamName', 'id'],
    methods: {
        toggleDetails() {
            this.visibleData = !this.visibleData;
        },
        joinTeam(id, teamName) {
            this.$emit('join-team', id, teamName);
        }
    }
}
</script>

<style scoped>
.container {
    margin: 10px;
    background-color: lightcoral;
    padding: 10px;
    width: 365px;
    height: auto;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
}

p {
    margin-left: 5px;
}

</style>