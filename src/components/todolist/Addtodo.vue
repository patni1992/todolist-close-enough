<template>
<div class="add-todo">
    <h1>Add todo</h1>
    <b-form @submit.prevent="addTodo">
        <b-form-group id="exampleInputGroup1">
            <b-form-input id="exampleInput1" type="text"   v-model="title"  required placeholder="Enter todo">
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="success">Submit</b-button>
    </b-form>
</div>
</template>

<script>
import { ADD_TODO_MUTATION, ALL_TODOS_QUERY } from "@/graphql";
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo() {
      this.$apollo.mutate({
        mutation: ADD_TODO_MUTATION,
        variables: {
          title: this.title
        },
        update: (store, { data: { createTodo } }) => {
          const data = store.readQuery({ query: ALL_TODOS_QUERY });
          data.allTodos.unshift(createTodo);
          store.writeQuery({ query: ALL_TODOS_QUERY, data });
        }
      });
    }
  }
};
</script>
