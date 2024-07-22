<!-- JS -->
<script>
export default {
    name: "AppAbout",
    data() {
        return {
           
        }

    }

}
</script>


<!-- HTML -->
<template>
<h1>About Me</h1>

<div class="card">
    <col-5>
    <p>
        Salve a tutti, mi presento, sono Matteo Calonaci.
        Sono nato l'08/10/1994 sono di Firenze e sono colui che ha realizzato questo progetto.
        Sono un appassionato di tecnologia e di informatica, ho deciso
        di realizzare questo sito per poter mostrare le mie competenze e le mie conoscenze
        in ambito tecnologico apprese durante questi mesi durante il corso di Boolean.
    </p>
</col-5>
<col-6 class="d-flex justify-content-center align-items-center m-0">
<div class="card-img">
<img src="../assets/kira_ed_io.jpg" alt="">
</div>
</col-6>
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

.card-img{
    width: 20rem;
    height: 20rem;
    object-fit: cover;
}

img{
    border-radius: 100%;
    width: 100%;

}

</style>
