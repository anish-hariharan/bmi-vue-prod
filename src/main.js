import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import ResultPage from './components/ResultPage.vue'
// import  Vue from 'vue'

const store = createStore({
    state(){
        return{
            counter: null,
            generate: false
        }
    }
})

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component: HomePage},
        {path: '/result', component: ResultPage}
    ]
})

/* eslint-disable no-new */
// new Vue({
//     el:'#app',
//     router,
//     store,
//     render: h => h(App)
// })

createApp(App).use(router).use(store).mount('#app')
