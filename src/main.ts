import { createApp } from "vue";
import "./assets/global.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { VuesticPlugin } from "vuestic-ui";
import "material-design-icons-iconfont/dist/material-design-icons.css";

createApp(App)
  .use(router)
  .use(VuesticPlugin, {
    colors: {
      primary: "#42b983",
      button: "#000",
    },
  })
  .mount("#app");
