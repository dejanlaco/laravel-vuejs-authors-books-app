<template>
    <div>
        <h3>Add Book</h3>

        <form @submit.prevent="addBook">

            <input type="text" v-model="fields.author_name">
            <input type="text" v-model="fields.author_age">
            <input type="text" v-model="fields.author_address">

            <input type="text" v-model="fields.book_name">
            <input type="text" v-model="fields.book_release_date">

            <button type="submit">Add Book</button>

        </form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                fields: {}
            }
        },
        methods: {
            addBook() {

                this.axios
                    .post('/api/book/add', this.fields)
                    .then(response => (
                        this.$router.push({name: 'home'})
                        // console.log(response.data)
                    ))
                    .catch(error => {
                        console.log(error.response);
                    })
                    .finally(() => this.loading = false)
            }
        }
    }
</script>