<template>
<div class="todo-list">
    <b-container fluid class="bv-example-row">
        <b-row>
            <b-col md="7">
                <h1>Todolist</h1>
                <b-list-group>
                    <todo-item :key="todo.id" v-for="todo in todos" :todo="todo" />
                </b-list-group>
            </b-col>
            <b-col md="4" offset-md="1">
                <add-todo />
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";

export default {
  name: "Todolist",
  data: function() {
    return {
      todos: [
        {
          title: "watch tv",
          id: 1,
          completed: false
        },
        {
          title: "sleep",
          id: 2,
          completed: false
        },
        {
          title: "code vue",
          id: 3,
          completed: true
        }
      ]
    };
  },
  components: {
    TodoItem,
    AddTodo
  }
};
</script>

<style lang="scss" scoped>
.todo-list {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
