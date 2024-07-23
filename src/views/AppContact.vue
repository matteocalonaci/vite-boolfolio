<!-- JS -->
<script>
export default {
    name: "AppContact",
    data() {
        return {

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
                where they are on your site.</p>
        </div>
        <div class="col-6 p-4">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId" placeholder="">
        
                    <small id="nameHelper" class="form-text text-muted">Write your name</small>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="helpId" placeholder="">
        
                    <small id="emailHelper" class="form-text text-muted">Write your email</small>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea type="text" class="form-control" name="message" id="message" rows="3" placeholder="">
                        
                    </textarea>
        
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
