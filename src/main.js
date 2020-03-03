import Vue from 'vue'
import MainPage from "@/MainPage";
import BootstrapVue, {ButtonPlugin, FormInputPlugin} from 'bootstrap-vue';
// Assets
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

// Configure BootstrapVue
Vue.use(BootstrapVue);
Vue.use(ButtonPlugin);
Vue.use(FormInputPlugin);

new Vue({
    render: h => h(MainPage)
}).$mount('#app');
