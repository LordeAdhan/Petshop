import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";

import principal from './components/principal.vue';
import apoio1 from './components/apoio1.vue';
import apoio2 from './components/apoio2.vue';
import apoio3 from './components/apoio3.vue';

import App from './App.vue'

let caminhos = [
    {path:'/', component: principal},
    {path:'/cadastroCliente', component: apoio1},
    {path:'/cadastroPet', component: apoio2},
    {path:'/cadastroServico', component: apoio3}
];

const router = createRouter({
    history: createWebHistory(),
    routes: caminhos
});

const app = createApp(App);
app.use(router);
app.mount('#app')
