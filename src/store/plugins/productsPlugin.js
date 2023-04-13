import products from "../modules/products";

export default function productsPlugin(store){
    store.registerModule('products', products)
}