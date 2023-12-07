import router from './router/index.js';

import { createApp } from 'vue';
import App from './App.vue';
import SessionButton from './components/SessionButton.vue';
import SessionContainer from './components/SessionContainer.vue';
import UserSession from './components/UserSession.vue';

const app = createApp(App);

app.component('session-button', SessionButton);
app.component('session-container', SessionContainer);
app.component('user-session', UserSession);

app.use(router);
app.mount('#app');