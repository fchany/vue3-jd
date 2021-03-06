import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import Vant from "./plugins/vant";
import "amfe-flexible";
import "/@/assets/freset.css";
import "/@/assets/flex.css";
import "/@/assets/animation.css";
const app = createApp(App);
Vant(app);
app.use(router);
app.mount('#app');
