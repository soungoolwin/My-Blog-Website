<template>
  <div class="feedbackform">
    <div class="container">
      <div class="row col-md-10 offset md-1 feedbackheading">
        <h3>Give <span>Feedbacks</span></h3>
      </div>
      <div class="row col-md-8 offset-md-2">
        <form ref="form" @submit.prevent="sendEmail" class="form">
          <label>Name</label>
          <input type="text" name="user_name" v-model="name" placeholder="Your Name"/>
          <label>Email</label>
          <input type="email" name="user_email" v-model="email" placeholder="Your Email"/>
          <label>Message</label>
          <textarea name="message" v-model="message" placeholder="Type your feedbacks"></textarea>
          <input type="submit" value="Send" class="button"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { ref } from "@vue/reactivity";

export default {
  setup() {
    let form = ref("");
    let name = ref("");
    let email = ref("");
    let message = ref("");

    let sendEmail = (e) => {
      emailjs
        .sendForm(
          "service_fgum35n",
          "template_ac30mqs",
          e.target,
          "user_MF874xgYreELC8UCLaisI",
          {
            name: name.value,
            email: email.value,
            message: message.value,
          }
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };
    return { sendEmail, form, name, email, message };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.feedbackform {
  background-color: #f2f2f2;
}
.feedbackheading{
  margin: 0px auto;
  font-family: 'Courier New', Courier, monospace;
}
.feedbackheading span {
  color: #A16BED; 
}
.form{
  font-family: 'Courier New', Courier, monospace;
}
.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 5px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
.button {
  margin-top: 7px;
}
</style>