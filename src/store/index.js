import { createStore } from "vuex"
import companiesPlugin from "./plugins/companiesPlugin"

const store = createStore({
    plugins: [ companiesPlugin ]
})

export default store