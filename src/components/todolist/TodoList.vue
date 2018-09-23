<template>
<div class="todos">
    <b-container fluid class="bv-example-row">
        <b-row>
            <b-col class="mb-4" md="7">
                <h1>Todolist</h1>
                <b-list-group class="todos__list">
                    <todo-item :key="todo.id" v-for="todo in allTodos" :todo="todo" />
                </b-list-group>
            </b-col>
            <b-col class="mb-4" md="4" offset-md="1">
                <add-todo />
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";
import { ALL_TODOS_QUERY } from "@/graphql";

export default {
  name: "Todolist",
  data() {
    return {
      allTodos: []
    };
  },
  apollo: {
    allTodos: {
      query: ALL_TODOS_QUERY
    }
  },
  components: {
    TodoItem,
    AddTodo
  }
};
</script>

<style lang="scss" scoped>
.todos {
  margin-bottom: 20px;
}
.todos__list {
  max-height: 400px;
  overflow: auto;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
