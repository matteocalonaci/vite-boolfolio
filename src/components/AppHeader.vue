<!-- JS -->
<script>
export default {
    name: "AppHeader",
    data() {
        return {
           
        }

    }

}
</script>


<!-- HTML -->
<template>
    <header class="p-1">

        <div class="container row d-flex align-items-center">
            <div class="row">
                <div class="col-1">
                    <div class="img">
                        <img src="../assets/mc.jpg" alt="">
                    </div>
                </div>
                <div class="col-2"></div>
                <div class="col-9 d-flex justify-content-end">
                    <div class="nav">
                          <router-link :to="{ name:'AppHome'}">Home</router-link>
                          <router-link :to="{ name:'ProjectCards'}">Projects</router-link>
                          <router-link :to="{ name:'about'}">About</router-link>
                          <router-link :to="{ name:'contact'}">Contact</router-link>
                      
                    </div>
                </div>
                
            </div>
        </div>


    </header>

</template>


<!-- CSS -->
<style scoped>
header {
    height: 5.6rem;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.5rem;
}

.logo {
    margin-right: 15rem;
}

img {
    height: 5rem;
    width: 5rem;
    padding: 1remn;
}

a {
    padding: 1.8rem 1rem;
    font-size: 0.8rem;
    text-decoration: none;
    color: gray;

}

a:hover {

    border-bottom: 0.3rem solid rgb(2, 130, 249);
    color: rgb(2, 130, 249);

}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}
</style>
