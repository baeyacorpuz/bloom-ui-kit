export const Menu = [
  {
    to: 'hospital',
    label: 'Hospital Performance',
    collapsed: false,
    items: [
      { key: "hospital/dashboard", label: "Dashboard" },
      { key: "hospital/department", label: "Departments" },
      { key: "hospital/task-board", label: "Task Board" },
      { key: "hospital/report", label: "Reports" },
    ],
  },
  {
    to: 'patient',
    label: 'Patients History',
    collapsed: true,
    items: [
      { key: "patient/dashboard", label: "Dashboard" },
      { key: "patient/profile", label: "Patient Profile" },
    ],
    activePath: ['patient/dashboard', 'patient/profile']
  },
  {
    to: 'doctor',
    label: 'Doctors Profile',
    collapsed: true,
    items: [
      { key: "doctor/profile", label: "Doctor Profile" },
    ]
  },
  {
    to: 'donation',
    label: 'History of Donation',
    collapsed: true,
    items: [
      { key: "donation/dashboard", label: "Dashboard" },
    ]
  }
]