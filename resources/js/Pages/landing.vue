<template>
    <div class="landing">
        <Navbar/>
        <Hero/>
        <Home/>
        <Navbar/>
    </div>
</template>
<script>
    import Navbar from "../Components/navbar.vue";
    import Hero from "../Components/hero.vue";
    import Home from "../Components/home.vue";

    export default{
        components:{
            Navbar,
            Hero,
            Home,
        }
    }
</script>
