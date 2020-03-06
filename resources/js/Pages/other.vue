<template>
    <div class="other d-flex flex-column justify-content-between">
        <div>
            <Navbar/>
            <div class="d-flex justify-content-center" >
                <News v-if="route_param === 'news' && !item_id"/>
                <NewsItem v-else-if="route_param === 'news' && item_id"/>
                <Events v-else-if="route_param === 'events'"/>
                <Gallery v-else-if="route_param === 'gallery' && !item_id"/>
                <GalleryItem v-else-if="route_param === 'gallery' && item_id"/>
                <Contacts v-else-if="route_param === 'contacts'"/>
                <Federation v-else-if="route_param === 'federation'"/>
            </div>
        </div>
        <Navbar class="bot-navbar"/>
    </div>
</template>
<script>
    import News from "./news";
    import NewsItem from "./newsItem";
    import Navbar from "../Components/navbar";
    import Events from "./events";
    import Gallery from "./gallery";
    import GalleryItem from "./galleryItem";
    import Contacts from "./contacts";
    import Federation from "./federation";

    export default{
        components:{
            Federation,
            Navbar, News,NewsItem, Events, Gallery, GalleryItem, Contacts
        },
        computed:{
            route_param:function(){
                return this.$route.params.type;
            },
            item_id:function(){
                return this.$route.params.id;
            }
        }

    }
</script>
