<template>
<Aboutme @openmodal="openmodal"/>
<Reachmemodal v-if="modal" @closeModal="closeModal"/>
</template>

<script>
import { ref } from '@vue/reactivity';
import Aboutme from "../components/Aboutme.vue"
import Reachmemodal from "../components/Reachmemodal.vue"
import { onUpdated } from '@vue/runtime-core';
export default {
  name: "Home",
  components: {Aboutme, Reachmemodal},
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
