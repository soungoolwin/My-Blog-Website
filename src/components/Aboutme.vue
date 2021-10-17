<template>
  <div class="container">
    <!-- for profilepic -->
    <div class="row col-md-10 offset-md-1">
      <div>
        <img src="../assets/Me.jpg" class="profilepic mx-auto d-block" />
      </div>
    </div>
    <!-- about site -->
    <div class="row col-md-10 offset-md-1">
      <div class="slogan">
        <p>Welcome to my <span>Personal Blog</span></p>
        <p>Enjoy <span>my blogs</span></p>
      </div>
    </div>
    <!-- about me -->
    <div class="row col-md-10 offset-md-1">
      <div class="aboutme">
          <h3>About me</h3>
          <p>Hello! My name is <span>Soung Oo Lwin</span>.I am now studying <span>web developing</span>.</p>
          <p>I learned Web Development since 2020. I am now learing JavaScript programing language at the moment.</p>
          <p>I am now studying in <span>Computer University(Mandalay)</span>.</p>
          <p>I want to be a <span>full stack Web Developer</span> and still studying.</p>
      </div>
      <div class="reachme">
        <button class="btn btn-secondary" @click="openmodal">Reach Me</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(props, {emit}){
    let openmodal = ()=>{
      emit('openmodal')
    }
    return {openmodal}
  }
};
</script>

<style scoped>
/* for profile picture */
.profilepic{
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin-top: 50px;
}

/* for slogan */
.slogan p {
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 20px;
    font-size: 2rem;
}
.slogan p:first-child{
    margin-top: 40px;
}
.slogan span {
    color: #A16BED;
}
.aboutme {
  text-align: center;
  margin-top: 25px;
  font-family: 'Courier New', Courier, monospace;
}
.aboutme h3{
  color: #212529;
  margin-bottom: 40px;
}
.aboutme p {
  font-size: 20px;
}
.aboutme span {
  font-weight: bold;
  font-style: italic;
}
.reachme {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 50px;
}
</style>