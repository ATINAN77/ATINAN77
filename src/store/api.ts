import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './index';
import { 
  User, Patient, Appointment, Prescription, InventoryItem, 
  LabRequest, LabResult, Notification, AuditLog, Announcement,
  DashboardStats
} from '../types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    'User', 'Patient', 'Appointment', 'Prescription', 'Inventory',
    'LabRequest', 'LabResult', 'Notification', 'AuditLog', 'Announcement',
    'Stats'
  ],
  endpoints: (builder) => ({
    // Auth endpoints
    login: builder.mutation<{ user: User; token: string }, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<{ user: User; token: string }, Partial<User> & { password: string }>({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    
    // Dashboard stats
    getDashboardStats: builder.query<DashboardStats, void>({
      query: () => '/dashboard/stats',
      providesTags: ['Stats'],
    }),
    
    // Users
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    updateUser: builder.mutation<User, { id: string; data: Partial<User> }>({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
    
    // Patients
    getPatients: builder.query<Patient[], void>({
      query: () => '/patients',
      providesTags: ['Patient'],
    }),
    getPatient: builder.query<Patient, string>({
      query: (id) => `/patients/${id}`,
      providesTags: ['Patient'],
    }),
    createPatient: builder.mutation<Patient, Partial<Patient>>({
      query: (patient) => ({
        url: '/patients',
        method: 'POST',
        body: patient,
      }),
      invalidatesTags: ['Patient'],
    }),
    updatePatient: builder.mutation<Patient, { id: string; data: Partial<Patient> }>({
      query: ({ id, data }) => ({
        url: `/patients/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Patient'],
    }),
    
    // Appointments
    getAppointments: builder.query<Appointment[], void>({
      query: () => '/appointments',
      providesTags: ['Appointment'],
    }),
    createAppointment: builder.mutation<Appointment, Partial<Appointment>>({
      query: (appointment) => ({
        url: '/appointments',
        method: 'POST',
        body: appointment,
      }),
      invalidatesTags: ['Appointment'],
    }),
    updateAppointment: builder.mutation<Appointment, { id: string; data: Partial<Appointment> }>({
      query: ({ id, data }) => ({
        url: `/appointments/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Appointment'],
    }),
    
    // Prescriptions
    getPrescriptions: builder.query<Prescription[], void>({
      query: () => '/prescriptions',
      providesTags: ['Prescription'],
    }),
    createPrescription: builder.mutation<Prescription, Partial<Prescription>>({
      query: (prescription) => ({
        url: '/prescriptions',
        method: 'POST',
        body: prescription,
      }),
      invalidatesTags: ['Prescription'],
    }),
    updatePrescription: builder.mutation<Prescription, { id: string; data: Partial<Prescription> }>({
      query: ({ id, data }) => ({
        url: `/prescriptions/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Prescription'],
    }),
    
    // Inventory
    getInventory: builder.query<InventoryItem[], void>({
      query: () => '/inventory',
      providesTags: ['Inventory'],
    }),
    createInventoryItem: builder.mutation<InventoryItem, Partial<InventoryItem>>({
      query: (item) => ({
        url: '/inventory',
        method: 'POST',
        body: item,
      }),
      invalidatesTags: ['Inventory'],
    }),
    updateInventoryItem: builder.mutation<InventoryItem, { id: string; data: Partial<InventoryItem> }>({
      query: ({ id, data }) => ({
        url: `/inventory/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Inventory'],
    }),
    
    // Lab Requests
    getLabRequests: builder.query<LabRequest[], void>({
      query: () => '/lab/requests',
      providesTags: ['LabRequest'],
    }),
    createLabRequest: builder.mutation<LabRequest, Partial<LabRequest>>({
      query: (request) => ({
        url: '/lab/requests',
        method: 'POST',
        body: request,
      }),
      invalidatesTags: ['LabRequest'],
    }),
    updateLabRequest: builder.mutation<LabRequest, { id: string; data: Partial<LabRequest> }>({
      query: ({ id, data }) => ({
        url: `/lab/requests/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['LabRequest'],
    }),
    
    // Lab Results
    getLabResults: builder.query<LabResult[], void>({
      query: () => '/lab/results',
      providesTags: ['LabResult'],
    }),
    createLabResult: builder.mutation<LabResult, Partial<LabResult>>({
      query: (result) => ({
        url: '/lab/results',
        method: 'POST',
        body: result,
      }),
      invalidatesTags: ['LabResult'],
    }),
    
    // Notifications
    getNotifications: builder.query<Notification[], void>({
      query: () => '/notifications',
      providesTags: ['Notification'],
    }),
    markNotificationAsRead: builder.mutation<void, string>({
      query: (id) => ({
        url: `/notifications/${id}/read`,
        method: 'PUT',
      }),
      invalidatesTags: ['Notification'],
    }),
    
    // Audit Logs
    getAuditLogs: builder.query<AuditLog[], void>({
      query: () => '/audit',
      providesTags: ['AuditLog'],
    }),
    
    // Announcements
    getAnnouncements: builder.query<Announcement[], void>({
      query: () => '/announcements',
      providesTags: ['Announcement'],
    }),
    createAnnouncement: builder.mutation<Announcement, Partial<Announcement>>({
      query: (announcement) => ({
        url: '/announcements',
        method: 'POST',
        body: announcement,
      }),
      invalidatesTags: ['Announcement'],
    }),
    updateAnnouncement: builder.mutation<Announcement, { id: string; data: Partial<Announcement> }>({
      query: ({ id, data }) => ({
        url: `/announcements/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Announcement'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetDashboardStatsQuery,
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetPatientsQuery,
  useGetPatientQuery,
  useCreatePatientMutation,
  useUpdatePatientMutation,
  useGetAppointmentsQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useGetPrescriptionsQuery,
  useCreatePrescriptionMutation,
  useUpdatePrescriptionMutation,
  useGetInventoryQuery,
  useCreateInventoryItemMutation,
  useUpdateInventoryItemMutation,
  useGetLabRequestsQuery,
  useCreateLabRequestMutation,
  useUpdateLabRequestMutation,
  useGetLabResultsQuery,
  useCreateLabResultMutation,
  useGetNotificationsQuery,
  useMarkNotificationAsReadMutation,
  useGetAuditLogsQuery,
  useGetAnnouncementsQuery,
  useCreateAnnouncementMutation,
  useUpdateAnnouncementMutation,
} = api;