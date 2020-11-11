// export const Menu = [
//   {
//     to: 'hospital',
//     label: 'Hospital Performance',
//     collapsed: false,
//     items: [
//       { key: "/dashboard", label: "Dashboard" },
//       { key: "/department", label: "Departments" },
//       { key: "/report", label: "Reports" },
//     ],
//     activePath: ['hospital/dashboard', 'hospital/department', 'hospital/report']
//   },
//   {
//     to: 'patient',
//     label: 'Patients Dashboard',
//     collapsed: true,
//     items: [
//       { key: "/profile", label: "Patient Profile" },
//     ],
//     activePath: ['patient/dashboard', 'patient/profile']
//   },
//   {
//     to: 'doctor',
//     label: 'Doctors Dashboard',
//     collapsed: true,
//     items: [
//       { key: "/profile", label: "Doctor Profile" },
//     ]
//   }
// ]

export const Menu = [
  {
    to: 'dashboard',
    label: 'Dashboard',
    collapsed: false,
    items: [
      {key: 'dashboard1', label: 'Dashboard 1'},
      {key: 'dashboard2', label: 'Dashboard 2'}
    ],
    activePath: ['/dashboard']
  },
  {
    to: 'ui-elements',
    label: 'UI Elements',
    collapsed: false,
    activePath: ['/ui-elements'],
    items: [
      {key: 'dashboard2', label: 'Dashboard 2'}
    ]
  },
  {
    to: 'd',
    label: 'UI Elements',
    collapsed: false,
    activePath: ['/ui-elements'],
    items: [
      {key: 'dashboard1', label: 'Dashboard 1'},
    ]
  },
]