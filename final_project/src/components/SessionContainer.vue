<template>
<div v-if="tags.includes(filter) || filter == '' || presenter == filter">
    <h3>{{ id }}</h3>
    <session-button @click="addItem(added, id)">{{ added ? "Session Added" : "Add Session" }}</session-button>
    <p>{{ title }}</p>
    <p class="presenter"
    @click="filterPresenter(presenter)">{{ presenter }}</p>
    <p>{{ formatDateAndTime(sDay, sTime) }}</p>
    <p>{{ desc }}</p>
    <session-button v-for="tag in tags"
    @click="filterTag(tag)">{{ tag }}</session-button>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            itemAdded: 'Add Item'
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String
        },
        presenter: {
            type: String
        },
        tags: {
            type: Array
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
        },
        added: {
            type: Boolean
        },
        filter: {
            type: String
        }
    },
    methods: {
        filterTag(tag) {
            this.$emit('filter-tag', tag);
        },
        filterPresenter(presenter) {
            this.$emit('filter-presenter', presenter);
        },
        addItem(added, id) {
            if (added == false) {
                this.$emit('add-item', id);
            }
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
.presenter {
    color: red;
}

.presenter:hover {
    cursor: pointer;
}
</style>