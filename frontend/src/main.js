import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./router";

AOS.init({ duration: 1000 });

createApp(App).component("Icon", Icon).use(router).mount("#app");
