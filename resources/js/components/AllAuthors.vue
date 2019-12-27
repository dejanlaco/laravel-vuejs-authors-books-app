<template>
    <div>
        <h3>All Authors</h3>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Books</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="author in authors" :key="author.id">
                    <td>{{ author.id }}</td>
                    <td>{{ author.name }}</td>
                    <td>{{ author.age }}</td>
                    <td>{{ author.address }}</td>
                    <td>{{ author.books_count }}</td>
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