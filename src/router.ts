
import {createRouter, createWebHashHistory} from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Switch from './components/Switch.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/doc', component: Doc ,
        children:[{
            path:'switch',component:Switch}
        ]},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export {router}




