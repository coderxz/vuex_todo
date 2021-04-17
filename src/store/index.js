import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
    todos: [
        {
            id: 'qweqw1112',
            status: true,
            title: 'A事件'
        },
        {
            id: 'qweq1we1112',
            status: false,
            title: 'B事件'
        },
        {
            id: 'qweqw1e112',
            status: false,
            title: 'C事件'
        }
    ]
}
const mutations = {
    deleteItem(state, index) {
        state.todos.splice(index, 1)
    },
    showstatus(state, options) {
        state.todos[options.index].status = options.newValue
    },
    showStatus(state, newValue) {
        state.todos.forEach(item => {
            item.status = newValue
        })
    },
    clearAllDoneItem(state) {
        state.todos = state.todos.filter(item => {
            return item.status === false
        })
    },
    addTodeItem(state,item){
        state.todos.unshift(item)
    }
}
const actions = {
    addTodo({commit},item){
        if (item.title.trim()){
            console.log(item.title)
            commit('addTodeItem',item)
        }else{
            alert('请正确输入！')
        }
    }
}
const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})