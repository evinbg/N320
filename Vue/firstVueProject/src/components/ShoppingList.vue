<template>
    <div>
      <header>
        <h2>Shopping List</h2>
      </header>
      <input type="text" 
      ref="inputValue"
      v-model="inputValue"
      @keyup.enter="addItem"/>
      <button @click="addItem">Add Item</button>
      <ul>
        <li v-for="(item, i) in shoppingList"
        :key="i">
        {{item}}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputValue: '',
        shoppingList: []
      }
    },
    methods: {
        addItem() {
            if(this.inputValue != '') {
                this.shoppingList.push(this.inputValue);
                this.inputValue = '';
            }
            this.$refs.inputValue.focus();
            console.log(this.shoppingList);
        }
    }
  }
  </script>
  
  <style></style>