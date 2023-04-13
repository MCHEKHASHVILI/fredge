const companies = {
    namespaced: true,
    state(){
        return {
            fields: [ "id", "name", "license", "email",  "address" ],
            companies: [
                {
                    id: 1,
                    name: 'company 1',
                    license: '123456789',
                    email: 'contact@company1.com',
                    address: '0179, Sairme street, Tbilisi, Georgia',
                  },
                  {
                    id: 2,
                    name: 'company 2',
                    license: '123456789',
                    email: 'contact@company2.com',
                    address: '0179, Sairme street, Tbilisi, Georgia',
                  },
                  {
                    id: 3,
                    name: 'company 3',
                    license: '123456789',
                    email: 'contact@company3.com',
                    address: '0179, Sairme street, Tbilisi, Georgia',
                  }
            ]
        }
    },
    getters: {
        data: state => state.companies,
        fields: state => state.fields,
    },
}

export default companies