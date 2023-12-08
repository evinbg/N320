<template>
<div class="session">
    <div class="row">
        <h2>{{ title }}</h2>
        <session-button @click="removeSession(id)" class="remove">Remove Session</session-button>
    </div>
    <h3>{{ formatDateAndTime(sDay, sTime) }}</h3>
    <hr class="line">
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
        },
        formatDateAndTime(sDay, sTime) {
            let time = '';

            if (sTime > 12) {
                time = `${sTime - 12}:00pm`;
            } else if (sTime == 12) {
                time = `${sTime}:00pm`;
            } else if (sTime == 24) {
                time = `${sTime}:00am`;
            } else {
                time = `${sTime}:00am`;
            }
            return (sDay + ' at ' + time);
        }
    }
}
</script>

<style scoped>
.session {
    margin: 20px;
    width: 100%;
}

h2 {
    color: var(--blue);
}

h3 {
    margin-top: 10px;
}

.line {
    margin: 20px;
    margin-left: 0px;
    width: 100%;
}

.row {
    display: flex;
    height: auto;
    width: 100%;
}

.remove {
    margin-left: auto;
    min-width: 130px;
}
</style>