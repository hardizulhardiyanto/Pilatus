import Vue from 'vue';
import Cookies from "js-cookie";
import Router from "vue-router";
import {
    Dashboard,
    InitialPage
} from "../views"
Vue.use(Router);

let router = new Router({
    mode: "history",
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
    routes: [
        {
            path: "/",
            name: "InitialPage",
            component: InitialPage,
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (!to.matched.some(record => record.meta.requiresAuth)) {
        next();
    } else {
        let checkToken = Cookies.get("TOKEN");
        if (checkToken !== undefined) {
            next()
        } else {
            next({
                name: 'Login',
            })
        }
    }
})

export default router