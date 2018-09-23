<template>
 <li>
     {{todo.title}}
 </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
