import Vue from 'vue'
import vuex from 'vuex'
import home_store from './modules/home_store'

Vue.use(vuex)
export default new vuex.Store({
    state:{
        title:'123'
    },
    mutations:{

    },
    actions:{

    },
    modules:{
        home:home_store
    }
})