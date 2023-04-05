<template>
  <!--     <img alt="Vue logo" src="./assets/logo.png">-->
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
  <!-- <CustomerRegister></CustomerRegister> -->
  <!-- <Loan></Loan> -->
  <div>
    <div class="header">
      
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div> 
</template>

<script>
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

export default {
  name: 'App',
  components: {
    HelloWorld, CustomerRegister, Login, Brand, Category, Product, Customer, Inventory, Payment, Loan, Loan2, Home, Content
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*   text-align: center; */
  color: #2c3e50;
  background-color: white;
  margin-top: 60px;
}
.header {
  height: 4rem;
}
</style>
