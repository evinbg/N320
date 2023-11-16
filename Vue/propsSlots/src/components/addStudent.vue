<template>
<form @submit.prevent="submitData">
    <label>Name:</label>
    <input type="text" v-model="enteredName"/>
    <br/>
    <label>Age:</label>
    <input type="number" v-model="enteredAge"/>
    <br/>
    <label>Major:</label>
    <input type="text" v-model="enteredMajor"/>
    <br/>
    <label>Class Rank:</label>
    <select v-model="enteredClass">
        <option value="1">Freshman</option>
        <option value="2">Sophmore</option>
        <option value="3">Junior</option>
        <option value="4">Senior</option>
    </select>
    <label>Graduate:</label>
    <input type="checkbox" 
    v-model="enteredGraduate" 
    name="Graduate" 
    value="true"/>
    <button>Add Student</button>
</form>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            enteredAge: '',
            enteredMajor: '',
            enteredClass: '',
            enteredGraduate: ''
        }
    },
    emits: ['add-student'],
    methods: {
        submitData() {
            this.$emit('add-student', 
            this.enteredName,
            this.enteredAge,
            this.enteredMajor,
            this.enteredClass,
            this.enteredGraduate)
        }
    }
}
</script>

<style scoped>
</style>