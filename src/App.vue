
<script>
import AppHeader from './components/AppHeader.vue';
import ProjectCards from './views/ProjectCards.vue';

export default {
  name: 'AppHom',

  components:{
    AppHeader,
    ProjectCards
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
<router-view/>

</template>

<style scoped> 

</style>
