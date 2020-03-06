<template>
    <div class="home-blocks d-flex align-items-center flex-column pt-5" style="padding-bottom: 100px;">
        <span class="header d-flex justify-content-between align-items-end mt-5">
            <h3 class="helvetica-bold t-32">Галлерея</h3>
            <router-link to="/pages/gallery" class="helvetica-bold c-white mb-0 mr-3 t-16">Перейти в галлерею</router-link>
        </span>
        <span class="section d-flex justify-content-between mt-4">
            <span class="position-relative home-gallery home-gallery-res">
                <span class="shade"></span>
                <img src="@assets/images/news/news2.png" style="width: 39vw; height: 25vw"/>
                <span class="position-absolute gallery-description">
                    <p class="date">12.12.2019</p>
                    <p class="description t-24">Битва Чемпионов 11: Школа против школы</p>
                </span>
            </span>
            <span class="d-flex home-gallery-mini flex-column justify-content-between ml-2">
                <span class="position-relative home-gallery">
                     <span class="shade"></span>
                    <img src="@assets/images/news/news2.png" style="width: 20vw; height: 12vw"/>
                    <span class="position-absolute gallery-description">
                        <p class="date">12.12.2019</p>
                        <p class="description t-24">Битва Чемпионов 11: Школа против школы</p>
                    </span>
                </span>
                <span class="position-relative home-gallery">
                     <span class="shade"></span>
                    <img src="@assets/images/news/news2.png" style="width: 20vw; height: 12vw"/>
                    <span class="position-absolute gallery-description">
                        <p class="date">12.12.2019</p>
                        <p class="description t-24">Битва Чемпионов 11: Школа против школы</p>
                    </span>
                </span>
            </span>
        </span>
    </div>
</template>
<script>
    export default{

    }
</script>
