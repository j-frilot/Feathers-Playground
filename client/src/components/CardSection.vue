<template>
    <div class="row">
        <div
            class="col-xs-12 col-sm-6 col-md-4"
            v-for="favorite in favorites"
            :key="favorite.id"
        >
            <EachFavorite :favorite="favorite" />
        </div>
    </div>
</template>

<script>
import EachFavorite from './EachFavorite';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'CardSection',
    components: {
        EachFavorite
    },
    props: { favorites: Array },
    mounted() {
        this.findFavorites({ query: {} });
    },
    methods: {
        // ...mapActions(["fetchFavorites"])
        ...mapActions('favorites', { findFavorites: 'find' })
    },
    // computed: mapGetters(['allFavorites']),
    computer: mapGetters('boards', { findBoards: 'find' }),
    created() {
        // this.fetchFavorites();
    }
};
</script>
