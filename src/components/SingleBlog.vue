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

        </div>
      </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    props:["blog"],
setup(props,{emit}){
    let blog = ref(props.blog)
    return{blog}
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
.heading {
  margin-bottom: 15px;
  padding: 0px 20px;
}
.article{
  padding-right: 20px;
  padding-left: 20px;
}
</style>