import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TeamView from '../views/TeamView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/members',
        name: 'members',
        component: HomeView
    },
    {
        path: '/teams',
        name: 'teams',
        component: TeamView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;