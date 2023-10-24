const app = Vue.createApp({
    data() {
        // always returns an object
        return {
            courseGoal1: 'Learn advanced Javascript',
            courseGoal2: 'Learn Vue',
            vueLink: 'https://vuejs.org',
            courseGoal3: '<h4>Create an application</h4>',
            counter: 10,
            name: ''
        }
    },
    computed: {
        fullName() {
            if (this.name == '') {
                return '';
            } else {
                return this.name + ' ' + 'Thomas';
            }
        },
        nameData() {
            let nameVal=[];

            // Length of fullName
            let nameLength = this.fullName;
            nameVal.push(nameLength.length);

            // Middle character
            let middle = nameLength.charAt(Math.floor(nameLength.length / 2));
            nameVal.push(middle);

            return nameVal;
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
        },
        remove() {
            this.counter--;
        },
        setName(event) {
            this.name=event.target.value;
        },
        resetName() {
            this.name='';
        },
        submitForm() {
            alert("Form Submitted")
        },
        consoleMe() {
            console.log("Space bar keyup");
        }
    }
});

app.mount('#myGoals');