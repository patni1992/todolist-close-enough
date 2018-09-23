<template>
<b-container>
    <div id="app">
    <router-view/>
  </div>
</b-container>
</template>

<style lang="scss">
@import "styles/main.scss";

html {
  height: 100%;
  box-sizing: border-box;
}
body {
  height: 100%;
  box-sizing: inherit;
  margin: 0;
  background: linear-gradient(0deg, $main-color 0%, $secondary-color 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#app {
  margin-top: 20px;
  color: $white;
}
</style>
