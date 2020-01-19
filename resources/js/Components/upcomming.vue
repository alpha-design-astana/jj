<template>
    <div class="home-blocks d-flex align-items-center flex-column pt-4 position-relative">
        <span class="header d-flex justify-content-between mt-5">
            <h3 class="font-weight-bold">Предстоящие мероприятия</h3>
            <span class="d-flex align-items-center">
                <p class="mb-0 mr-3">Все мероприятия</p>
                <img class="mr-3" src="@assets/images/common/arrow-left.svg"/>
                <img src="@assets/images/common/arrow-right.svg"/>
            </span>
        </span>
        <carousel
            class="mt-5"
            :perPage="5"
            :loop="true"
            :scrollPerPage="false"
            :paginationEnabled="false"
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
        components:{
            CalendarCard, Carousel, Slide
        },
        data(){
            return{
                slides:[

                ]
            }
        }
    }
</script>
