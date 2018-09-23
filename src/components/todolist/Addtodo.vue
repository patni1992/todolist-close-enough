<template>
<div class="add-todo">
    <h1>Add-todo {{msg}}</h1>
    <b-form>
        <b-form-group id="exampleInputGroup1">
            <b-form-input id="exampleInput1" type="text" required placeholder="Enter todo">
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">Submit</b-button>
    </b-form>
</div>
</template>

<script>
export default {
  name: "AddTodo",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
</style>
