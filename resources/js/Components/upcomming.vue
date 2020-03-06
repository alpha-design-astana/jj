<template>
    <div class="home-blocks d-flex align-items-center flex-column pt-4 position-relative">
        <span class="header header-res d-flex justify-content-between align-items-center mt-5">
            <h3 class="helvetica-bold t-32">Предстоящие мероприятия</h3>
            <span class="d-flex align-items-center t-16">
                <router-link to="/pages/news" class="mb-0 mr-3 helvetica-bold c-white">Все мероприятия</router-link>
                <img class="mr-3" src="@assets/images/common/arrow-left.svg" @click="slide('left')"/>
                <img src="@assets/images/common/arrow-right.svg" @click="slide('right')"/>
            </span>
        </span>
        <carousel
            class="mt-5"
            :perPage="showNumber"
            :loop="true"
            :paginationEnabled="false"
            :scrollPerPage="false"
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
</template>
<script>
    import CalendarCard from "./calendarCard.vue"
    import { Carousel, Slide } from 'vue-carousel';

    export default{
        data(){
            return{
                nextLabel: "<img class='slide-button' ref='slideRight' src='@assets/images/common/arrow-left'/>",
                prevLabel: "<img class='slide-button' ref='slideLeft' src='@assets/images/common/arrow-right'/>",
                showNumber:5
            }
        },
        components:{
            CalendarCard, Carousel, Slide
        },
        created() {
            window.addEventListener("resize", this.resizeBlock);
        },
        destroyed() {
            window.removeEventListener("resize", this.resizeBlock);
        },
        methods:{
            slide(direction){
                if(direction === 'right'){
                    this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
                }else{
                    this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());

                }
            },
            resizeBlock(){
                if (window.innerWidth < 450){
                    this.showNumber = 3;
                    this.screen=window.width;
                }
                else if(window.innerWidth>450 && window.innerWidth<860){
                    this.showNumber = 4;
                    this.screen=window.width;
                }
                else{
                    this.showAmount=5;
                }
            }
        },
        mounted(){
            if (window.innerWidth < 450){
                this.showNumber = 3;
                this.screen=window.width;
            }
            else if(window.innerWidth>450 && window.innerWidth<860){
                this.showNumber = 4;
                this.screen=window.width;
            }
            else{
                this.showAmount=5;
            }
        }
    }
</script>
