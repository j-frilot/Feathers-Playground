<template>
    <div class="row">
        <div
            className="col-xs-12 col-sm-6 col-md-4"
            v-for="job in demo_job_list"
            :key="job.id"
        >
            <EachJob :job="job" @delete-job="deleteJob" />
        </div>
    </div>
</template>

<script>
import EachJob from "./EachJob";

export default {
    name: "CardSection",
    components: {
        EachJob
    },
    props: { demo_job_list: Array },
    methods: {
        deleteJob(id) {
            this.$emit("delete-job", id);
        }
    },
    emits: ["delete-job"]
};
</script>
