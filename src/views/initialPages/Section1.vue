<template>
    <div class="hero">
        <v-container style="height: 100vh">
            <v-row class="pb-6" align="center"  justify="start" style="height:  100vh ">
                <v-col cols="6" >
                    <v-col cols="10">
                        <div style="color: white; font-size: 32px" class="title_head">
                            Kursus Programming Online
                        </div>
                        <div style="color: white;" class="title_head">
                            3 Bulan kamu sudah menjadi seorang Fullstack Developer dengan biaya
                        </div>
                        <v-row no-gutters align="center">
                            <v-col cols="5">
                                <v-img
                                        alt="Vuetify Logo"
                                        class="shrink mr-2  hidden-sm-and-down"
                                        contain
                                        :src="specialOffer"
                                        transition="scale-transition"
                                />
                            </v-col>
                            <v-col>
                                <div style="color: white; font-size: 32px;" class="title_head label">
                                    8.000.000
                                </div>
                                <div style="color: white;font-size: 42px" class="title_head">
                                    3.000.000
                                </div>
                            </v-col>
                        </v-row>

                    </v-col>
                </v-col>
<!--                <v-col>-->
<!--                    <div style="color: white">-->
<!--                        3 Bulan kamu sudah menjadi seorang Fullstack Developer dan dengan biaya-->
<!--                    </div>-->
<!--                    <v-row no-gutters>-->
<!--                        <v-col cols="5" style="background-color: white">-->
<!--                            <v-img-->
<!--                                    alt="Vuetify Logo"-->
<!--                                    class="shrink mr-2  hidden-sm-and-down"-->
<!--                                    contain-->
<!--                                    :src="specialOffer"-->
<!--                                    transition="scale-transition"-->
<!--                            />-->
<!--                        </v-col>-->
<!--                        <v-col>-->
<!--                             <span style="color: white">-->
<!--                                3 Bulan kamu sudah menjadi seorang Fullstack Developer dan dengan biaya-->
<!--                            </span>-->
<!--                        </v-col>-->
<!--                    </v-row>-->
<!--                </v-col>-->
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {
        bgIntDashboard,
        specialOffer
    } from "../../helper/pictures";

    export default {
        name: "Section1",
        data: () => ({
            bgIntDashboard: bgIntDashboard,
            specialOffer: specialOffer
        })
    }
</script>

<style scoped>
    .hero {
        background: url('../../assets/img/background_up.png');
        background-size: cover;
        background-position: center center;
        height: 100vh;
    }
    .title_head{
        text-align: start;
    }
    .label {
        text-decoration: line-through;
        text-decoration-color: red;
    }
</style>