<template>
    <section class="todos">
        <ul class="list-group" id="array-rendering">
            <li
                class="list-group-item m-2 bg-secondary"
                :key="favorite.id"
                v-for="favorite in favorites"
            >
                <p class="fs-4">{{ favorite.name }}</p>
                <p class="fs-5">{{ favorite.artist }}</p>

                <ButtonRemove
                    @click="onDelete(favorite.id)"
                    :favorite="favorite"
                />
            </li>
        </ul>
    </section>
</template>

<script>
import ButtonRemove from "./ButtonRemove.vue";
export default {
    name: "Items",
    components: { ButtonRemove },
    props: {
        favorites: Array
    },
    methods: {
        onDelete(id) {
            this.$emit("delete-song", id);
        }
    }
};
</script>

<style>
li {
    text-transform: capitalize;
}
</style>
