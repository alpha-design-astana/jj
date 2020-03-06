<template>
    <div class="news-page w-100 d-flex flex-column align-items-center">
        <Breadcrumb class="mt-5" item1="Главная" item2="Новости"/>
        <span class="header d-flex align-items-center justify-content-between">
            <h3 class="font-weight-bold">Новости</h3>
        </span>
        <div class="header mt-4 d-flex justify-content-between">
            <div class="news-big d-flex flex-wrap justify-content-between">
                <NewsCard class="news-item-card mb-5 mt-3"/>
                <NewsCard class="news-item-card mb-5 mt-3"/>
                <NewsCard class="news-item-card mb-5 mt-3"/>
                <NewsCard class="news-item-card mb-5 mt-3"/>
                <NewsCard class="news-item-card mb-5 mt-3"/>
                <NewsCard class="news-item-card mb-5 mt-3"/>
                <NewsCard class="news-item-card mb-5 mt-3"/>
                <NewsCard class="news-item-card mb-5 mt-3"/>
                <NewsCard class="news-item-card mb-5 mt-3"/>
            </div>
            <div class="news-mini mt-3 ml-4">
                <router-link to="/pages/news/2" class="d-flex news-card justify-content-between mb-4">
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
                <router-link to="/pages/news/2" class="d-flex news-card justify-content-between mb-4">
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
                <router-link to="/pages/news/2" class="d-flex news-card justify-content-between mb-4">
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
                <router-link to="/pages/news/2" class="d-flex news-card justify-content-between mb-4">
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
                <router-link to="/pages/news/2" class="d-flex news-card justify-content-between mb-4">
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
                <router-link to="/pages/news/2" class="d-flex news-card justify-content-between mb-4">
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
                <router-link to="/pages/news/2" class="d-flex news-card justify-content-between mb-4">
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
                <router-link to="/pages/news/2" class="d-flex news-card justify-content-between mb-4">
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
            </div>
        </div>
        <button class="load-button d-flex justify-content-center mt-2 mb-5 align-items-center">
            <img src="@assets/images/load.svg" class="mr-3"/>
            Загрузить еще
        </button>
    </div>
</template>
<script>
    import NewsCard from "../Components/newsCard.vue";
    import Breadcrumb from "../Components/breadcrumb.vue";

    export default{
        components:{
            NewsCard, Breadcrumb
        }
    }
</script>
