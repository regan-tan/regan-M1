// IMPORT THE PAGES
// import Discover from "@/views/Discover.vue";

// IMPORT FUNCTIONS
import { createRouter, createWebHistory } from "vue-router";

// Create and export the router
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "LandingPage",
            component: LandingPage,
        },
    ]
});

// This is to protect the necessary pages.
// To protect a page, add a "meta" object and set "needsAuth" to true.
import store from "@/utility/vuexStore";

router.beforeEach(async (to, form, next) => {
    await store.dispatch("checkLoginStatus");

    if (to.meta.needsAuth && !store.state.isLoggedIn) {
        next("sign-in");
        return;
    }

    next();
});

export default router;