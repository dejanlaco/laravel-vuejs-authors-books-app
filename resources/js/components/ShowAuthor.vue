<template>
    <div class="container mt-3">

        <table>
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

        <h3>All Books from this author</h3>

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
                <tr>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                    <td>d</td>
                </tr>
            </tbody>
        </table>

        {{ author.books }}

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