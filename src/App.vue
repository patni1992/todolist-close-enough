<template>
<b-container>
    <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/auth">Auth</router-link>
    </div>
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
  background: linear-gradient(0deg, $main-color 0%, $secondary-color 100%);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: $white;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
