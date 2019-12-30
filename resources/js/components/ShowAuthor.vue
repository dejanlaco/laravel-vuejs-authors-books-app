<template>
    <div class="container mt-4">

        <h3>Author details:</h3>

        <table class="table table-sm mt-4">
          <tr>
            <th>Name:</th>
            <td>{{ author.name }}</td>
          </tr>
          <tr>
            <th>Age:</th>
            <td>{{ author.age }}</td>
          </tr>
          <tr>
            <th>Address:</th>
            <td>{{ author.address }}</td>
          </tr>
        </table>

        <h3 class="mt-5">All Books from this author:</h3>

        <table class="table table-sm mt-4">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Book name</th>
                    <th class="text-right">Release date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in author.books" :key="book.id">
                    <td>{{ book.id }}</td>
                    <td>{{ book.name }}</td>
                    <td class="text-right">{{ book.release_date }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                author: []
            }
        },
        created() {
            this.axios
                .get(`/api/author/${this.$route.params.id}`)
                .then(response => {
                    this.author = response.data;
                });
        }
    }
</script>