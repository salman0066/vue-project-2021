import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from "vue3-apexcharts";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

const app = createApp(App);
app.use(router);
app.use(VueApexCharts);
app.use(ElementPlus);
app.mount('#app');