<template>
    <div class="row">
        <div
            class="col-xs-12 col-sm-6 col-md-4"
            v-for="favorite in allFavorites"
            :key="favorite.id"
        >
            <EachFavorite :favorite="favorite" />
        </div>
    </div>
</template>

<script>
import EachFavorite from "./EachFavorite";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "CardSection",
    components: {
        EachFavorite
    },
    props: { favorites: Array },
    methods: {
        ...mapActions(["fetchFavorites"])
    },
    computed: mapGetters(["allFavorites"]),
    created() {
        this.fetchFavorites();
    }
};
</script>
