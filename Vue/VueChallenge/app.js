const app = Vue.createApp({
    data() {
        // always returns an object
        return {
            Name: 'Evin Bour-Gilson',
            dateToday: 'October 12, 2023',
            Title: 'The Title'
        }
    },
    methods: {
        getTodayDate() {
            let today = new Date();
            today = today.toLocaleDateString();
            return today;
        }
    }
});

app.mount('#vue');