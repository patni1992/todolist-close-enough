<template>
  <div class="todo-list">
    <h1>Todolist</h1>
    <ul>
       <todo-item :key="todo.id" v-for="todo in todos" :todo="todo"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todolist",
  data: function() {
    return {
      todos: [
        { title: "watch tv", id: 1 },
        { title: "sleep", id: 2 },
        { title: "code vue", id: 3 }
      ]
    };
  },
  components: {
    TodoItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo-list {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
