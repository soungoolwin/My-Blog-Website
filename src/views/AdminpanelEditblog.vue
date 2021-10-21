<template>
<div v-if="modal && !keeplogin">
  <AuthcheckModal @modalClose="modalClose" @checkkeeplogin="checkkeeplogin"/>
</div>

  <div class="container" v-if="blogs">
    <div class="row col-md-10 offset-md-1">
      <div class="adminpanelnav">
          <ul>
            <li :class="{disable:modal && !keeplogin}"><router-link :to="{name:'Adminpanel-Addblog'}" class="adminnav">Add-Blog</router-link></li>
            <li :class="{disable:modal && !keeplogin}"><router-link :to="{name:'Adminpanel-Editblog'}" class="adminnav">Edit-Blog</router-link></li>
          </ul>
      </div>
    </div>

    <div v-for="blog in blogs" :key="blog.id" class="articleshadow">
        <Singleblogforedit :blog="blog" @delete="deleteBlog"></Singleblogforedit>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getData from "../composables/getData";
import Singleblogforedit from '../components/Singleblogforedit'
import AuthcheckModal from '../components/AuthcheckModal.vue'
export default {
  components:{ Singleblogforedit, AuthcheckModal },
  setup() {
    let blogs = ref([]);
    let err = ref("");
    let api = ref("http://localhost:3000/blogs")
    let keeplogin = ref(false)


    // for modal
    let modal = ref(true);

    let checkkeeplogin = (alwayslogin)=>{
      keeplogin.value = alwayslogin
    }

        let modalClose = ()=>{
      modal.value = false
    }

    let { error, fetchData } = getData();
    let load = async () => {
      let res = await fetchData(api.value);
      if (res) {
        let data = await res.json();
        blogs.value = data;
      } else {
        err.value = error;
        console.log(err.value);
      }
    };
    load();

    let deleteBlog = (id)=>{
      blogs.value = blogs.value.filter((blog)=>{
        return blog.id != id
      })
    }
    return { blogs, deleteBlog, modal, checkkeeplogin, modalClose, keeplogin };
  },
};
</script>

<style scoped>

.articleshadow {
  box-shadow: 5px 2px 18px #888888;
  border-radius: 10px;
}

.adminpanelnav{
  margin-top: 14%;
  margin-bottom: 20px;
  z-index: 0;
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
.disable{
  pointer-events: none;
}
</style>