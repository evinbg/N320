<template>
<div v-if="tags.includes(filter) || filter == '' || presenter == filter"
class="container">
    <div class="row1">
        <h3 class="title">{{ title }}</h3>

        <session-button @click="addItem(added, id)"
        class="add">{{ added ? "Session Added" : "Add Session" }}</session-button>
    </div>

    <div class="row2">
        <p class="presented">Presented by: 
            <b class="presenter"
            @click="filterPresenter(presenter)"> {{ presenter }}</b>
        </p>

        <p class="date">{{ formatDateAndTime(sDay, sTime) }}</p>
    </div>

    <hr class="line">

    <p class="desc">{{ desc }}</p>

    <div class="tags">Categories: 
        <session-button v-for="tag in tags"
        @click="filterTag(tag)"
        class="tag">{{ tag }}</session-button>
    </div>
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
* {
    font-size: 18px;
}

.line {
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
}

.presented {
    margin: 10px;
}
.presenter {
    color: var(--pink);
}

.presenter:hover {
    cursor: pointer;
}

.container {
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

.row1 {
    display: flex;
    height: auto;
    width: 100%;
}

.title {
    margin: 20px;
    color: var(--blue);
    float: left;
    width: auto;
    font-size: 24px;
}

.add {
    margin: 20px;
    margin-left: auto;
    min-width: 120px;
}

.row2 {
    display: flex;
    height: 2em;
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
}

.presented {
    margin: 0;
    width: auto;
}
.date {
    margin-left: auto;
    width: auto;
}

.desc {
    margin: 20px;
    margin-bottom: 0;
}

.tags {
    margin: 20px;
}

.tag {
    margin-left: 10px;
}
</style>