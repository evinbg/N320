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

app.component('greeting-input', {
    template: `
        <input type="text" v-model="Input">
        <p>{{Input}}</p>

        <input type="text" 
        v-on:blur="displayText" 
        ref="disRef">
        <p>{{refText}}</p>`,
    data() {
        return {
            Input: '',
            refText: ''
        }
    },
    watch: {
        Input(newValue, oldValue) {
            console.log(`Old Value: ${oldValue}`);
            console.log(`New Value: ${newValue}`);
        }
    },
    methods: {
        displayText() {
            this.refText = this.$refs.disRef.value;
        }
    }
});

app.mount('#vue');