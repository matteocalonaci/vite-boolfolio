<!-- JS -->
<script>
import axios from 'axios';
export default {
    name: "AppContact",
    data() {
        return {
            // base_url: 'http://localhost:8000',
            name: '',
            email: '',
            message: '',
            errors: {},
            success: false
        }
    },
    methods: {
        sendMessage() {

            //preparare la richiesta
            const data =
            {
                name: this.name,
                email: this.email,
                message: this.message
            }
            console.log(data);

            //chiamata axios
            axios
                .post('http://localhost:8000/api/lead', data)
                .then(response => {
                    console.log(response);

                    if (response.data.success) {
                        //mostra un messaggio di success
                        this.success = true;
                        this.errors = null;

                        this.name = '';
                        this.email = '';
                        this.message = '';

                    } else {
                        //mostra un messaggio di errore di validazione
                        this.errors = false
                        this.errors = response.data.errors
                    }

                })

            //gestire il response
        }

    }

}
</script>


<!-- HTML -->
<template>
    <div class="card mt-5">
        <div class="col-6 p-4">
            <h2>Contact me</h2>
            <p>It’s important to note that the contact page is not the only place where you
                should include contact information. You should also include a contact page on your website’s footer, as
                well as on your About page. This way, visitors can easily find your contact information no matter
                where they are on your site.
            </p>
            <template v-if="success">
                <div class="alert alert-success" role="alert">
                    <b>Messaggio inviato</b>
                </div>
            </template>

        </div>

        <div class="col-6 p-4">
            <form @submit.prevent="sendMessage()">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.name}" name="name" id="name" aria-describedby="helpId"
                        placeholder="" v-model="name">

                        <p class="text-danger" v-for="(error, index) in errors.name" :key="`name-error-${index}`">
                            {{ error }}
                        </p>

                    <small id="nameHelper" class="form-text text-muted">Write your name</small>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" class="form-control" :class="{'is-invalid': errors.email}" name="email" id="email" aria-describedby="emailHelp"
                        placeholder="" v-model="email">

                        <p class="text-danger" v-for="(error, index) in errors.email" :key="`email-error-${index}`">
                            {{ error }}
                        </p>



                    <small id="emailHelper" class="form-text text-muted">Write your email</small>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea type="text" class="form-control" :class="{'is-invalid': errors.message}" name="message" id="message" rows="3" placeholder=""
                        v-model="message">
                    </textarea>

                    <p class="text-danger" v-for="(error, index) in errors.message" :key="`message-error-${index}`">
                            {{ error }}
                        </p>

                    <small id="messageHelper" class="form-text text-muted">Write your email text</small>
                </div>
                <button type="submit" class="btn btn-primary">
                    SEND
                </button>
            </form>
        </div>

    </div>


</template>


<!-- CSS -->
<style scoped>
.card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
