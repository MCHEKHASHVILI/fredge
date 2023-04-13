const orders = {
  namespaced: true,
  state() {
    return {
      fields: ["id", "date", "customer", "address"],
      orders: [
        {
          id: 1,
          date: new Date().toDateString(),
          customer: 'Sesili',
          address: '0179, Sairme street, Tbilisi, Georgia',
        },
        {
          id: 2,
          date: new Date().toDateString(),
          customer: 'Vesili',
          address: '0179, Sairme street, Tbilisi, Georgia',
        },
        {
          id: 3,
          date: new Date().toDateString(),
          customer: 'Mesili',
          address: '0179, Sairme street, Tbilisi, Georgia',
        },
        {
          id: 4,
          date: new Date().toDateString(),
          customer: 'Asisi',
          address: '0179, Sairme street, Tbilisi, Georgia',
        },
      ]
    }
  },
  getters: {
    data: state => state.orders,
    fields: state => state.fields,
  },
}

export default orders