<template>

<div class="container searchbar">
  <div class="row col-md-10 offset-md-1">
    <div class="input-group">
      <input type="search" class="form-control rounded" placeholder="You can search blogs by heading" aria-label="Search"
      aria-describedby="search-addon" v-model="searchkeyword" @keyup="changeUppercase"/>
    </div>
  </div>
</div>

  <div class="container" v-if="blogs">
    <div v-for="blog in filterSearch" :key="blog.id" class="articleshadow">
        <SingleBlog :blog="blog"></SingleBlog>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import getData from "../composables/getData";
import SingleBlog from '../components/SingleBlog'
export default {
   components:{ SingleBlog },
  setup() {
    let blogs = ref([]);
    let err = ref("");
    let api = ref("http://localhost:3000/blogs/")

    // for search function
    let searchkeyword = ref("")
    let searchkeywordUpper = ref("")
    let changeUppercase = ()=>{
      searchkeywordUpper.value = searchkeyword.value.toUpperCase();
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

    // for search funtion works
    let filterSearch = computed(()=>{
      return blogs.value.filter((blog)=>{
        return blog.heading.toUpperCase().includes(searchkeywordUpper.value)
      })
    })
    return { blogs, searchkeyword, filterSearch, changeUppercase};
  },
};
</script>

<style scoped>
.articleimage {
  max-width: 100%;
  height: 145px;
}
.imageresponse {
  text-align: center;
}
.articleshadow {
  box-shadow: 5px 2px 18px #888888;
  border-radius: 10px;
}
.eacharticle{
  padding: 35px 0px;
    margin-top: 55px;
  margin-bottom: 55px;
}
.searchbar{
  margin:60px auto;
  z-index: 0;
}
</style>