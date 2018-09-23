<template>
  <div class="auth">
    <h1 class="auth__title">auth page</h1>
    <login />
  </div>
</template>
<script>
import Login from "@/components/auth/Login.vue";

export default {
  name: "Auth",
  components: {
    Login
  }
};
</script>


 <style lang="scss" scoped>
.auth {
  margin: 0 auto;
  max-width: 50%;

  &__title {
    text-align: center;
  }
}
</style>
