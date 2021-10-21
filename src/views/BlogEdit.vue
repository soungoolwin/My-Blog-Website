<template>
    <div class="container editform">
    <div class="row col-md-10 offset-md-1">
      <form class="formcss" @submit.prevent="Editblog">
        <div class="form-group">
          <label>Heading</label>
          <input type="text" class="form-control" placeholder="Enter blog heading" v-model="heading">
        </div>
        <div class="form-group">
          <label>Blog</label>
          <textarea type="text" class="form-control text-area" placeholder="Enter Article" v-model="Blog"></textarea>
        </div>
        
        <div class="form-group">
          <label>Image Url</label>
          <input type="text" class="form-control" placeholder="Enter image URL" v-model="imageUrl">
        </div>
        <button class="btn btn-primary button">Edit Blog</button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import getData from "../composables/getData";
import {useRouter} from 'vue-router'
export default {
  props:['id'],
setup(props){
  let blog = ref([]);
  let heading = ref("")
  let Blog = ref("");
  let imageUrl = ref("")
  let api = ref("http://localhost:3000/blogs/")
  let router = useRouter()

  let { error, fetchData } = getData();
  onMounted(()=>{
        let load = async () => {
      let res = await fetchData(api.value+props.id);
      if (res) {
        let data = await res.json();
        blog.value = data;

        // two way data binding for edit
        heading.value = blog.value.heading;
        Blog.value = blog.value.article;
        imageUrl.value = blog.value.image

      } else {
        err.value = error;
        console.log(err.value);
      }
    };
    load();
  })

     let Editblog = async()=>{
      let res = await fetch(api.value+props.id,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          article:Blog.value,
          image:imageUrl.value,
          heading:heading.value,
        })
      })
      if(res){
        router.push({name:"Adminpanel-Editblog"})
      }
    }
  return{heading,Blog,imageUrl,blog, Editblog}
}
}
</script>

<style>
.text-area {
  height: 250px;
}
.editform{
margin-top: 10%;
}
.button{
  margin-top: 10px;
}
</style>