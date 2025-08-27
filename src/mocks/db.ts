import { 
  User, Patient, Appointment, Vitals, Prescription, InventoryItem, 
  LabRequest, LabResult, Notification, AuditLog, Announcement, UserRole 
} from '../types';

// Demo credentials
export const DEMO_CREDENTIALS = {
  admin: { email: 'admin@clinic.edu', password: 'Admin123!' },
  doctor: { email: 'dr@clinic.edu', password: 'Doctor123!' },
  nurse: { email: 'nurse@clinic.edu', password: 'Nurse123!' },
  patient: { email: 'patient@clinic.edu', password: 'Patient123!' },
  pharmacist: { email: 'pharm@clinic.edu', password: 'Pharm123!' },
  labtech: { email: 'lab@clinic.edu', password: 'Lab123!' },
  receptionist: { email: 'reception@clinic.edu', password: 'Reception123!' }
};

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    email: 'dr@clinic.edu',
    role: 'DOCTOR',
    active: true,
    createdAt: '2024-01-15T08:00:00Z'
  },
  {
    id: '2',
    name: 'Admin User',
    email: 'admin@clinic.edu',
    role: 'ADMIN',
    active: true,
    createdAt: '2024-01-10T08:00:00Z'
  },
  {
    id: '3',
    name: 'Nurse Mary Wilson',
    email: 'nurse@clinic.edu',
    role: 'NURSE',
    active: true,
    createdAt: '2024-01-12T08:00:00Z'
  },
  {
    id: '4',
    name: 'John Smith',
    email: 'patient@clinic.edu',
    role: 'PATIENT',
    active: true,
    createdAt: '2024-01-20T08:00:00Z'
  },
  {
    id: '5',
    name: 'Pharmacist Lisa Chen',
    email: 'pharm@clinic.edu',
    role: 'PHARMACIST',
    active: true,
    createdAt: '2024-01-14T08:00:00Z'
  },
  {
    id: '6',
    name: 'Lab Tech Mike Davis',
    email: 'lab@clinic.edu',
    role: 'LAB_TECH',
    active: true,
    createdAt: '2024-01-16T08:00:00Z'
  },
  {
    id: '7',
    name: 'Receptionist Anna Brown',
    email: 'reception@clinic.edu',
    role: 'RECEPTIONIST',
    active: true,
    createdAt: '2024-01-18T08:00:00Z'
  }
];

// Mock Patients
export const mockPatients: Patient[] = [
  {
    id: '1',
    mrn: '001234',
    firstName: 'John',
    lastName: 'Smith',
    dob: '1995-03-15',
    sex: 'Male',
    phone: '555-0123',
    email: 'patient@clinic.edu',
    address: '123 University Ave, College Town, ST 12345',
    emergencyFlag: false,
    studentId: 'STU001234',
    createdAt: '2024-01-20T08:00:00Z'
  },
  {
    id: '2',
    mrn: '001235',
    firstName: 'Emily',
    lastName: 'Johnson',
    dob: '1998-07-22',
    sex: 'Female',
    phone: '555-0124',
    email: 'emily.johnson@student.edu',
    address: '456 Campus Dr, College Town, ST 12345',
    emergencyFlag: false,
    studentId: 'STU001235',
    createdAt: '2024-01-21T09:30:00Z'
  },
  {
    id: '3',
    mrn: '001236',
    firstName: 'Michael',
    lastName: 'Brown',
    dob: '1992-11-08',
    sex: 'Male',
    phone: '555-0125',
    email: 'michael.brown@staff.edu',
    address: '789 Faculty Rd, College Town, ST 12345',
    emergencyFlag: true,
    staffId: 'STF001236',
    createdAt: '2024-01-19T14:15:00Z'
  }
];

// Mock Appointments
export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '1',
    date: '2024-01-25',
    time: '09:00',
    status: 'Scheduled',
    reason: 'Annual checkup',
    createdAt: '2024-01-22T10:00:00Z'
  },
  {
    id: '2',
    patientId: '2',
    doctorId: '1',
    date: '2024-01-25',
    time: '10:30',
    status: 'CheckedIn',
    reason: 'Flu symptoms',
    createdAt: '2024-01-23T11:30:00Z'
  },
  {
    id: '3',
    patientId: '3',
    doctorId: '1',
    date: '2024-01-24',
    time: '14:00',
    status: 'Completed',
    reason: 'Follow-up visit',
    notes: 'Patient doing well, continue current medication',
    createdAt: '2024-01-20T16:00:00Z'
  }
];

// Mock Vitals
export const mockVitals: Vitals[] = [
  {
    id: '1',
    patientId: '1',
    visitId: '1',
    bpSystolic: 120,
    bpDiastolic: 80,
    heartRate: 72,
    temperature: 98.6,
    spo2: 98,
    weight: 70,
    height: 175,
    bmi: 22.9,
    recordedAt: '2024-01-25T09:15:00Z',
    recordedBy: '3'
  },
  {
    id: '2',
    patientId: '2',
    visitId: '2',
    bpSystolic: 118,
    bpDiastolic: 78,
    heartRate: 68,
    temperature: 99.2,
    spo2: 97,
    weight: 65,
    height: 165,
    bmi: 23.9,
    recordedAt: '2024-01-25T10:45:00Z',
    recordedBy: '3'
  }
];

// Mock Prescriptions
export const mockPrescriptions: Prescription[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '1',
    date: '2024-01-25',
    items: [
      {
        drugId: '1',
        name: 'Amoxicillin 500mg',
        dose: '500mg',
        frequency: 'Three times daily',
        duration: '7 days',
        instructions: 'Take with food'
      }
    ],
    status: 'New',
    createdAt: '2024-01-25T09:30:00Z'
  },
  {
    id: '2',
    patientId: '2',
    doctorId: '1',
    date: '2024-01-25',
    items: [
      {
        drugId: '2',
        name: 'Ibuprofen 400mg',
        dose: '400mg',
        frequency: 'As needed',
        duration: '5 days',
        instructions: 'Take with food, maximum 3 times daily'
      }
    ],
    status: 'Preparing',
    createdAt: '2024-01-25T11:00:00Z'
  }
];

// Mock Inventory
export const mockInventory: InventoryItem[] = [
  {
    id: '1',
    drugCode: 'AMX500',
    name: 'Amoxicillin 500mg',
    form: 'Capsule',
    quantity: 150,
    minThreshold: 50,
    expiryDate: '2025-06-30',
    batchNumber: 'AMX2024001',
    supplier: 'PharmaCorp',
    unitPrice: 0.85,
    updatedAt: '2024-01-24T16:00:00Z'
  },
  {
    id: '2',
    drugCode: 'IBU400',
    name: 'Ibuprofen 400mg',
    form: 'Tablet',
    quantity: 25,
    minThreshold: 30,
    expiryDate: '2024-12-31',
    batchNumber: 'IBU2024002',
    supplier: 'MediSupply',
    unitPrice: 0.45,
    updatedAt: '2024-01-24T16:00:00Z'
  },
  {
    id: '3',
    drugCode: 'ACE10',
    name: 'Acetaminophen 500mg',
    form: 'Tablet',
    quantity: 200,
    minThreshold: 75,
    expiryDate: '2025-03-15',
    batchNumber: 'ACE2024003',
    supplier: 'PharmaCorp',
    unitPrice: 0.25,
    updatedAt: '2024-01-24T16:00:00Z'
  }
];

// Mock Lab Requests
export const mockLabRequests: LabRequest[] = [
  {
    id: '1',
    patientId: '1',
    doctorId: '1',
    tests: [
      { code: 'CBC', name: 'Complete Blood Count', category: 'Hematology' },
      { code: 'BMP', name: 'Basic Metabolic Panel', category: 'Chemistry' }
    ],
    priority: 'Normal',
    status: 'Pending',
    notes: 'Routine annual screening',
    createdAt: '2024-01-25T09:45:00Z'
  },
  {
    id: '2',
    patientId: '2',
    doctorId: '1',
    tests: [
      { code: 'STREP', name: 'Strep Test', category: 'Microbiology' }
    ],
    priority: 'Urgent',
    status: 'InProgress',
    notes: 'Patient has sore throat',
    createdAt: '2024-01-25T11:15:00Z'
  }
];

// Mock Lab Results
export const mockLabResults: LabResult[] = [
  {
    id: '1',
    requestId: '1',
    files: [
      { name: 'CBC_Results.pdf', url: '/mock/cbc_results.pdf' },
      { name: 'BMP_Results.pdf', url: '/mock/bmp_results.pdf' }
    ],
    values: [
      {
        testCode: 'WBC',
        testName: 'White Blood Cells',
        value: '7.2',
        unit: 'K/uL',
        normalRange: '4.0-11.0',
        status: 'Normal'
      },
      {
        testCode: 'RBC',
        testName: 'Red Blood Cells',
        value: '4.8',
        unit: 'M/uL',
        normalRange: '4.2-5.4',
        status: 'Normal'
      },
      {
        testCode: 'GLU',
        testName: 'Glucose',
        value: '95',
        unit: 'mg/dL',
        normalRange: '70-100',
        status: 'Normal'
      }
    ],
    releasedAt: '2024-01-24T14:30:00Z',
    releasedBy: '6'
  }
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    title: 'New Lab Results Available',
    message: 'Lab results for John Smith are ready for review',
    type: 'info',
    read: false,
    createdAt: '2024-01-25T14:30:00Z',
    actionUrl: '/dashboard/doctor/labs'
  },
  {
    id: '2',
    userId: '5',
    title: 'Low Stock Alert',
    message: 'Ibuprofen 400mg is running low (25 units remaining)',
    type: 'warning',
    read: false,
    createdAt: '2024-01-25T16:00:00Z',
    actionUrl: '/dashboard/pharmacy/inventory'
  },
  {
    id: '3',
    userId: '6',
    title: 'Urgent Test Request',
    message: 'New urgent strep test requested for Emily Johnson',
    type: 'error',
    read: true,
    createdAt: '2024-01-25T11:15:00Z',
    actionUrl: '/dashboard/lab/queue'
  }
];

// Mock Audit Logs
export const mockAuditLogs: AuditLog[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Dr. Sarah Johnson',
    action: 'CREATE',
    entity: 'Prescription',
    entityId: '1',
    details: 'Created prescription for John Smith',
    ipAddress: '192.168.1.100',
    timestamp: '2024-01-25T09:30:00Z'
  },
  {
    id: '2',
    userId: '3',
    userName: 'Nurse Mary Wilson',
    action: 'UPDATE',
    entity: 'Vitals',
    entityId: '1',
    details: 'Recorded vitals for John Smith',
    ipAddress: '192.168.1.101',
    timestamp: '2024-01-25T09:15:00Z'
  },
  {
    id: '3',
    userId: '2',
    userName: 'Admin User',
    action: 'CREATE',
    entity: 'User',
    entityId: '7',
    details: 'Created new user account for Anna Brown',
    ipAddress: '192.168.1.102',
    timestamp: '2024-01-18T08:00:00Z'
  }
];

// Mock Announcements
export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'System Maintenance Scheduled',
    content: 'The clinic management system will undergo maintenance on Sunday, January 28th from 2:00 AM to 6:00 AM. Please plan accordingly.',
    audience: ['ADMIN', 'DOCTOR', 'NURSE', 'PHARMACIST', 'LAB_TECH', 'RECEPTIONIST'],
    published: true,
    publishedAt: '2024-01-22T10:00:00Z',
    createdBy: '2',
    createdAt: '2024-01-22T09:45:00Z'
  },
  {
    id: '2',
    title: 'New Flu Vaccination Protocol',
    content: 'Updated flu vaccination guidelines are now available. Please review the new protocol in the medical procedures section.',
    audience: ['DOCTOR', 'NURSE'],
    published: true,
    publishedAt: '2024-01-20T14:00:00Z',
    createdBy: '2',
    createdAt: '2024-01-20T13:30:00Z'
  }
];

// Helper functions for generating mock data
export function generateMockUser(overrides: Partial<User> = {}): User {
  return {
    id: Math.random().toString(36).substr(2, 9),
    name: 'Mock User',
    email: 'mock@clinic.edu',
    role: 'PATIENT',
    active: true,
    createdAt: new Date().toISOString(),
    ...overrides
  };
}

export function generateMockPatient(overrides: Partial<Patient> = {}): Patient {
  return {
    id: Math.random().toString(36).substr(2, 9),
    mrn: Math.random().toString().substr(2, 6),
    firstName: 'Mock',
    lastName: 'Patient',
    dob: '1990-01-01',
    sex: 'Male',
    phone: '555-0000',
    email: 'mock.patient@clinic.edu',
    address: '123 Mock St, Mock City, MC 12345',
    emergencyFlag: false,
    createdAt: new Date().toISOString(),
    ...overrides
  };
}

export function generateMockAppointment(overrides: Partial<Appointment> = {}): Appointment {
  return {
    id: Math.random().toString(36).substr(2, 9),
    patientId: '1',
    doctorId: '1',
    date: new Date().toISOString().split('T')[0],
    time: '09:00',
    status: 'Scheduled',
    reason: 'Mock appointment',
    createdAt: new Date().toISOString(),
    ...overrides
  };
}

// Simulate API delay
export function simulateApiDelay(ms: number = 500): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}