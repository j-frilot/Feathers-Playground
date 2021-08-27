<template>
    <div class="container">
        <Header />
        <AddFavorite />
        <CardSection />
    </div>
</template>

<script>
import Header from "./components/Header";
import AddFavorite from "./components/AddFavorite.vue";
import CardSection from "./components/CardSection.vue";
export default {
    name: "App",
    components: {
        Header,
        CardSection,
        AddFavorite
    }
};
</script>
