<template>
<div class="memberContainer">
    <h2>{{ member.name }}</h2>
    <h3>{{ member.role }}</h3>
    <ul class="info">
        <li><b>Phone:</b> {{ member.phone }}</li>
        <li><b>Email:</b> {{ member.email }}</li>
    </ul>
</div>
</template>
        
<script>
export default {
    data() {
        return {
        }
    },
    props: ['member'],
    methods: {
    }
}
</script>

<style scoped>
.memberContainer {
    margin: 10px;
    background-color: aquamarine;
    padding: 10px;
    width: 355px;
    height: auto;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: black;
}

.info {
    background-color: lightgray;
    border-radius: 10px;
}

ul {
    margin: 10px;
    padding: 10px;
}

li {
    margin: 5px;
    margin-left: 20px;
}

h2 {
    margin: 10px;
}

h3 {
    margin: 10px;
}

</style>