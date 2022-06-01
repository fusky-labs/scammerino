import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./styles/global.scss";

library.add(fas);
dom.watch();

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
