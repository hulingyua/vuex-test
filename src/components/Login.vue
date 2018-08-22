<template>
    <div class="login">
        <form @click.prevent>
            <fieldset>
                <legend>登录</legend>
                姓名：<input type="text" placeholder="请输入用户名"><br>
                密码：<input type="text" placeholder="请输入密码"><br>
                <button>登录</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
           
        }
    },
    computed: {
    }
}
</script>

<style scoped>

</style>
