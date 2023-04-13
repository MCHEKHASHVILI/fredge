import orders from "../modules/orders";

export default function ordersPlugin(store){
    store.registerModule('orders', orders)
}