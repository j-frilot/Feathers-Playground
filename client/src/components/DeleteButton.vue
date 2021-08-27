<template>
    <button
        type="button"
        class="btn btn-danger p-1"
        v-on:click="deleteFavorite(favorite.id)"
    >
        Delete Song
    </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "DeleteButton",
    props: {
        favorite: Object
    },
    methods: {
        ...mapActions(["deleteFavorite"])
    },
    completed() {
        this.fetchTodos();
    }
};
</script>
