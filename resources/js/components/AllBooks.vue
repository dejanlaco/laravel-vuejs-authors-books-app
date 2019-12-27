<template>
    <div>
        <h3>All Books</h3>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Book name</th>
                    <th>Author</th>
                    <th>Release date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id">
                    <td>{{ book.id }}</td>
                    <td>{{ book.name }}</td>
                    <td>{{ book.author.name }}</td>
                    <td>{{ book.release_date }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                books: []
            }
        },
        created() {
            this.axios
                .get('/api/books')
                .then(response => {
                    this.books = response.data;
                });
        }
    }
</script>