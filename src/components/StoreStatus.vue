<template>
    <div class="store_status">
        <!-- <div>treble ==== {{ treble }}</div> -->
        <div>localTreble ==== {{ localTreble }}</div>
        <div class="count">num --- {{ num }}</div>
        <div>count --- {{ count }}</div>
        <div>countNum --- {{ countNum }}</div>
        <div>outerMsg --- {{ outerMsg }}</div>
        <div>dubbleNum --- {{ dubble }}</div>
        <div>trebleNum --- {{ treble }}</div>
        <div>plugNum --- {{ plugNum }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            localCount: '100'
        }
    },
    computed: {
        // ...mapGetters([
        //     'treble'
        // ])
        outerMsg(){
            return 'outerMsg'
        },
        dubble(){
            return this.$store.getters.dubble;
        },
        treble() {
            return this.$store.getters.treble;
        },
        plugNum() {
            return this.$store.getters.plugNum(this.num, this.num)
        },
        //mapState辅助函数
        ...mapState({
            //获取到state里面的num
            num: state => state.num,
            count:  'count',
            //可使用普通函数，方可在函数内部使用this
            countNum(state){
                return state.count + this.localCount;
            }
        }),
        ...mapGetters({
            localTreble: 'treble'
        })
    }
}
</script>

<style scoped>

</style>
