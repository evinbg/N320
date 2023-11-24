import InputForm from './components/InputForm.vue';
import FilteredList from './components/FilteredList.vue';
import MemberInfo from './components/MemberInfo.vue';
import SlotButton from './components/SlotButton.vue';
import router from './router/index.js';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.component('input-form', InputForm);
app.component('filtered-list', FilteredList);
app.component('member-info', MemberInfo);
app.component('slot-button', SlotButton);

app.use(router);
app.mount('#app');
