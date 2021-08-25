<template>
    <div class="container text-center">
        <h1>Welcome, {{ name }}!</h1>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        name: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
