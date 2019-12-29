<template>
    <div class="container mt-4">
        <h3>All Authors</h3>

        <table class="table table-sm mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Books</th>
                    <th class="text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="author in authors" :key="author.id">
                    <td>{{ author.id }}</td>
                    <td>{{ author.name }}</td>
                    <td>{{ author.age }}</td>
                    <td>{{ author.address }}</td>
                    <td>{{ author.books_count }}</td>
                    <td class="text-right"><router-link :to="{name: 'author', params: { id: author.id }}" class="btn btn-sm btn-outline-primary">Show data</router-link></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                authors: []
            }
        },
        created() {
            this.axios
                .get('/api/authors')
                .then(response => {
                    this.authors = response.data;
                });
        }
    }
</script>