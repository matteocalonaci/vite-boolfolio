import { createRouter, createWebHistory } from "vue-router";

import AppHome from './views/AppHome.vue';
import ProjectCards from "./views/ProjectCards.vue";
import SingleProject from "./views/SingleProject.vue";
import AppAbout from './views/AppAbout.vue';
import AppContact from './views/AppContact.vue';
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
        {
            path: '/singleProject',
            name: 'project',
            component: SingleProject
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact
        },

    ]

});

export { router };