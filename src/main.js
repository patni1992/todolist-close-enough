import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import { graphqlUri } from "../config.js";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const httpLink = new HttpLink({
  uri: graphqlUri
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("jwt-token");
  const setHeaders = {
    ...headers
  };

  if (token) {
    setHeaders.authorization = `Bearer ${token}`;
  }
  return {
    headers: {
      ...setHeaders
    }
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueApollo);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
