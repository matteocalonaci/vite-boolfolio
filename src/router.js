import { createRouter, createWebHistory } from "vue-router";

import AppHome from './views/AppHome.vue';
import ProjectCards from "./views/ProjectCards.vue";
import SingleProject from "./views/SingleProject.vue";
import AppAbout from './views/AppAbout.vue';
import AppContact from './views/AppContact.vue';
import Not_found from "./views/Not_found.vue";

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
        path: '/projectCards/:id?',
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
        {
            // path: '/:pathMatch(.*)*',
            path: '/:pathMatch(.*)*',
            name: 'not_found',
            component: Not_found
        },
       

    ]

});

export { router };