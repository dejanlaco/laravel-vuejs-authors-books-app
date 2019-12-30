<template>
    <div class="container mt-4">
        <h3>Add Book</h3>

        <p v-if="errors" class="alert alert-danger">
            <b>Please correct the following errors:</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>

        <form @submit.prevent="addBook" class="mt-4">

            <div class="form-row">
                <div class="col-6 mb-3">
                    <label for="author_name">Author name</label>
                    <input type="text" class="form-control" id="author_name" v-model="fields.author_name" placeholder="Name">
                </div>

                <div class="col-2 mb-3">
                    <label for="author_age">Author age</label>
                    <input type="text" class="form-control" id="author_age" v-model="fields.author_age" placeholder="Age">
                </div>

                <div class="col-4 mb-3">
                    <label for="author_address">Author address</label>
                    <input type="text" class="form-control" id="author_address" v-model="fields.author_address" placeholder="Address">
                </div>
            </div>

            <div class="form-row">
                <div class="col-6 mb-3">
                    <label for="book_name">Book name</label>
                    <input type="text" class="form-control" id="book_name" v-model="fields.book_name" placeholder="Book name">
                </div>

                <div class="col-6 mb-3">
                    <label for="book_release_date">Book release date</label>
                    <datepicker v-model="fields.book_release_date" class="form-control" placeholder="Release date"></datepicker>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Add Book</button>

        </form>

    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'

    export default {
        data() {
            return {
                fields: {},
                errors: false
            }
        },
        methods: {
            addBook() {

                if( this.isNotValid() )
                    return false;

                this.axios
                    .post('/api/book/add', this.fields)
                    .then(response => (
                        this.$router.push({name: 'home'})
                        // console.log(response.data)
                    ))
                    .catch(error => {
                        if(error.response.status==422){
                            this.errors = error.response.data.errors
                        }
                        console.log(error.response);
                    })
                    .finally(() => this.loading = false)
            },

            isNotValid() {
                this.errors = [];

                if( !this.fields.author_name )
                    this.errors.push('The author name field is required.');

                if( !this.fields.author_age || isNaN(this.fields.author_age) )
                    this.errors.push('The author age must be a number.');

                if( !this.fields.author_address )
                    this.errors.push('The author address field is required.');

                if( !this.fields.book_name )
                    this.errors.push('The book name field is required.');

                if( !this.fields.book_release_date )
                    this.errors.push('The book release date field is required.');

                if( this.errors.length )
                    return true;
            }
        },
        components: {
            Datepicker
        }
    }
</script>