<template>
    <div class="container">

        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <div class="navbar-nav mr-auto">
                <router-link to="/" class="nav-link">Books</router-link>
                <router-link to="/authors" class="nav-link">Authors</router-link>
            </div>
            <div class="navbar-nav">
                <router-link to="/add" class="btn btn-success">+ Add book</router-link>
            </div>
        </nav>

        <router-view></router-view>

    </div>
</template>

<script>
    export default {}
</script>