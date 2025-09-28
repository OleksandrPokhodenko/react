import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiRoutes } from './apiRoutes'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://react-14-z29u.onrender.com/' }),
  tagTypes: ['Patients', 'Doctors', 'Appointments'],
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => apiRoutes.patients.getAll,
      providesTags: ['Patients'],
    }),
    getPatientById: builder.query({
      query: (id) => apiRoutes.patients.getById(id),
      providesTags: (result, error, id) => [{ type: 'Patients', id }],
    }),
    getFilteredPatientByName: builder.query({
      query: (name) => apiRoutes.patients.filterByName(name),
      providesTags: ['Patients']
    }),
    createPatient: builder.mutation({
      query: (data) => ({
        url: apiRoutes.patients.create,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Patients'],
    }),
    updatePatient: builder.mutation({
      query: ({ id, ...data }) => ({
        url: apiRoutes.patients.update(id),
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, id) => [
        'Patients',
        { type: 'Patients', id },
      ],
    }),
    deletePatient: builder.mutation({
      query: (id) => ({
        url: apiRoutes.patients.delete(id),
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        'Patients',
        { type: 'Patients', id },
      ],
    }),
    getDoctors: builder.query({
      query: () => apiRoutes.doctors.getAll,
      providesTags: ['Doctors'],
    }),
    createDoctor: builder.mutation({
      query: (data) => ({
        url: apiRoutes.doctors.create,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Doctors'],
    }),
    updateDoctor: builder.mutation({
      query: ({ id, ...data }) => ({
        url: apiRoutes.doctors.update(id),
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Doctors'],
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: apiRoutes.doctors.delete(id),
        method: 'DELETE'
      }),
      invalidatesTags: ['Doctors'],
    }),
    getAppointments: builder.query({
      query: () => apiRoutes.appointments.getAll,
      providesTags: ['Appointments'],
    }),
    getAppointmentById: builder.query({
      query: (id) => apiRoutes.appointments.getById(id),
      providesTags: (result, error, id) => [{ type: 'Appointments', id }],
    }),
    updateAppointment: builder.mutation({
      query: ({ id, ...data }) => ({
        url: apiRoutes.appointments.update(id),
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (result, error, id) => [
        'Appointments',
        { type: 'Appointments', id }
      ]
    }),
    createAppointment: builder.mutation({
      query: (data) => ({
        url: apiRoutes.appointments.create,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Appointments'],
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: apiRoutes.appointments.delete(id),
        method: 'DELETE',
      }),
      invalidatesTags: ['Appointments'],
    }),
    filteredByDate: builder.query({
      query: (date) => apiRoutes.appointments.filterByDate(date),
      providesTags: ['Appointments'],
    }),
    filteredByPatientName: builder.query({
      query: (patientName) => apiRoutes.appointments.filterByPatientName(patientName),
      providesTags: ['Appointments'],
    }),
  }),
})

export const {
  useGetPatientsQuery,
  useGetPatientByIdQuery,
  useGetFilteredPatientByNameQuery,
  useDeletePatientMutation,
  useUpdatePatientMutation,
  useCreatePatientMutation,
  useCreateDoctorMutation,
  useDeleteDoctorMutation,
  useGetDoctorsQuery,
  useUpdateDoctorMutation,
  useCreateAppointmentMutation,
  useDeleteAppointmentMutation,
  useFilteredByDateQuery,
  useFilteredByPatientNameQuery,
  useUpdateAppointmentMutation,
  useGetAppointmentsQuery,
  useGetAppointmentByIdQuery
} = api
