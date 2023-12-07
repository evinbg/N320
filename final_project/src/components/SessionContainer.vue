<template>
<div v-if="tags.includes(filter) || filter == '' || presenter == filter">
    <h3>{{ id }}</h3>
    <session-button @click="addItem(added, id)">{{ added ? "Item Added" : "Add Item" }}</session-button>
    <p>{{ title }}</p>
    <p>{{ desc }}</p>
    <p class="presenter"
    @click="filterPresenter(presenter)">{{ presenter }}</p>
    <p>{{ sTime }}</p>
    <p>{{ sDay }}</p>
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