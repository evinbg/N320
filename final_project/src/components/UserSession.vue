<template>
<div>
    <h2>{{ title }}</h2>
    <h3>{{ presenter }}</h3>
    <session-button @click="removeSession(id)">Remove Session</session-button>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String
        },
        presenter: {
            type: String
        },
        sTime: {
            type: Number,
            validator: function(value) {
                if (value === 8 || value === 10 || value === 13 || value === 15 || value === 20) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        sDay: {
            type: String,
            validator: function(value) {
                if (value === 'Thursday' || value === 'Friday' || value === 'Saturday') {
                    return true;
                } else {
                    return false;
                }
            }
        }
    },
    methods: {
        removeSession(id) {
            this.$emit('remove-session', id);
        }
    }
}
</script>

<style scoped>

</style>