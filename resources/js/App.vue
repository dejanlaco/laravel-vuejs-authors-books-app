<template>
    <div>

        <router-link to="/">Home</router-link>
        <router-link to="/add">Add book</router-link>
        <router-link to="/authors">Authors</router-link>

        <router-view></router-view>

    </div>
</template>

<script>
    export default {}
</script>