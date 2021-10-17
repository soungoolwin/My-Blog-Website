<template>
  <div class="container-fluid navbarstyle navcolor py-4 pcresponsive">
    <div class="container">
      <div class="row col-md-10 offset-md-1">
        <div class="flex-container">
          <div>Soung Oo <span>Lwin</span></div>
          <div>
            <ul class="navs">
              <li class="pcnav" @click="updatekeeplogin"><router-link :to="{name:'Home'}" class="routerlinkstyle">Home</router-link></li>
              <li @click="mobilenavoff;updatekeeplogin" class="pcnav"><router-link :to="{name:'Blogs'}" class="routerlinkstyle">Blogs</router-link></li>
              <li class="pcnav"><router-link :to="{name:'Adminpanel-Addblog'}" class="routerlinkstyle">Admin-Panel</router-link></li>
              <li class="pcnav" @click="updatekeeplogin"><router-link :to="{name:'Search'}" class="routerlinkstyle">Search</router-link></li>
              <li class="mobilenav" @click="mobilenavtoggle">Menu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid navbarstyle navcolor py-4 mobileresponsive" v-if="mobileresponsive">
    <div class="container">
      <div class="row col-md-10 offset-md-1">
        <ul>
              <li @click="mobilenavoff;updatekeeplogin"><router-link :to="{name:'Home'}" class="routerlinkstyle">Home</router-link></li>
              <li @click="mobilenavoff;updatekeeplogin"><router-link :to="{name:'Blogs'}" class="routerlinkstyle">Blogs</router-link></li>
              <li @click="mobilenavoff;updatekeeplogin"><router-link :to="{name:'Adminpanel-Addblog'}" class="routerlinkstyle">Admin-Panel</router-link></li>
              <li @click="mobilenavoff;updatekeeplogin"><router-link :to="{name:'Search'}" class="routerlinkstyle">Search</router-link></li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity';
import {useRouter} from 'vue-router'
export default {
  setup(){
    let router = useRouter()

    // for mobileresponsive
    let mobileresponsive = ref(false);
    let mobilenavtoggle = ()=>{
      mobileresponsive.value = !mobileresponsive.value;
      // auto scroll
      window.scrollTo(0, 0)
    }

    let mobilenavoff = ()=>{
      mobileresponsive.value = false
    }


        let updatekeeplogin = async()=>{
      let res = await fetch('http://localhost:3000/admins/1',{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          keeplogin:false,

        })
      })
      if(res){

      }
    }
    return {mobilenavoff,mobileresponsive,mobilenavtoggle,updatekeeplogin}
  }
};
</script>

<style scoped>
/* navbar style */
.navbarstyle{
    border-bottom: 0.05px solid;
    box-shadow: 5px 2px 18px #888888;
    position: sticky;
    top: 0px;
}
.navcolor {
  background-color: #FFFFFF;
}
.navbarstyle span {
    color: #A16BED;
}
/* navbar style flex */
.flex-container {
    display: flex;
    justify-content: space-between;
}
.flex-container > div {
    text-align: center;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
 }
 /* nav list style */
 .navs {
     list-style-type: none;
 }
 /* dynamic current route style of nav */
 .navs .router-link-active {
   color: #A16BED;
   text-decoration: none;
 }
 .routerlinkstyle {
   color: black;
   text-decoration: none;
 }
 /*---------------------*/
 .navs li {
     float: left;
     margin-right: 12px;
 }
.navs li:hover {
    color: #A16BED;
    cursor: pointer;
}
.pcnav {
  display: block;
}
.mobilenav {
  display: none;
}

/* for mobile responsive */
@media only screen and (max-width: 564px) {
  .pcnav {
    display: none;
  }
  .mobilenav{
    display: block;
  }
}

@media only screen and (min-width: 564px) {
.mobileresponsive{
  display: none;
}
}
.mobileresponsive li {
  list-style-type: none;
  text-align: center;
  margin-top: 10px;
  font-family: 'Courier New', Courier, monospace;
}
.mobileresponsive li:hover {
     color: #A16BED;
    cursor: pointer;
}
.mobileresponsive {
  position: static;
}

</style>