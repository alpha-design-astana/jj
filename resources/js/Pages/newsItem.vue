<template>
    <div class="section">
        <Breadcrumb class="mt-5" item1="Главная" item2="Новости" item3="Казахстан стал вторым в Азии по джиу-джитсу"/>
        <div class="d-flex justify-content-between mb-5 pb-5">
            <div class="news-item">
                <h3 class="mb-5">Казахстан стал вторым в Азии по джиу-джитсу</h3>
                <img src="@assets/images/news/news2.png" class="horizontal"/>
                <p class="mt-4 mb-4">
                    В столице Монголии Улан-Баторе завершился четвертый чемпионат Азии
                    по джиу-джитсу. Спортсмены сборной Казахстана по итогам турнира завоевали
                    второе общекомандное место, уступив команде из Таиланда.
                    По итогам континентального первенства казахстанские джитсеры завоевали семь
                    золотых, четыре серебряных и пять бронзовых медалей.
                </p>
                <img src="@assets/images/news/news2.png" class="horizontal"/>
                <p class="mt-4">"Золото":</p>
                <ol class="mb-4">
                    <li>Алия Тлепова, 62 килограмма, файтинг</li>
                    <li>Айбар Есенгалиев, свыше 94 килограммов, файтинг</li>
                    <li>Женис Нурлыбаев, 56 килограммов, файтинг</li>
                    <li>Абу-Бакир Жанибек,  62 килограмма, файтинг</li>
                    <li>Галина Дуванова, 52 килограмма, не ваза</li>
                    <li>Досбол Жарасов, 56 килограммов, контакт</li>
                    <li>Баккуар Хамзе, 77 килограммов, контакт</li>
                </ol>
                <img src="@assets/images/news/news1.svg" class="vertical"/>
                <p class="mt-4 mb-4">
                    Сборная Таиланда завоевала 22 золотых, 16 серебряных
                    и девять бронзовых медалей.

                    Хозяева турнира уступили нашим спортсменам одну золотую медаль,
                    на счету сборной Монголии шесть золотых, девять серебряных и
                    15 бронзовых медалей.

                    Четвертый чемпионат Азии по джиу-джитсу является главным региональным
                    соревнованием. В этом году в первенстве приняли участие более 500
                    спортсменов из 20 стран, в судейский состав вошли около 20
                    судей из 13 стран
                </p>
            </div>
            <div class="news-additions">
                <div class="related-news w-100 p-4">
                    <h4 class="font-weight-bold mb-4">Похожие новости</h4>
                    <span class="d-flex news-card news-card-res justify-content-between mb-3">
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
                    </span>
                    <span class="d-flex news-card news-card-res justify-content-between mb-3">
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
                    </span>
                    <span class="d-flex news-card news-card-res justify-content-between mb-3">
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
                    </span>
                    <span class="d-flex news-card news-card-res justify-content-between mb-3">
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
                    </span>
                    <span class="d-flex news-card news-card-res justify-content-between mb-3">
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
                    </span>
                    <span class="d-flex news-card news-card-res justify-content-between mb-3">
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
                    </span>
                </div>
                <div class="events mt-5">
                    <span class="d-flex align-items-center justify-content-between mb-4">
                        <h4 class="t-24">Мероприятия</h4>
                        <span class="d-flex align-items-center ml-3">
                            <img src="@assets/images/common/arrow-left.svg"  @click="slide('left')"/>
                            <img class="ml-3" src="@assets/images/common/arrow-right.svg"  @click="slide('right')"/>
                        </span>
                    </span>
                    <carousel
                        :perPage="1"
                        :loop="true"
                        :scrollPerPage="false"
                        :paginationEnabled="false"
                        ref="carousel"
                        :navigation-next-label="nextLabel"
                        :navigation-prev-label="prevLabel"
                    >
                        <slide>
                            <CalendarCard/>
                        </slide>
                        <slide>
                            <CalendarCard/>
                        </slide>
                        <slide>
                            <CalendarCard/>
                        </slide>
                        <slide>
                            <CalendarCard/>
                        </slide>
                        <slide>
                            <CalendarCard/>
                        </slide>
                        <slide>
                            <CalendarCard/>
                        </slide>
                        <slide>
                            <CalendarCard/>
                        </slide>
                        <slide>
                            <CalendarCard/>
                        </slide>
                        <slide>
                            <CalendarCard/>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Navbar from "../Components/navbar";
    import Breadcrumb from "../Components/breadcrumb";
    import CalendarCard from "../Components/calendarCard";
    import { Carousel, Slide } from 'vue-carousel';

    export default{
        props:[""],
        data(){
            return{
                nextLabel: "<img class='slide-button' ref='slideRight' src='@assets/images/common/arrow-left'/>",
                prevLabel: "<img class='slide-button' ref='slideLeft' src='@assets/images/common/arrow-right'/>",
            }
        },
        components:{
            Navbar, Breadcrumb, CalendarCard, Carousel, Slide
        },
        methods:{
            slide(direction){
                if(direction === 'right'){
                    this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
                }else{
                    this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());

                }
            },
            scroltoTop() {
                window.scrollTo(0,0)
            },
        },
        mounted(){
            this.scroltoTop();
        }
    }
</script>
