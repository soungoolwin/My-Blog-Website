<template>
        <div class="eacharticle">
        <div class="row col-md-10 offset-md-1">
          <div class="col-12 col-md-8 heading">
            <h2>{{ blog.heading }}</h2>
          </div>
          <div class="col-12 col-md-4 imageresponse">
            
          </div>
        </div>
        <div class="row col-md-10 offset-md-1">
          <div class="col-12 col-md-8 article">
            <p>{{ blog.article.slice(0,400) }}...<span><router-link :to="{name:'Blogdetail',params:{id:blog.id}}">Read More</router-link></span></p>
          </div>
          <div class="col-12 col-md-4 imageresponse">
            <img :src="blog.image" alt="Network error" class="articleimage img-fluid"/>
          </div>
        </div>

        <div class="row col-md-10-offset-md-1">
          <div class="col-12 editblog">
            <router-link :to="{name:'BlogEdit',params:{id:blog.id}}" class="editrouterlink btn btn-primary">Edit</router-link>
            <button class="btn btn-primary" @click="deleteBlog">Delete</button>
          </div>
        </div>
      </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    props:["blog"],
setup(props,{emit}){
    let blog = ref(props.blog)
    let api = ref("http://localhost:3000/blogs")
    let deleteBlog = ()=>{
     fetch(api.value+'/'+blog.value.id,{method:"DELETE"})
     .then(()=>{
       emit("delete",blog.value.id)
     })
     .catch((err)=>{
       console.log(err)
     })
    }

    return{blog, deleteBlog}
}
}
</script>

<style scoped>
.articleimage {
  max-width: 100%;
  height: 145px;
}
.article{
  padding: 0px 20px;
}
.imageresponse {
  text-align: center;
}
.eacharticle{
  padding: 35px 0px;
  padding-left: 10px;
    margin-top: 55px;
  margin-bottom: 55px;
}
.editblog{
  text-align: center;
  margin-top: 30px;
}
.editblog button {
  margin-right: 5px;
}
.heading{
  margin-bottom: 15px;
  padding: 0px 20px;
}
.editrouterlink{
  text-decoration: none;
  margin-right: 20px;
}
</style>