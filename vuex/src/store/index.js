import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = { // 状态值
    num: 0
}
const mutations = {  // 同步调用
    add(state) {
        state.num++
    },
    reduce(state) {
        state.num--
    }
}
const getters = { // 过滤
    num: (state) => {
        return state.num += 20
    }
}
const actions = { // 异步调用
    fn(context) {
        setTimeout(() => {
            context.state.num = 50;
        }, 3000);
        console.log('走你')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
