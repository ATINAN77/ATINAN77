import { 
  mockUsers, mockPatients, mockAppointments, mockPrescriptions, 
  mockInventory, mockLabRequests, mockLabResults, mockNotifications,
  mockAuditLogs, mockAnnouncements, DEMO_CREDENTIALS, simulateApiDelay
} from '../mocks/db';
import { 
  User, Patient, Appointment, Prescription, InventoryItem,
  LabRequest, LabResult, Notification, AuditLog, Announcement,
  DashboardStats, UserRole
} from '../types';

// Mock authentication
export const mockAuthApi = {
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    await simulateApiDelay();
    
    // Check demo credentials
    const credential = Object.values(DEMO_CREDENTIALS).find(
      cred => cred.email === email && cred.password === password
    );
    
    if (!credential) {
      throw new Error('Invalid credentials');
    }
    
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      throw new Error('User not found');
    }
    
    const token = `mock-jwt-token-${user.id}-${Date.now()}`;
    
    return { user, token };
  },

  async register(userData: Partial<User> & { password: string }): Promise<{ user: User; token: string }> {
    await simulateApiDelay();
    
    // Check if email already exists
    if (mockUsers.some(u => u.email === userData.email)) {
      throw new Error('Email already exists');
    }
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name || 'New User',
      email: userData.email || '',
      role: userData.role || 'PATIENT',
      active: true,
      createdAt: new Date().toISOString(),
    };
    
    mockUsers.push(newUser);
    const token = `mock-jwt-token-${newUser.id}-${Date.now()}`;
    
    return { user: newUser, token };
  },
};

// Mock dashboard stats
export const mockStatsApi = {
  async getDashboardStats(): Promise<DashboardStats> {
    await simulateApiDelay(200);
    
    return {
      totalUsers: mockUsers.length,
      activeAppointments: mockAppointments.filter(a => a.status === 'Scheduled' || a.status === 'CheckedIn').length,
      pendingLabRequests: mockLabRequests.filter(r => r.status === 'Pending').length,
      lowStockItems: mockInventory.filter(i => i.quantity <= i.minThreshold).length,
      todayAppointments: mockAppointments.filter(a => a.date === new Date().toISOString().split('T')[0]).length,
      waitingPatients: mockAppointments.filter(a => a.status === 'CheckedIn').length,
      urgentTests: mockLabRequests.filter(r => r.priority === 'Urgent' || r.priority === 'STAT').length,
      newPrescriptions: mockPrescriptions.filter(p => p.status === 'New').length,
    };
  },
};

// Mock users API
export const mockUsersApi = {
  async getUsers(): Promise<User[]> {
    await simulateApiDelay();
    return [...mockUsers];
  },

  async createUser(userData: Partial<User>): Promise<User> {
    await simulateApiDelay();
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: userData.name || 'New User',
      email: userData.email || '',
      role: userData.role || 'PATIENT',
      active: userData.active ?? true,
      createdAt: new Date().toISOString(),
    };
    
    mockUsers.push(newUser);
    return newUser;
  },

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    await simulateApiDelay();
    
    const userIndex = mockUsers.findIndex(u => u.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...userData };
    return mockUsers[userIndex];
  },

  async deleteUser(id: string): Promise<void> {
    await simulateApiDelay();
    
    const userIndex = mockUsers.findIndex(u => u.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    
    mockUsers.splice(userIndex, 1);
  },
};

// Mock patients API
export const mockPatientsApi = {
  async getPatients(): Promise<Patient[]> {
    await simulateApiDelay();
    return [...mockPatients];
  },

  async getPatient(id: string): Promise<Patient> {
    await simulateApiDelay();
    
    const patient = mockPatients.find(p => p.id === id);
    if (!patient) {
      throw new Error('Patient not found');
    }
    
    return patient;
  },

  async createPatient(patientData: Partial<Patient>): Promise<Patient> {
    await simulateApiDelay();
    
    const newPatient: Patient = {
      id: Math.random().toString(36).substr(2, 9),
      mrn: Math.random().toString().substr(2, 6),
      firstName: patientData.firstName || '',
      lastName: patientData.lastName || '',
      dob: patientData.dob || '',
      sex: patientData.sex || 'Male',
      phone: patientData.phone || '',
      email: patientData.email || '',
      address: patientData.address || '',
      emergencyFlag: patientData.emergencyFlag || false,
      createdAt: new Date().toISOString(),
      ...patientData,
    };
    
    mockPatients.push(newPatient);
    return newPatient;
  },

  async updatePatient(id: string, patientData: Partial<Patient>): Promise<Patient> {
    await simulateApiDelay();
    
    const patientIndex = mockPatients.findIndex(p => p.id === id);
    if (patientIndex === -1) {
      throw new Error('Patient not found');
    }
    
    mockPatients[patientIndex] = { ...mockPatients[patientIndex], ...patientData };
    return mockPatients[patientIndex];
  },
};

// Mock appointments API
export const mockAppointmentsApi = {
  async getAppointments(): Promise<Appointment[]> {
    await simulateApiDelay();
    return [...mockAppointments];
  },

  async createAppointment(appointmentData: Partial<Appointment>): Promise<Appointment> {
    await simulateApiDelay();
    
    const newAppointment: Appointment = {
      id: Math.random().toString(36).substr(2, 9),
      patientId: appointmentData.patientId || '',
      doctorId: appointmentData.doctorId || '',
      date: appointmentData.date || '',
      time: appointmentData.time || '',
      status: appointmentData.status || 'Scheduled',
      reason: appointmentData.reason || '',
      createdAt: new Date().toISOString(),
      ...appointmentData,
    };
    
    mockAppointments.push(newAppointment);
    return newAppointment;
  },

  async updateAppointment(id: string, appointmentData: Partial<Appointment>): Promise<Appointment> {
    await simulateApiDelay();
    
    const appointmentIndex = mockAppointments.findIndex(a => a.id === id);
    if (appointmentIndex === -1) {
      throw new Error('Appointment not found');
    }
    
    mockAppointments[appointmentIndex] = { ...mockAppointments[appointmentIndex], ...appointmentData };
    return mockAppointments[appointmentIndex];
  },
};

// Export all mock APIs
export const mockApi = {
  auth: mockAuthApi,
  stats: mockStatsApi,
  users: mockUsersApi,
  patients: mockPatientsApi,
  appointments: mockAppointmentsApi,
  // Add other APIs as needed
};