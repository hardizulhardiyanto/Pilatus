<template>
    <div>
        <Header />
        <v-main style="background-color: red">
            <Section1 />
            <v-container>
                Absoulute
            </v-container>
        </v-main>
    </div>
</template>

<script>
    import Header from "./Header";
    import Section1 from "./Section1";
    export default {
        name: "InitialPage",
        components: {
            Section1,
            Header,
        },
    }
</script>

<style scoped>

</style>