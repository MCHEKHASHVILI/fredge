import { createStore } from "vuex"
import companiesPlugin from "./plugins/companiesPlugin"
import ordersPlugin from "./plugins/ordersPlugin"
import productsPlugin from "./plugins/productsPlugin"

const store = createStore({
    plugins: [companiesPlugin, ordersPlugin, productsPlugin]
})

export default store