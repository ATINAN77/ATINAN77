import { UserRole } from '../types';

export const ROLE_PERMISSIONS = {
  ADMIN: [
    'users:read', 'users:write', 'users:delete',
    'patients:read', 'patients:write',
    'appointments:read', 'appointments:write',
    'prescriptions:read',
    'inventory:read', 'inventory:write',
    'labs:read',
    'audit:read',
    'announcements:read', 'announcements:write',
    'reports:export'
  ],
  DOCTOR: [
    'patients:read', 'patients:write',
    'appointments:read', 'appointments:write',
    'prescriptions:read', 'prescriptions:write',
    'labs:read', 'labs:write',
    'vitals:read'
  ],
  NURSE: [
    'patients:read', 'patients:write',
    'appointments:read',
    'vitals:read', 'vitals:write',
    'emergency:flag'
  ],
  PATIENT: [
    'appointments:read', 'appointments:write',
    'prescriptions:read',
    'labs:read',
    'profile:read', 'profile:write'
  ],
  PHARMACIST: [
    'prescriptions:read', 'prescriptions:write',
    'inventory:read', 'inventory:write',
    'patients:read'
  ],
  LAB_TECH: [
    'labs:read', 'labs:write',
    'patients:read'
  ],
  RECEPTIONIST: [
    'patients:read', 'patients:write',
    'appointments:read', 'appointments:write',
    'queue:manage'
  ]
};

export const ROLE_ROUTES = {
  ADMIN: '/dashboard/admin',
  DOCTOR: '/dashboard/doctor',
  NURSE: '/dashboard/nurse',
  PATIENT: '/dashboard/patient',
  PHARMACIST: '/dashboard/pharmacy',
  LAB_TECH: '/dashboard/lab',
  RECEPTIONIST: '/dashboard/reception'
};

export const ROLE_LABELS = {
  ADMIN: 'Administrator',
  DOCTOR: 'Doctor',
  NURSE: 'Nurse',
  PATIENT: 'Patient',
  PHARMACIST: 'Pharmacist',
  LAB_TECH: 'Lab Technician',
  RECEPTIONIST: 'Receptionist'
};

export function hasPermission(userRole: UserRole, permission: string): boolean {
  return ROLE_PERMISSIONS[userRole]?.includes(permission) || false;
}

export function canAccessRoute(userRole: UserRole, route: string): boolean {
  const allowedRoute = ROLE_ROUTES[userRole];
  return route.startsWith(allowedRoute);
}

export function getRoleColor(role: UserRole): string {
  const colors = {
    ADMIN: 'bg-red-100 text-red-800',
    DOCTOR: 'bg-blue-100 text-blue-800',
    NURSE: 'bg-green-100 text-green-800',
    PATIENT: 'bg-gray-100 text-gray-800',
    PHARMACIST: 'bg-purple-100 text-purple-800',
    LAB_TECH: 'bg-yellow-100 text-yellow-800',
    RECEPTIONIST: 'bg-pink-100 text-pink-800'
  };
  return colors[role] || 'bg-gray-100 text-gray-800';
}