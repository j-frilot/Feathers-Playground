<template>
    <section class="accordion py-3" id="formAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="formAccordionHeadingOne">
                <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#formActivate"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    Add An Artist
                </button>
            </h2>
            <div
                id="formActivate"
                class="accordion-collapse collapse"
                aria-labelledby="formAccordionHeadingOne"
                data-bs-parent="#formAccordion"
            >
                <div class="accordion-body">
                    <form class="m-2 text-center" @submit="onSubmit">
                        <div class="row">
                            <div class="col">
                                <label htmlFor="artist" class="form-label">
                                    Song Artist
                                </label>
                                <input
                                    type="text"
                                    name="artist"
                                    v-model="artist"
                                    class="form-control"
                                    placeholder="Enter Artist"
                                    required
                                />
                            </div>
                        </div>

                        <input type="submit" class="btn btn-primary m-2" />
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "AddFavorite",
    data() {
        return {
            artist: ""
        };
    },
    methods: {
        ...mapActions(["addFavorite"]),
        onSubmit(e) {
            e.preventDefault();
            this.addFavorite(this.artist);
        }
    },
    completed() {
        this.fetchTodos();
    }
};
</script>
