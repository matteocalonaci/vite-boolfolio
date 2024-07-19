import { createRouter, createWebHistory } from "vue-router";

import AppHome from './views/AppHome.vue';
import ProjectCards from "./views/ProjectCards.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'AppHome',
            component: AppHome
        },
        {
            path: '/projectCards',
            name: 'ProjectCards',
            component: ProjectCards
        },
    ]

});

export { router };