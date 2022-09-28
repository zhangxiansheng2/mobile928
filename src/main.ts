import { createApp } from "vue";
// 解决适配的
import "amfe-flexible"
//
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant"
import 'vant/lib/index.css';
 
createApp(App).use(store).use(Vant).use(router).mount("#app"); 
