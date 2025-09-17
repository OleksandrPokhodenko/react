export const frontRoutes = {
  pages: {
    home: '/',
    patients: {
      base: 'patients',
      edit: 'edit/:id?',
      details: 'details/:id'
    },
    doctors: {
      base: 'doctors',
      edit: 'edit/:id?',
    },
    appointments: {
      base: 'appointments',
      edit: 'edit/:id?',
    },
  },
  navigate: {
    patients: {
      list: '/patients',
      edit: (id) => `/patients/edit/${id}`,
      create: '/patients/edit',
      details: (id) => `/patients/details/${id}`
    },
    doctors: {
      list: '/doctors',
      edit: (id) => `/doctors/edit/${id}`,
      create: '/doctors/edit',
      details: (id) => `/doctors/details/${id}`
    },
    appointments: {
      list: '/appointments',
      edit: (id) => `/appointments/edit/${id}`,
      create: 'appointments/edit',
    }
  },
}
