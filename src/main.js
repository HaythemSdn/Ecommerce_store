import { createApp } from "vue";
import App from "./views/App.vue";
import router from "./router";
import "./index.css";
import Store from "./Store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App).use(Store).use(VueSweetalert2).use(router).mount("#app");
