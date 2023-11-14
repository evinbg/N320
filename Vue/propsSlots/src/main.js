import PropsOne from './components/propsOne.vue';
import PropsTwo from './components/propsTwo.vue';
import StudentData from './components/studentData.vue';

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.component('props-one', PropsOne);
app.component('props-two', PropsTwo);
app.component('student-data', StudentData);
app.mount('#app');
