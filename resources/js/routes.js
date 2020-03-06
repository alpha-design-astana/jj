import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Landing from "./Pages/landing.vue"
import Other from "./Pages/other.vue"
import Loader from "./Pages/loader.vue"

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    },
    routes: [
        {
            name:"landing",
            path:"/",
            component:Landing,
            props:false,
        },
        {
            name:"news",
            path:"/pages/:type",
            component: Other,
            props:true,
        },
        {
            name:"news-item",
            path:"/pages/:type/:id",
            component: Other,
            props:true,
        },
        {
            name:"events",
            path:"/pages/:type",
            component: Other,
            props:true,
        },
        {
            name:"gallery",
            path:"/pages/:type",
            component: Other,
            props:true,
        },
        {
            name:"gallery-item",
            path:"/pages/:type/:id",
            component: Other,
            props:true,
        },
        {
            name:"contacts",
            path:"/pages/:type",
            component: Other,
            props:true,
        },
        {
            name:"federation",
            path:"/pages/:type",
            component: Other,
            props:true,
        },
        {
            name:"loader",
            path:"/loader",
            component: Loader,
            props:false,
        }
        ]
    });
