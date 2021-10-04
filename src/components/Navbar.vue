<template>
  <div class="container-fluid navbarstyle navcolor py-4">
    <div class="container">
      <div class="row col-md-10 offset-md-1">
        <div class="flex-container">
          <div>Soung Oo <span>Lwin</span></div>
          <div>
            <ul class="navs">
              <li>Home</li>
              <li>Blogs</li>
              <li>Admin-Panel</li>
              <li>Search</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  props:["valueofmodal"],
  setup(props){
    console.log(props.valueofmodal)
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
 .navs li {
     float: left;
     margin-right: 12px;
 }
.navs li:hover {
    color: #A16BED;
    cursor: pointer;
}
</style>