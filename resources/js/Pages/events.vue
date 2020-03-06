<template>
    <div class="section events-res">
        <Breadcrumb class="mt-5" item1="Главная" item2="Мероприятия"/>
        <h3 class="t-32">Мероприятия</h3>
        <div class="mb-5 pb-5 mt-4 d-flex justify-content-between">
            <div class="calendar">

            </div>
            <div class="calendar-cards">
                <h3>2019</h3>
                <div class="w-100 d-flex flex-wrap justify-content-between">
                    <CalendarCard class="mt-3 mb-3"/>
                    <CalendarCard class="mt-3 mb-3"/>
                    <CalendarCard class="mt-3 mb-3"/>
                    <CalendarCard class="mt-3 mb-3"/>
                    <CalendarCard class="mt-3 mb-3"/>
                    <CalendarCard class="mt-3 mb-3"/>
                    <CalendarCard class="mt-3 mb-3"/>
                    <CalendarCard class="mt-3 mb-3"/>
                    <CalendarCard class="mt-3 mb-3"/>
                    <CalendarCard class="mt-3 mb-3"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Breadcrumb from "../Components/breadcrumb.vue";
    import CalendarCard from "../Components/calendarCard.vue";
    export default {
        components:{
            CalendarCard, Breadcrumb
        }
    }
</script>
