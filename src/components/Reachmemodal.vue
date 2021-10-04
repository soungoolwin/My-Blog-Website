<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal1">
          <h4>Contact Me</h4>
          <div class="icon">
            <a href="https://www.facebook.com/soung.lwin.75" target="_blank"><fa :icon="['fab', 'facebook']" class="reachmeicon"/></a>
            <a href="https://www.instagram.com/soungoolwin/" target="_blank"><fa :icon="['fab', 'instagram']" class="reachmeicon instagram"/></a>
           <a href="https://www.youtube.com/channel/UCOMkrfU_U63W2qJ2WXz8beA" target="_blank"><fa :icon="['fab', 'youtube']" class="reachmeicon youtube"/></a>
           <a href="https://twitter.com/soung_lwin" target="_blank"><fa :icon="['fab', 'twitter']" class="reachmeicon twitter"/></a>
           <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9tZWRpYS5yc3MuY29tL3NvdW5nb29sd2luL2ZlZWQueG1s?fbclid=IwAR1Pfikq4LSYduknSmhnF6zzKZq2kSI5bJxtCzwsRC6M-EKySoGkn7A3234" target="_blank"><fa :icon="['fab', 'spotify']" class="reachmeicon spotify"/></a>
          </div>

      </div> 
  </div>
</template>

<script>
export default {
    setup(props,{emit}){
        let closeModal = ()=>{
            emit('closeModal')
        }
        return {closeModal}
    }
}
</script>

<style>
.backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0%;
}
.modal1 {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
    position: relative;
    top: 30%;
}
.modal1 h4{
    text-align: center;
    margin-bottom: 20px;
}
.icon{
    text-align: center;
}
.reachmeicon{
    margin-right: 20px;
    font-size: 40px;
}
.instagram {
    color: #D7407D;
}
.youtube {
    color: #FE2200;
}
.twitter{
    color: #5DA9DD;
}
.spotify{
    color: #1DD05D;
}
</style>