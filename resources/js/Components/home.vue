<template>
    <div class="home">
        <Upcomming/>
        <HomeNews/>
        <Gallery/>
    </div>
</template>
<script>
    import Upcomming from "../Components/upcomming.vue";
    import HomeNews from "../Components/homeNews.vue";
    import Gallery from '../Components/gallery';
    export default{
        components:{
            Upcomming, HomeNews, Gallery
        }
    }
</script>
