<script>
import axios from 'axios';
export default {
  name: 'App',

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
  <h1 class="p-4">Welcome</h1>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" v-for="project in projects.data">
        <div class="card h-100">
          <div class="card-body">
             <h5 class="card-title">{{ project.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
