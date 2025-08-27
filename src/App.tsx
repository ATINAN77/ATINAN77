import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { initializeAuth } from './store/slices/authSlice';
import { AppDispatch } from './store';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';

// Dashboard Pages
import AdminDashboard from './pages/dashboard/AdminDashboard';
import DoctorDashboard from './pages/dashboard/DoctorDashboard';
import NurseDashboard from './pages/dashboard/NurseDashboard';
import PatientDashboard from './pages/dashboard/PatientDashboard';
import PharmacyDashboard from './pages/dashboard/PharmacyDashboard';
import LabDashboard from './pages/dashboard/LabDashboard';
import ReceptionDashboard from './pages/dashboard/ReceptionDashboard';

// Route Guards
import ProtectedRoute from './routes/ProtectedRoute';
import RoleGuard from './routes/RoleGuard';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
      <Route path="/register" element={<AuthLayout><RegisterPage /></AuthLayout>} />
      <Route path="/forgot-password" element={<AuthLayout><ForgotPasswordPage /></AuthLayout>} />
      <Route path="/reset-password" element={<AuthLayout><ResetPasswordPage /></AuthLayout>} />
      
      {/* Protected Dashboard Routes */}
      <Route path="/dashboard/*" element={
        <ProtectedRoute>
          <DashboardLayout>
            <Routes>
              <Route path="admin/*" element={
                <RoleGuard allowedRoles={['ADMIN']}>
                  <AdminDashboard />
                </RoleGuard>
              } />
              <Route path="doctor/*" element={
                <RoleGuard allowedRoles={['DOCTOR']}>
                  <DoctorDashboard />
                </RoleGuard>
              } />
              <Route path="nurse/*" element={
                <RoleGuard allowedRoles={['NURSE']}>
                  <NurseDashboard />
                </RoleGuard>
              } />
              <Route path="patient/*" element={
                <RoleGuard allowedRoles={['PATIENT']}>
                  <PatientDashboard />
                </RoleGuard>
              } />
              <Route path="pharmacy/*" element={
                <RoleGuard allowedRoles={['PHARMACIST']}>
                  <PharmacyDashboard />
                </RoleGuard>
              } />
              <Route path="lab/*" element={
                <RoleGuard allowedRoles={['LAB_TECH']}>
                  <LabDashboard />
                </RoleGuard>
              } />
              <Route path="reception/*" element={
                <RoleGuard allowedRoles={['RECEPTIONIST']}>
                  <ReceptionDashboard />
                </RoleGuard>
              } />
            </Routes>
          </DashboardLayout>
        </ProtectedRoute>
      } />
      
      {/* Default redirects */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;