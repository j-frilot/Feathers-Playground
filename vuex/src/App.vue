<template>
    <div class="container">
        <Header />
        <AddJob :demo_job_list="demo_job_list" @add-job="addJob" />
        <CardSection :demo_job_list="demo_job_list" @delete-job="deleteJob" />
    </div>
</template>

<script>
import Header from "./components/Header";
import AddJob from "./components/AddJob.vue";
import CardSection from "./components/CardSection.vue";

export default {
    name: "App",
    components: {
        Header,
        CardSection,
        AddJob
    },
    data() {
        return {
            demo_job_list: []
        };
    },
    methods: {
        addJob(job) {
            this.demo_job_list = [...this.demo_job_list, job];
        },
        async deleteJob(id) {
            console.log("Deleted Id: ", id);
            this.demo_job_list = this.demo_job_list.filter(
                (job) => job.id !== id
            );
        },
        //fetching from json-server
        async fetchJobs() {
            const res = await fetch("http://localhost:5000/demo_job_list");
            const data = await res.json();

            return data;
        }
    },
    async created() {
        this.demo_job_list = await this.fetchJobs();
    }
};
</script>
