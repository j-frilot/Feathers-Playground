<template>
    <div class="card mt-3 job-card text-center">
        <div class="card-body"
            ><h2 className="card-title ">
                {{ job.title }}
            </h2>

            <h3 className="card-subtitle  fs-4 pb-3">
                {{ job.company }}
            </h3>
            <h4 className="card-subtitle  fs-5 pb-3">
                {{ job.date_applied }}
            </h4>
            <DeleteButton v-on:click="$emit('delete-job', job.id)"
        /></div>
    </div>
</template>

<script>
import DeleteButton from "./DeleteButton.vue";
export default {
    name: "EachJob",
    props: {
        job: Object
    },
    components: {
        DeleteButton
    },
    methods: {},
    emits: ["delete-job"]
};
</script>
