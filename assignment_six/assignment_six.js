const app = Vue.createApp();

app.component('my-header', {
    template: `
    <h1>{{Name}}</h1>
    <h2>{{Course}}: {{Assignment_Name}}</h2>
    <h3>Due Date: {{printDate()}}</h3>
    <h4>Difficulty Level: {{Difficulty_Level}}/5</h4>`,
    data() {
        return {
            Name: 'Evin Bour-Gilson',
            Course: 'N320',
            Assignment_Name: 'First Vue Assignment',
            Difficulty_Level: 3,
            Completed: false,
        }
    },
    methods: {
        printDate() {
            let date = new Date();
            date.setDate(date.getDate() + 7);
            return date.toLocaleDateString();
        }
    }
});

app.component('my-list', {
    template: `
    <h1>Best Colors</h1>
    <ul>
        <li 
        v-for="color in Color_Array"
        v-bind:value='Color_Array'>
        {{color.name}}</li>
    </ul>
    <button 
    v-on:click='Array_Counter = (Array_Counter + 1) % Color_Array.length'>
    Favorite Color</button>
    <p v-if="Array_Counter > -1">{{Color_Array[Array_Counter].name}}</p>

    <br/><br/>
    <label for="input">New Color: </label>
    <input 
    v-model="Color_Input"
    type="text"
    id="input">
    <button @:click="addToList(Color_Input)">{{colorInput}}</button>
    <p>{{Color_Text}}</p>`,
    data() {
        return {
            Color_Array: [
                {
                    name: 'yellow',
                    id: 0
                },
                {
                    name: 'white',
                    id: 1
                },
                {
                    name: 'turquoise',
                    id: 2
                },
                {
                    name: 'beige',
                    id: 3
                },
                {
                    name: 'pink',
                    id: 4
                },
                {
                    name: 'blue',
                    id: 5
                },
                {
                    name: 'ruby',
                    id: 6
                }
            ],
            Array_Counter: -1,
            Color_Input: '',
            Color_Text: ''
        }
    },
    computed: {
        colorInput() {
            if (this.Color_Input == '') {
                return 'Add to List';
            } else {
                return 'Add ' + this.Color_Input + ' to List';
            }
        }
    },
    methods: {
        addToList(color) {
            let colorPush = {
                name: color,
                id: this.Color_Array.length
            }
            this.Color_Array.push(colorPush);
            this.Color_Text = color + ' has been added to your List!';
        }
    }
});

app.mount('#vueComponent');