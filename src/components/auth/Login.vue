<template>
<div class="login">
    <b-form  method="POST" @submit.prevent="login">
        <b-form-group id="exampleInputGroup1">
            <b-form-input v-model="password" id="exampleInput1" type="email" required placeholder="Enter email">
            </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2">
            <b-form-input v-model="email" id="exampleInput2" type="password" required placeholder="Enter password">
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">Submit</b-button>
    </b-form>
</div>
</template>

<script>
import { LOGIN_MUTATION } from "@/graphql";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$apollo
        .mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          localStorage.setItem("jwt-token", response.data.login.token);
          this.$router.replace("/");
        });
    }
  }
};
</script>
