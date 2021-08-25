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
                    Add New Job
                </button>
            </h2>
            <div
                id="formActivate"
                class="accordion-collapse collapse"
                aria-labelledby="formAccordionHeadingOne"
                data-bs-parent="#formAccordion"
            >
                <div class="accordion-body">
                    <form class="m-2 text-center">
                        <div class="row">
                            <div class="col">
                                <label htmlFor="title" class="form-label">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    v-model="title"
                                    class="form-control"
                                    placeholder="Enter Job Title"
                                    required
                                />
                            </div>
                            <div class="col">
                                <label htmlFor="company" class="form-label">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    v-model="company"
                                    class="form-control"
                                    placeholder="Enter Company Name"
                                    required
                                />
                            </div>
                            <div class="col-sm-4">
                                <label
                                    htmlFor="date_applied"
                                    class="form-label"
                                >
                                    Date Applied
                                </label>
                                <input
                                    type="date"
                                    name="date_applied"
                                    v-model="date_applied"
                                    class="form-control"
                                    max="2021-12-12"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            value="submit"
                            class="btn btn-primary m-2"
                            v-on:submit="addJob"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AddJob",
    data() {
        return {
            title: "",
            company: "",
            date_applied: ""
        };
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            const addJob = {
                id: Math.floor(Math.random() * 100000),
                title: this.title,
                company: this.company,
                date_applied: this.date_applied
            };

            this.$emit("add-job", addJob);

            this.title = "";
            this.company = "";
            this.date_applied = "";
        }
    }
};
</script>
