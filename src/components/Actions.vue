<template>
    <div>
        <button @click="plugNum">点我加num</button>
        <button @click="reduceNum">点我减num</button>
        <button @click="reduceNumDelay">点我延迟一秒减num</button>
        <button @click="addAfter">点我延迟1s加20count,30num</button>
        <div>{{ num }}</div>
        <div>{{ count }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex'
export default {
    data(){
        return {

        }
    },
    created() {
        
    },
    methods:{
        // plugNum() {
        //     this.$store.dispatch('plug')
        // },
        // reduceNum() {
        //     this.$store.dispatch('reduce')
        // },
        // reduceNumDelay() {
        //     this.$store.dispatch('reduceDelay');
        // },
        addAfter() {
            this.$store.dispatch('addCountAfter',{
                count: 20,
                num: 30
            });
        },
        ...mapActions({
            plugNum: 'plug',
            reduceNum: 'reduce',
            reduceNumDelay: 'reduceDelay'
        }),
        //如果方法名一致的话
        // ...mapActions([
        //     'reduce',
        //     'reduceDelay',
        //     'addCountAfter'
        // ])
    },
    computed:{
        ...mapState({
            num: 'num',
            count: 'count'
        })
    }
}
</script>

<style scoped>

</style>
