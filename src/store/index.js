import { createStore } from "vuex";
import axiosClient from "../axios/";
// import { projectStore } from './projectStore'

const store = createStore({
    state: {
        projects: {
            data: {}
        }
    },
    getters: {},
    actions: {
        getAllProject({ commit }) {
            return axiosClient.get('projects').then((res) => {
                commit('setProjects', res.data.data)
            })
        }
    },
    mutations: {
        setProjects: (state, projects) => {
            state.projects.data = projects
        }
    },
    modules: {}

})

export default store