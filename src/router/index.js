import { createRouter, createWebHashHistory } from 'vue-router';
const routerHistory = createWebHashHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: "Index",
            meta: {
                title: "首页"
            },
            component: () => import("../pages/index")
        },
        {
            path: "/classify",
            name: "Classify",
            meta: {
                title: "分类"
            },
            component: () => import("../pages/classify")
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: "/"
        }
    ]
})
export default router;