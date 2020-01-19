<template>
    <div class="section">
        <Breadcrumb class="mt-5" item1="Главная" item2="Контакты"/>
        <h3 class="mb-3">Контакты</h3>
        <div class="d-flex mb-5 pb-5 justify-content-between">
            <div class="map">
                <GmapMap
                    :zoom="14"
                    map-type-id="terrain"
                    class="gmap"
                    :center="{lng:71.403785,lat:51.175816}"
                    :options="mapStyles"
                >
                    <GmapMarker
                        :position="m.position"
                        :key="index"
                        v-for="(m, index) in markers"
                        :icon="{url:require('../../assets/images/common/map-pin.svg')}"
                        style="z-index: 100"
                    />
                </GmapMap>
            </div>
            <div class="contacts-details">
                <p class="gray">
                    Адрес
                </p>
                <p class="white mb-4">
                    Казахстан, г. Нур-Султан, ул. Богенбая 25, офис 207
                </p>
                <p class="gray">Телефон</p>
                <p class="white mb-0">
                    +7 707 987 57 54
                </p>
                <p class="white mb-4">
                    +7 7172 98 78 43
                </p>
                <p class="gray">
                    Почта
                </p>
                <p class="white mb-4">
                    info@jj.kz
                </p>
                <p class="gray mb-2">
                    Мы в соцсетях
                </p>
                <span class="d-flex">
                    <img src="@assets/images/socials/facebook.svg"/>
                    <img class="ml-3" src="@assets/images/socials/instagram.svg"/>
                </span>
                <button class="contact-us mt-4" @click="isModal=true">
                    Написать нам
                </button>
            </div>
        </div>
        <div v-if="isModal" class="modal d-flex flex-column align-items-center justify-content-center">
            <span class="d-flex flex-column align-items-center mb-4">
                <img class="mb-3" @click="isModal=false" src="@assets/images/common/cross.svg"/>
                <p>Закрыть</p>
            </span>
            <div class="modal-contact d-flex flex-column align-items-center justify-content-center">
                <h3 class="mb-5">Написать нам</h3>
                <input class="p-3 mb-3" placeholder="ФИО"/>
                <input class="p-3 mb-3" placeholder="Ваша почта"/>
                <textarea class="p-3 mb-5" placeholder="Текст письма"/>
                <button class="contact-us">
                    Отправить
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import Breadcrumb from "../Components/breadcrumb";

    export default{
        components:{
            Breadcrumb
        },
        data(){
            return{
                isModal:false,
                markers: [
                    {
                        name: "Jiu Jitsu",
                        position: {lng: 71.403785, lat: 51.175816}
                    }
                ],
                mapStyles:{
                    styles:[
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.neighborhood",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#c9c9c9"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>
