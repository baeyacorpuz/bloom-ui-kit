export const Menu = [
  {
    to: '/hospital',
    label: 'Hospital Performance',
    items: [
      { key: "/dashboard", label: "Dashboard" },
      { key: "/department", label: "Departments" },
      { key: "/report", label: "Reports" },
    ],
    activePath: ['hospital/dashboard', 'hospital/department', 'hospital/report']
  },
  {
    to: '/patient',
    label: 'Patients Dashboard',
    items: [
      { key: "/profile", label: "Patient Profile" },
    ],
    activePath: ['patient/dashboard', 'patient/profile']
  },
  {
    to: '/doctor',
    label: 'Doctors Dashboard',
    items: [
      { key: "/profile", label: "Doctor Profile" },
    ]
  }
]