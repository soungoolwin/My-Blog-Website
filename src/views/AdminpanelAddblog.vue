<template>
<div v-if="modal && !keeplogin">
  <AuthcheckModal @modalClose="modalClose" @checkkeeplogin="checkkeeplogin"/>
</div>
  <div class="container">
    <div class="row col-md-10 offset-md-1">
        <div class="adminpanelnav">
          <ul>
            <li :class="{disable:modal && !keeplogin}"><router-link :to="{name:'Adminpanel-Addblog'}"  class="adminnav">Add-Blog</router-link></li>
            <li :class="{disable:modal && !keeplogin}"><router-link :to="{name:'Adminpanel-Editblog'}" class="adminnav">Edit-Blog</router-link></li>
          </ul>
        </div>

      <form class="formcss" @submit.prevent="uploadblog">
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
        <button class="btn btn-primary button">Upload Blog</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
import AuthcheckModal from '../components/AuthcheckModal.vue'
export default {
  components:{AuthcheckModal},
  setup(){
    let heading = ref("");
    let Blog = ref("");
    let imageUrl = ref("");
    let blogId = ref("");
    let keeplogin = ref(false)

    // for modal

    let modal = ref(true)

    let checkkeeplogin = (alwayslogin)=>{
      keeplogin.value = alwayslogin
    }


    let router = useRouter()
    let uploadblog = async()=>{
      let res = await fetch('http://localhost:3000/blogs',{
        method:"POST",
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
        router.push({name:"Blogs"})
      }
    }
    let modalClose = ()=>{
      modal.value = false
    }

    return {uploadblog,heading,Blog,imageUrl,blogId ,modal, modalClose ,keeplogin, checkkeeplogin}
  }
}
</script>

<style scoped>
/* for add blog form */
.formcss{
  margin-bottom: 30%;
}

/* for nav */
.adminpanelnav{
  margin-top: 14%;
  margin-bottom: 20px;
}
.adminpanelnav ul{
  margin-left: 50%;
  transform: translateX(-32%);
}
.adminpanelnav li{
  display: block;
 float: left;
 margin-left: 10px;
}
.adminpanelnav .router-link-active {
  color: #A16BED;
}
.adminnav:hover{
  color: #A16BED;
}
.adminnav{
  color: black;
  text-decoration: none;
}
.button {
  margin-top: 20px;

}
.disable{
  pointer-events: none;
}

.text-area {
  height: 250px;
}
</style>