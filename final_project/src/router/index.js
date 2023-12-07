import {createRouter, createWebHistory} from 'vue-router';
import SessionsView from '../views/SessionsView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: SessionsView
    },
    {
        path: '/mySessions',
        name: 'my-sessions',
        component: () => import('../views/UserSessionsView.vue')
    },
    {
        path: '/sessions',
        name: 'sessions',
        component: () => import('../views/UserSessionsView.vue'),
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;