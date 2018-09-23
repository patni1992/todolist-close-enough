<template>
<div class="login">
    <b-form>
        <b-form-group id="exampleInputGroup1">
            <b-form-input id="exampleInput1" type="email" required placeholder="Enter email">
            </b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2">
            <b-form-input id="exampleInput2" type="password" required placeholder="Enter password">
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">Submit</b-button>
    </b-form>
</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {}
};
</script>
