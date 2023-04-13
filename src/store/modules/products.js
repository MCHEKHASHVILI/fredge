const products = {
  namespaced: true,
  state() {
    return {
      fields: [ "id", "name", "unit", ],
      products: [
        {
          id: 1,
          name: 'company 1',
          unit: 'ცალი',
        },
        {
          id: 2,
          name: 'company 2',
          unit: 'კგ',
        },
        {
          id: 3,
          name: 'company 3',
          unit: 'ლიტრი',
        },
      ]
    }
  },
  getters: {
    data: state => state.products,
    fields: state => state.fields,
  },
}

export default products