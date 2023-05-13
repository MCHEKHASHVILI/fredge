/**
 * Fields
 * 
 * ფიზიკური თუ იურიდიული პირი <= ჩეკბოქსი
 * ტელეფონის ნომერი
 * ჯგუფი (კონტრაგენტების გაერთიანება)
 * 
 * 
 */

import router from "@/router"

const defaultCompany = {
    name: '',
    license: '',
    email: '',
    address: '',
    type: '',
}

const companies = {
    namespaced: true,
    state() {
        return {
            fields: ["id", ...Object.keys(defaultCompany)],
            company: { ...defaultCompany },
            companies: []
        }
    },
    getters: {
        data: state => state.companies,
        fields: state => state.fields,
        company: state => state.company,
    },
    mutations: {
        RESET: (state) => Object.assign(state.company, { ...defaultCompany }),
        STORE: (state, payload) => state.companies.push(payload),
    },
    actions: {
        store: ({ commit, getters }) => {
            commit('STORE', {...getters.company})
            commit('RESET')
            router.push({ name: 'Companies' })
        }
    }
}

export default companies