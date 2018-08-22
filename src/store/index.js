import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const extra = {
    state:{
        name: 'zs',
        age: 18
    },
    mutations: {
        introduce(state){
            alert(`我的名字是 ${state.name}, 今年 ${state.age}岁`);
        }
    },
    actions: {
        introduce({state, commit, rootState}) {
            if( state.age >= 18 ) {
                commit('introduce');
            }
        },
        agePlugNum({state, commit, rootState}) {
            
        }
    },
    getter:{
        getName(state) {
            return state.name + '这是名字';
        }
    }
}
export default new Vuex.Store({
    state :{
        num: 0,
        count: 2,
        plug: 'plug'
    },
    //处理数据的方法,mutation必须是同步函数
    mutations:{
        plug(state){
            state.num ++;
        },
        reduce(state) {
            state.num --;
        },
        addCountAfter(state,play) {
            state.count = state.count + play.count
        },
        addNumAfter(state,play) {
            state.num = state.num + play.num
        }
    },
    //相当于store的计算属性
    getters: {
        //getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的
        dubble: state => {
            return state.num + state.num
        },
        treble: (state, getters) => {
            return state.num + getters.dubble
        },
        //getter 在通过方法访问的时候没有缓存，每次访问都会重新调用
        plugNum: (state) => (a, b) => {
            return  (a + b) + state.plug
        }
    },
    // action提交的mutation，action可以是异步操作以及分发多重mutation,可以.then()继续
    actions:{
        plug(context) {
            context.commit('plug');
        },
        reduce(context) {
            context.commit('reduce');
        },
        reduceDelay(context) {
            setTimeout(_ => {
                context.commit('reduce');
            }, 1000);
        },
        addCountAfter(context,play) {
            setTimeout(_ => {
                context.commit('addCountAfter', play);
                context.commit('addNumAfter', play);
            }, 1000);
        }
    },
    modules:{
        extra
    }
})