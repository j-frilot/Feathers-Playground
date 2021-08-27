<template>
    <div class="card mt-3 text-center">
        <div class="card-body">
            <h3 class=" fs-4 pb-3">
                {{ favorite.artist }}
            </h3>
            <DeleteButton :favorite="favorite" />
        </div>
    </div>
</template>

<script>
import DeleteButton from "./DeleteButton.vue";
// import { mapActions } from "vuex";
export default {
    name: "EachFavorite",
    props: {
        favorite: Object
    },
    components: {
        DeleteButton
    }
    // methods: {
    //     ...mapActions(["deleteFavorite"])
    // },
    // completed() {
    //     this.fetchTodos();
    // }
};
</script>
