<template>
<b-list-group-item v-bind:class="{ completed: todo.completed }" class="todo-item ">
    {{todo.title}}
</b-list-group-item>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/main.scss";

.todo-item {
  color: $main-color;
  font-size: 22px;
}

.completed {
  text-decoration: line-through;

  &:hover {
    text-decoration: line-through;
  }
}
</style>
