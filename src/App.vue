<script>
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',

  components:{
    AppHeader,
    ProjectCard
  },

  data() {
    return {
   
    }
  },


  mounted() {

  
  }


};
</script>

<template>
<AppHeader/>
<ProjectCard/>
<router-view></router-view>

</template>

<style scoped>

</style>
