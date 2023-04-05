import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// components 
import HelloWorld from './components/HelloWorld.vue'
import CustomerRegister from './components/CustomerRegister.vue';
import Login from './components/Login.vue'
import Brand from './components/Brand.vue'
import Category from './components/Category.vue'
import Product from './components/Product.vue'
import Customer from './components/Customer.vue'
import Inventory from './components/Inventory.vue'
import Payment from './components/Payment.vue'
import Loan from './components/Loan.vue'
import Loan2 from './components/Loan2.vue'
import Home from './components/Home.vue'
import Content from './components/Content.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/register', component: CustomerRegister },
  { path: '/login', component: Login },
  { path: '/brands', component: Brand },
  { path: '/categories', component: Category },
  { path: '/products', component: Product },
  { path: '/customers', component: Customer },
  { path: '/inventory', component: Inventory },
  { path: '/payments', component: Payment },
  { path: '/loans', component: Loan},
  { path: '/loans-existing', component: Loan2},
  { path: '/dashboard', component: Content},

]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app') 
