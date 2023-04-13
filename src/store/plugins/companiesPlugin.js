import companies from "../modules/companies";

export default function companiesPlugin(store){
    store.registerModule('companies', companies)
}