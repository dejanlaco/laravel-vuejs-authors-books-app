<template>
    <div class="container mt-4">
        <h3>All Books</h3>

        <table class="table table-sm mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Book name</th>
                    <th>Author</th>
                    <th>Release date</th>
                    <th class="text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id">
                    <td>{{ book.id }}</td>
                    <td>{{ book.name }}</td>
                    <td>{{ book.author.name }}</td>
                    <td>{{ book.release_date }}</td>
                    <td class="text-right"><button @click="deleteBook(book.id)" class="btn btn-sm btn-outline-danger">Delete</button></td>
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
        },
        methods: {
            deleteBook(id) {
                this.axios
                    .delete(`/api/book/delete/${id}`)
                    .then(response => {
                        let i = this.books.map(item => item.id).indexOf(id); // find index of your object
                        this.books.splice(i, 1)
                    });
            }
        }
    }
</script>