export default {
    pages: {
        home: '/',
        products: {
            index: '/products',
            details: ':id'
        },
        payment: '/payment',
        contacts: '/contacts',
    },
    navigate: {
        products: {
            list: '/',
            getDetailLink: (id) => `/products/${id}`
        }
    }
}