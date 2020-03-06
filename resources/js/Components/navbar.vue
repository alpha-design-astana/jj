<template>
    <div class="navbar-main navheader d-flex justify-content-center">
        <nav class="navbar navbar-expand-lg pl-0 pr-0">
            <a class="navbar-brand" href="/">
                <Logo fill="white" width="136" height="40"/>
            </a>
            <button
                class="navbar-toggler button-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="show=!show"
            >
                <img class="navbar-toggler-icon" src="@assets/images/common/open-menu.svg"/>
            </button>
            <div
                class="collapse navbar-collapse ml-4"
                id="navbarSupportedContent"
            >
                <span class="d-flex justify-content-between mr-3 mb-0 align-items-center">
                    <a class="mr-4"><img src="@assets/images/socials/facebook.svg"/></a>
                    <a class="mr-4"><img src="@assets/images/socials/twitter.svg"/></a>
                    <a class="mr-4"><img src="@assets/images/socials/instagram.svg"/></a>
                    <a class="mr-4"><img src="@assets/images/socials/youtube.svg"/></a>
                </span>
                <ul class="navbar-nav">
                    <li class="nav-item mr-2">
                        <router-link
                            class="nav-link t-15"
                            to="/"
                            :class="{'active': this.$route.path==='/'}"
                        >
                            Главная
                        </router-link>
                    </li>
                    <li class="nav-item mr-2">
                        <router-link
                            class="nav-link t-15"
                            :class="{'active': this.$route.path==='/pages/federation'}"
                            to="/pages/federation"
                        >
                            О Федерации
                        </router-link>
                    </li>
                    <li class="nav-item mr-2">
                        <router-link
                            class="nav-link t-15"
                            :class="{'active': this.$route.path==='/pages/events'}"
                            to="/pages/events"
                        >
                            Мероприятия
                        </router-link>
                    </li>
                    <li class="nav-item mr-2">
                        <router-link
                            class="nav-link t-15"
                            :class="{'active': this.$route.path==='/pages/news'}"
                            to="/pages/news"
                        >
                            Новости
                        </router-link>
                    </li>
                    <li class="nav-item mr-2">
                        <router-link
                            class="nav-link t-15"
                            :class="{'active': this.$route.path==='/pages/gallery'}"
                            to="/pages/gallery"
                        >
                            Галерея
                        </router-link>
                    </li>
                    <li class="nav-item mr-2">
                        <router-link
                            class="nav-link t-15"
                            :class="{'active': this.$route.path==='/pages/contacts'}"
                            to="/pages/contacts"
                        >
                            Контакты
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
    import Logo from "../../assets/images/logo.vue";
    export default{
        name:'navbar-main',
        data(){
            return{
                show: false,
            }
        },
        components:{
            Logo
        }
    }
</script>
