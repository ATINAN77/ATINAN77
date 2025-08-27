export type UserRole = 
  | "ADMIN" 
  | "DOCTOR" 
  | "NURSE" 
  | "PATIENT" 
  | "PHARMACIST" 
  | "LAB_TECH" 
  | "RECEPTIONIST";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  active: boolean;
  createdAt: string;
  avatar?: string;
}

export interface Patient {
  id: string;
  mrn: string;
  firstName: string;
  lastName: string;
  dob: string;
  sex: "Male" | "Female" | "Other";
  phone: string;
  email: string;
  address: string;
  emergencyFlag: boolean;
  studentId?: string;
  staffId?: string;
  createdAt: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: "Scheduled" | "CheckedIn" | "InProgress" | "Completed" | "Cancelled" | "NoShow";
  reason: string;
  notes?: string;
  createdAt: string;
}

export interface Vitals {
  id: string;
  patientId: string;
  visitId?: string;
  bpSystolic: number;
  bpDiastolic: number;
  heartRate: number;
  temperature: number;
  spo2: number;
  weight: number;
  height: number;
  bmi: number;
  recordedAt: string;
  recordedBy: string;
}

export interface PrescriptionItem {
  drugId: string;
  name: string;
  dose: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  items: PrescriptionItem[];
  status: "New" | "Preparing" | "Ready" | "Dispensed" | "Expired";
  notes?: string;
  createdAt: string;
}

export interface InventoryItem {
  id: string;
  drugCode: string;
  name: string;
  form: string;
  quantity: number;
  minThreshold: number;
  expiryDate: string;
  batchNumber: string;
  supplier: string;
  unitPrice: number;
  updatedAt: string;
}

export interface LabTest {
  code: string;
  name: string;
  category: string;
  normalRange?: string;
}

export interface LabRequest {
  id: string;
  patientId: string;
  doctorId: string;
  tests: LabTest[];
  priority: "Normal" | "Urgent" | "STAT";
  status: "Pending" | "InProgress" | "Completed" | "Cancelled";
  notes?: string;
  createdAt: string;
}

export interface LabResult {
  id: string;
  requestId: string;
  files: Array<{ name: string; url: string; }>;
  values: Array<{ 
    testCode: string;
    testName: string;
    value: string;
    unit: string;
    normalRange: string;
    status: "Normal" | "High" | "Low" | "Critical";
  }>;
  releasedAt: string;
  releasedBy: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  entity: string;
  entityId: string;
  details: string;
  ipAddress: string;
  timestamp: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  audience: UserRole[];
  published: boolean;
  publishedAt?: string;
  createdBy: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface DashboardStats {
  totalUsers: number;
  activeAppointments: number;
  pendingLabRequests: number;
  lowStockItems: number;
  todayAppointments: number;
  waitingPatients: number;
  urgentTests: number;
  newPrescriptions: number;
}