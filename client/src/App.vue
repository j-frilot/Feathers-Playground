<template>
    <div class="container text-center card mt-5">
        <Header name="Josh" />
        <Items @delete-song="deleteSong" :favorites="favorites" />
    </div>
</template>

<script>
import Header from "./components/Header";
import Items from "./components/Items";

export default {
    name: "App",
    components: {
        Header,
        Items
    },
    data() {
        return {
            favorites: []
        };
    },
    methods: {
        deleteSong(id) {
            this.favorites = this.favorites.filter((fav) => {
                fav.id !== id;
            });
        }
    },

    created() {
        this.favorites = [
            {
                id: 1,
                name: "Uptown Funk",
                artist: "Mark Ronson"
            },
            {
                id: 2,
                name: "blurred lines",
                artist: "pharrell williams"
            },
            {
                id: 3,
                name: "billie jean",
                artist: "michael jackson"
            },
            {
                id: 4,
                name: "i gotta feeling",
                artist: "black eyed peas"
            }
        ];
    }
};
</script>

<style>
.container {
    width: 60%;
}
</style>
