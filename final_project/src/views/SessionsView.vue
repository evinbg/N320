<template>
<main>
    <h1>Conference Session Information</h1>
    <div class="row">
        <h2>{{ updateCount }}</h2>
        <session-button v-if="showClear == true"
        @click="clearFilter"
        class="clear">Clear Filter</session-button>
    </div>
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
</main>
</template>

<script>
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
    computed: {
        updateCount() {
            if (this.filter == '') {
                return `${this.sessions.length} Sessions:`;
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

            return `${this.sessionCount} of ${this.sessions.length} Sessions:`;
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
        addItem(added, id) {
            this.$emit('add-item', added, id);
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

.row {
    margin: 40px;
    margin-top: 20px;
    margin-bottom: 0px;
    display: flex;
    height: 35px;
}

.clear {
    margin-left: auto;
    background-color: var(--pink);
    color: white;
    font-size: 18px;
}

</style>