<template>
<button>
    <slot></slot>
</button>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
    }
}
</script>

<style scoped>
button {
    width: auto;
    padding: 5px;
    background-color: beige;
    border-radius: 10px;
    margin: 4px;
    border-width: 2px;
    border-color: black;
    border-style: solid;
}

button:hover {
    cursor: pointer;
}
</style>