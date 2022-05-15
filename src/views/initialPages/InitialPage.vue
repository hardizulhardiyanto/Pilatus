<template>
    <div>
        <Header />
        <v-container style="height: 100%; background-color: red">Initial Page</v-container>
    </div>
</template>

<script>
    import Header from "./Header";
    export default {
        name: "InitialPage",
        components: {
            Header
        },
    }
</script>

<style scoped>

</style>