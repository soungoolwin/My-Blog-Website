<template>
  <div class="backdrop">
      <div class="modal1">
          <h4>Login</h4>
          <div>
            <form class="formcss" @submit.prevent="closeModal">
                <div class="form-group">
                     <label>Email</label>
                    <input type="text" class="form-control" placeholder="Enter admin email" v-model="email">
                </div>
        
                <div class="form-group">
                    <label>password</label>
                     <input type="password" class="form-control" placeholder="Enter admin password" v-model="password">
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" v-model="keeplogin">
                    <label class="form-check-label" for="flexCheckIndeterminate">
                        Keep Me Login
                    </label>
                </div>
                    <button class="btn btn-primary button" @click="updatekeeplogin">Login</button>
            </form>
          </div>

      </div> 
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getData from '../composables/getData'
import { onMounted } from '@vue/runtime-core'
export default {
    setup(props,{emit}){
        // for user login input
        let email = ref("")
        let password = ref("")
        let keeplogin = ref()
        let api = ref("http://localhost:3000/admins")
        let err = ref("")

        // get auth access from database
        let admins = ref([])
        let adminemail = ref("")
        let adminpassword = ref("")
        let adminkeeplogin = ref()
        let {error, fetchData, article} = getData();
        onMounted(async()=>{
            let res = await fetchData(api.value)
            if(res){
                let data = await res.json()
                admins.value = data
                admins.value.forEach((each)=>{
                    adminemail.value = each.email
                    adminpassword.value = each.password
                    adminkeeplogin.value = each.keeplogin
                    
                    // for keeplogin
                    emit('checkkeeplogin',adminkeeplogin.value)
                })
            }else{
                err.value = error
            }
        })

        // for keeplogin
            let updatekeeplogin = async()=>{
      let res = await fetch('http://localhost:3000/admins/1',{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          keeplogin:keeplogin.value,

        })
      })
      if(res){

      }
    }

        // close modal
        let closeModal = ()=>{
            if(email.value === adminemail.value && password.value === adminpassword.value){
                emit("modalClose")
            }else {
                console.log(keeplogin.value)
            }
        }
        return {email,password,keeplogin,closeModal, updatekeeplogin}
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