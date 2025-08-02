export default {
    pages: {
        home: "/",
        teachers: {
            index: '/teachers',
            add: 'new',
            edit: ':id/edit',
        },
        meeting: '/meeting',
        aboutApp: '/about-app',
        aboutDev: '/about-dev',
    },
    navigate: {
        home: "/",
        teachers: {
            index: '/teachers',
            add: '/teachers/new',
            edit: (id) => `/teachers/${id}/edit`,
        },
        meeting: '/meeting',
        aboutApp: '/about-app',
        aboutDev: '/about-dev',
    }
}