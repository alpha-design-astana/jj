<template>
    <div class="home-blocks d-flex align-items-center flex-column pt-5">
        <span class="header d-flex align-items-center justify-content-between mt-5">
            <h3 class="font-weight-bold t-32">Новости</h3>
            <p class="mb-0 mr-3 t-16">Все новости</p>
        </span>
        <span class="section section-big-res mt-4 d-flex justify-content-between">
            <NewsCard style="width: 15vw; height: 20vw;"/>
            <NewsCard style="width:28vw; height: 20vw;"/>
            <NewsCard style="width: 15vw; height: 20vw;"/>
        </span>
        <span class="section section-sm-res mt-5 d-flex justify-content-between">
            <router-link to="/pages/news/2" class="d-flex news-card justify-content-between">
                <img src="@assets/images/news/news1.svg" style="width: 4vw; height: 5vw"/>
                <span class="ml-3">
                    <p class="date">12.12.2019</p>
                    <p class="title t-16">
                        Битва Чемпионов 11:
                    </p>
                    <p class="title title-res t-16">
                        Школа против школы
                    </p>
                </span>
            </router-link>
            <router-link to="/pages/news/2" class="d-flex news-card justify-content-between">
                <img src="@assets/images/news/news1.svg" style="width: 4vw; height: 5vw"/>
                <span class="ml-3">
                    <p class="date">12.12.2019</p>
                    <p class="title t-16">
                        Битва Чемпионов 11:
                    </p>
                    <p class="title title-res t-16">
                        Школа против школы
                    </p>
                </span>
            </router-link>
            <router-link to="/pages/news/2" class="d-flex news-card justify-content-between">
                <img src="@assets/images/news/news1.svg" style="width: 4vw; height: 5vw"/>
                <span class="ml-3">
                    <p class="date">12.12.2019</p>
                    <p class="title t-16">
                        Битва Чемпионов 11:
                    </p>
                    <p class="title title-res t-16">
                        Школа против школы
                    </p>
                </span>
            </router-link>
            <router-link to="/pages/news/2" class="d-flex news-card justify-content-between">
                <img src="@assets/images/news/news1.svg" style="width: 4vw; height: 5vw"/>
                <span class="ml-3">
                    <p class="date">12.12.2019</p>
                    <p class="title t-16">
                        Битва Чемпионов 11:
                    </p>
                    <p class="title title-res t-16">
                        Школа против школы
                    </p>
                </span>
            </router-link>
        </span>
    </div>
</template>
<script>
    import NewsCard from './newsCard.vue';
    export default{
        components:{
            NewsCard
        }
    }
</script>
