<template>
<div>
    <div class="container" v-if="role === displayRole">
        <slot-button>Join {{ teamName }}</slot-button>
        <p>
            <slot name="mName"></slot>
        </p>
        <p>
            <slot name="mRole"></slot>
        </p>
        <slot-button @click="toggleDetails">{{ visibleData ? "Hide" : "Show" }} Details</slot-button>
        <div class="info" v-if="visibleData">
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
            visibleData: false
        }
    },
    props: ['role', 'displayRole', 'teamName'],
    methods: {
        toggleDetails() {
            this.visibleData = !this.visibleData;
        }
    }
}
</script>

<style scoped>
.container {
    margin: 10px;
    background-color: lightgray;
    padding: 10px;
    width: 400px;
    height: auto;
    border-radius: 10px;
}

p {
    margin-left: 5px;
}

</style>