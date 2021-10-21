<template>
<div>
      <div class="container">
        <div class="row col-md-10 offset-md-1 image">
          <img :src="blogdetail.image" alt="network error">
        </div>

        <div class="row col-md-10 offset-md-1 heading">
          <h1>{{blogdetail.heading}}</h1>
        </div>

        <div class="row col-md-10 offset-md-1 article">
          <p>{{blogdetail.article}}</p>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getData from "../composables/getData";
export default {
props:['id'],
setup(props){
    let routeid = ref(props.id);
    let blogdetail = ref([]);
    let api = ref("http://localhost:3000/blogs/");
  
    let { error, fetchData } = getData();

    let load = async () => {
      let res = await fetchData(api.value+routeid.value);
      if (res) {
        let data = await res.json();
        blogdetail.value = data;
      } else {
        err.value = error;
        console.log(err.value);
      }
    };
    load();
    

    return {routeid,blogdetail}
}
}
</script>

<style scoped>
.image{
  width: 250px;
  height: 200px;
  margin: auto;
  margin-top: 100px;
}
.heading{
  margin-top: 50px;
}
.article{
  margin-top: 30px;
  font-size: 20px;
  line-height:50px;
  margin-bottom: 70px;
}
</style>