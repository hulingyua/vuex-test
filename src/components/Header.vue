<template>
    <div class="header">
        我是头部
        <router-link to="/">到helloWord</router-link>
        <router-link to="/login">到login</router-link>
        <router-link to="/store">到store</router-link>
        <router-link to="/mutations">到mutations</router-link>
        <router-link to="/actions">到actions</router-link>
        <router-link to="/modules">到modules</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header{
        height: 100px;
        background-color: lightblue;
        text-align: center;
        font-size: 18px;
        position: absolute;;
        width: 100%;
        left: 0;
        top: 0;
    }
</style>


