<template>
<Aboutme @openmodal="openmodal"/>
<Reachmemodal v-if="modal" @closeModal="closeModal"/>
<Givefeedback></Givefeedback>
</template>

<script>
import { ref } from '@vue/reactivity';
import Aboutme from "../components/Aboutme.vue"
import Reachmemodal from "../components/Reachmemodal.vue"
import Givefeedback from '../components/Givefeedback.vue'
export default {
  name: "Home",
  components: {Aboutme, Reachmemodal, Givefeedback},
  setup(){
    let modal= ref(false);
    let openmodal = ()=>{
      modal.value =!modal.value
    }

    let closeModal = ()=>{
      modal.value = !modal.value
    }
    return {modal,openmodal,closeModal}
  }
};
</script>
