<script>
import axios from 'axios';
export default {
  name: 'ProjectCard',


  data() {
    return {
      base_url: 'http://localhost:8000',
      projects: ''
    }
  },


  mounted() {

    axios
      .get(`${this.base_url}/api/projects`)
      .then(response => {
        this.projects = response.data.projects;
        console.log(this.response);
      })
  }


};
</script>

<template>
  <h1 class="p-4">ProjectCard</h1>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" v-for="project in projects.data">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title pb-5">{{ project.name }}</h5>
            
            <template v-if="!project.thumb.startsWith('http')">
              <img class="" :src="base_url + '/storage/' + project.thumb" alt="" loading="lazy">
            </template>

            <template v-else>
              <img class="" :src="project.thumb" alt="" loading="lazy">
            </template>

            <p class="card-text text-start pt-3"><b>Description</b>: {{ project.description }}</p>
            <p class="card-text text-start p-1"><b>Type</b>: {{ project.type_id }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>



  

</template>

<style scoped>
img {
  width: 100%;
}
</style>
