<template>
  <div class="container" v-if="blogs">
    <div v-for="blog in blogs" :key="blog.id" class="articleshadow">
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
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getData from "../composables/getData";
export default {
  setup() {
    let blogs = ref([]);
    let err = ref("");
    let api = ref("http://localhost:3000/blogs")

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
    return { blogs };
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
</style>