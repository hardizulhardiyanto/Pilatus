<template>
    <v-app-bar
            app
            color="white"
            dark
            fixed
            elevation="1"
    >
        <div class="logoPilatus">
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2  hidden-sm-and-down"
                    contain
                    :src="pilatusLogo"
                    transition="scale-transition"
                    width="160"
                    height="90"
            />
        </div>
        <v-spacer />
        <div class="hidden-sm-and-down menu_sec">
            <v-btn plain class="ma-1 btn_menu" color="primary" :ripple="false" >Home</v-btn>
            <v-btn plain class="ma-1 btn_menu" color="primary" :ripple="false">Profile</v-btn>
            <v-btn plain class="ma-1 btn_menu" color="primary" :ripple="false">Schedule</v-btn>
        </div>
    </v-app-bar>
</template>

<script>
    import {
        logoPilatus
    } from "../../helper/pictures";

    export default {
        name: "Header",
        data: () => ({
            pilatusLogo: logoPilatus
        })
    }
</script>

<style scoped>
    .logoPilatus{
        position: absolute;
        width: 195px;
        left: 5%;
    }
    .btn_menu {
        text-transform: unset !important;
        font-family: "Roboto Bold";
    }
    .menu_sec{
        position: absolute;
        right: 5%;
    }
</style>