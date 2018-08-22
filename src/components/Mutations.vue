<template>
    <div>
        <button @click="plugTwo">点我加10</button>
        <div>{{ count }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return {

        }
    },
    created() {
        
    },
    methods:{
        plugTwo(){
            this.$store.commit('addAfter',{
                count: 10
            })
        }
    },
    computed:{
        ...mapState({
            count: 'count'
        })
    }
}
</script>

<style scoped>

</style>
