const app = Vue.createApp({
    data() {
        // always returns an object
        return {
            courseGoal1: 'Learn advanced Javascript',
            courseGoal2: 'Learn Vue',
            vueLink: 'https://vuejs.org',
            courseGoal3: '<h4>Create an application</h4>',
            counter: 10
        }
    },
    methods: {
        newGoal() {
            const rNum = Math.random();
            if(rNum < 0.5) {
                return 'Vue is awesome';
            }
            else if (rNum > 0.7) {
                return 'Vue is fun';
            }
            else {
                return this.courseGoal1;
            }
        },
        add() {
            this.counter++;
        },
        addMore(num) {
            this.counter += num;
        }
    }
});

app.mount('#myGoals');