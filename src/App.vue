<template>
  <div id="app">
    <Header></Header>
    <div class="title">测试账号哈哈</div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {Header,Footer}
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
</style>
