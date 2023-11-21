<template>
<navigation-header></navigation-header>
<RouterView 
:greeting="greeting"
:who="who"
:count="count"
:myVue="myVue"
:book="book"/>
</template>

<script>
import NavigationHeader from './components/navigationHeader.vue';

export default {
  components: {
    NavigationHeader
  },
  data() {
    return {
      greeting: 'hello',
      who: 'Vue',
      count: 1,
      myVue: 'Vue.js',
      book: {
        id: 1,
        title: "Vue 3 Development"
      }
    }
  }
}
</script>

<style scoped>

</style>
