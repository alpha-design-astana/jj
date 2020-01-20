<template>
    <div>
        <div
            class="position-absolute loader1 d-flex flex-column align-items-center"
            :style="style"
        >
            <span class="position-absolute logo-loader d-flex flex-column align-items-center">
                <Logo fill="#D85D28" style="width: 15vw; height: auto"/>
                <p class="font-weight-bold">{{loading}}%</p>
            </span>
        </div>
        <div class="position-absolute loader2 d-flex flex-column align-items-center">
            <Logo fill="#1B2E50" style="margin-top: 45vh; width: 15vw; height: auto"/>
            <p class="font-weight-bold">{{loading}}%</p>
        </div>
    </div>
</template>
<script>
    import Logo from "../../assets/images/logo";

    export default{
        props:["loading"],
        components: {Logo},
        computed: {
            style () {
                return 'width: ' + this.loading +'%' ;
            }
        },
    }
</script>
