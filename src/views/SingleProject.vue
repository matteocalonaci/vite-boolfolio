<!-- JS -->
<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            base_url: 'http://localhost:8000',
            projects: null
        }
    },
    mounted() {
        console.log(this.$route.params.id);
        axios
        .get(`${this.base_url}/api/projects/ ${this.$route.params.id}`)
        .then(response => {
            if(response.data.success){
            this.projects = response.data.projects
        }else{
            this.$router.push({name:'Not_found'});
        }
        })
    }

}
</script>


<!-- HTML -->
<template>
    <div v-if="projects">
    <h1 class="p-4">Single Project</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div class="col">
    <div class="container">
                <div class="card h-100 ">
                    <div class="card-body">
                      
                        <h5 class="card-title pb-5">{{projects.name }}</h5>

                        <template v-if="!projects.thumb.startsWith('http')">
                <img class="" :src="base_url + '/storage/' + projects.thumb" alt="" loading="lazy">
              </template>

<template v-else>
                <img class="" :src="projects.thumb" alt="" loading="lazy">
              </template>

<p class="card-text text-start pt-3"><b>Description</b>: {{ projects.description }}</p>
<p class="card-text text-start p-1"><b>Type</b>: {{ projects.type_id }}</p>

                        
                    </div>
                </div>
            </div>
        </div>
    </div>




    </div>
</template>


<!-- CSS -->
<style scoped>
.row{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}
img {
  width: 100%;
}</style>
