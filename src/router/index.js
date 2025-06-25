import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/views/Homepage.vue";
import AboutPage from "@/views/AboutPage.vue";
import UserList from "@/views/UserList.vue";
import Adduser from "@/views/Adduser.vue";
import LoginPage from "@/views/LoginPage.vue";

const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutPage},
    {path: '/users', component: UserList},
    {path: '/register', component: Adduser},
    {path: '/login', component: LoginPage},
    {path: '/:pathMatch(.*)*', redirect: '/'}, // Redirect any unmatched routes to home
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;