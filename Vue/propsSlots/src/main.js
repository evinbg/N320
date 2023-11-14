import PropsOne from './components/propsOne.vue';
import PropsTwo from './components/propsTwo.vue';
import StudentData from './components/studentData.vue';
import SlotOne from './components/slotOne.vue';
import CustomButton from './components/customButton.vue';
import SlotTwo from './components/slotTwo.vue';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.component('props-one', PropsOne);
app.component('props-two', PropsTwo);
app.component('student-data', StudentData);
app.component('slot-one', SlotOne);
app.component('custom-button', CustomButton);
app.component('slot-two', SlotTwo);
app.mount('#app');
