import Vue from 'vue'
import '../sass/app.scss';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import VueHorizontalTimeline from 'vue-horizontal-timeline'
import routes from "./routes";
import * as VueGoogleMaps from "vue2-google-maps";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueHorizontalTimeline);
Vue.use(VueGoogleMaps,{
    load:{
        key:'AIzaSyA22vZWqHMMYeYzq4GL8Amxd6kMQ3m59Hw',
        libraries:'places,drawing',
    }
})

new Vue({
    router:routes,
}).$mount('#app');


