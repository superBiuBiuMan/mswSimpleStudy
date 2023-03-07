import { createApp } from 'vue'
import App from './App.vue'
//@ts-ignore;
import { worker } from "./mocks/browser"

if(import.meta.env.DEV){
  /* 开发环境下就启动 */
  worker.start();
}



createApp(App).mount('#app')
