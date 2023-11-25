<template>
<div class="container">
    <form @submit.prevent="submitData">
        <label for="teamName">Team Name: </label>
        <input type="text" id="teamName" v-model="enteredName"/>
        <br/>
        <p>Select Role: </p>
        <div class="radios">
            <input type="radio" id="developer" name="role" value="Developer" v-model="chosenRole"/>
            <label for="developer">Developer</label>

            <input type="radio" id="designer" name="role" value="Designer" v-model="chosenRole"/>
            <label for="designer">Designer</label>

            <input type="radio" id="uiux" name="role" value="UI/UX" v-model="chosenRole"/>
            <label for="uiux">UI/UX</label>
        </div>
        <div>
            <slot-button type="submit">Submit</slot-button>
        </div>
    </form>
</div>
</template>
    
<script>
export default {
    data() {
        return {
            enteredName: '',
            chosenRole: ''
        }
    },
    emits: ['filter-data'],
    methods: {
        submitData() {
            this.$emit('filter-data', 
            this.enteredName,
            this.chosenRole)
        }
    }
}
</script>

<style scoped>
.container {
    margin: 5px;
    background-color: aquamarine;
    border-radius: 10px;
    padding: 10px;
    width: 400px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
}

.radios {
    margin: 5px;
}

label {
    margin: 5px;
}

p {
    margin: 5px;
}

#teamName {
    border-radius: 2px;
    border-color: black;
    border-style: solid;
}
</style>