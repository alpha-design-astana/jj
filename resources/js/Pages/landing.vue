<template>
    <div>
<!--        <template v-if="loadingPercent<100">-->
<!--            <Loader :loading="loadingPercent"/>-->
<!--        </template>-->
        <template>
            <Navbar/>
            <Hero/>
            <Home/>
            <Navbar class="bot-navbar"/>
        </template>
    </div>
</template>
<script>
    import Navbar from "../Components/navbar.vue";
    import Hero from "../Components/hero.vue";
    import Home from "../Components/home.vue";
    // import Loader from "../Pages/loader.vue";

    export default{
        components:{
            Navbar,
            Hero,
            Home,
            // Loader
        },
        created() {
            let perfData = window.performance.timing;
            let estimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart);
            this.loadTime = parseInt((estimatedTime / 1000) % 60) * 100;
            this.doProgress();
        },
        methods: {
            doProgress() {
                let step = this.loadTime / 100;
                this.interval = setInterval(() => {
                    this.loadingPercent++
                }, step);
            }
        },
        computed: {
            loaded() {
                return this.loadingPercent + '%'
            }
        },
        watch: {
            loadingPercent(val) {
                if (val >= 100) {
                    clearInterval(this.interval)
                }
            }
        },
        data() {
            return {
                loadingPercent: 0,
                loadTime: 0,
                interval: null
            }
        }
    }
</script>
