<template>
        <div class="eacharticle">
        <div class="row col-md-10 offset-md-1">
          <div class="col-12 col-md-8">
            <h2>{{ blog.heading }}</h2>
          </div>
          <div class="col-12 col-md-4 imageresponse">
            
          </div>
        </div>
        <div class="row col-md-10 offset-md-1">
          <div class="col-12 col-md-8">
            <p>{{ blog.article }}</p>
          </div>
          <div class="col-12 col-md-4 imageresponse">
            <img :src="blog.image" alt="Network error" class="articleimage img-fluid"/>
          </div>
        </div>

        <div class="row col-md-10-offset-md-1">
          <div class="col-12 editblog">
            <button class="btn btn-primary">Edit</button>
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
.imageresponse {
  text-align: center;
}
.eacharticle{
  padding: 35px 0px;
    margin-top: 55px;
  margin-bottom: 55px;
}
.editblog{
  text-align: center;
}
.editblog button {
  margin-right: 5px;
}
</style>