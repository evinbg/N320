<template>
<h1>Sessions</h1>
<h2>{{ updateCount }}</h2>
<session-button v-if="showClear == true"
@click="clearFilter">Clear Filter</session-button>
<session-container v-for="session in sessions"
:id="session.id"
:title="session.title"
:desc="session.desc"
:presenter="session.presenter"
:tags="session.tags"
:sTime="session.sTime"
:sDay="session.sDay"
:added="session.added"
:filter="this.filter"
@filter-tag="filterTag"
@filter-presenter="filterPresenter"
@add-item="addItem"></session-container>
</template>

<script>
//import SessionContainer from '../components/SessionContainer.vue';

export default {
    data() {
        return {
            sessionCount: this.sessions.length,
            filter: '',
            filterType: '',
            showClear: false
        }
    },
    inject: ['sessions'],
    // props: ['sessions'],
    computed: {
        updateCount() {
            if (this.filter == '') {
                return `${this.sessions.length} Sessions`;
            }
            this.sessionCount = 0;

            if (this.filterType == 'tag') {
                for (let i = 0; i < this.sessions.length; i++) {
                    for (let j = 0; j < this.sessions[i].tags.length; j++) {
                        if (this.sessions[i].tags[j] == this.filter) {
                            this.sessionCount += 1;
                        }
                    }
                }
            }

            else if (this.filterType == 'presenter') {
                for (let i = 0; i < this.sessions.length; i++) {
                        if (this.sessions[i].presenter == this.filter) {
                            this.sessionCount += 1;
                        }
                    }
                }

            return `${this.sessionCount} of ${this.sessions.length} Sessions`;
        }
    },
    watch: {
        filter(newVal, OldVal) {
            if (newVal == '') {
                this.showClear = false;
            } else {
                this.showClear = true;
            }
        }
    },
    methods: {
        filterTag(tag) {
            this.filterType = 'tag';
            this.filter = tag;
        },
        clearFilter() {
            this.filterType = '';
            this.filter = '';
        },
        filterPresenter(presenter) {
            this.filterType = 'presenter';
            this.filter = presenter;
        },
        addItem(id) {
            this.$emit('add-item', id);
        }
    },
    inheritAttrs: false
}
</script>