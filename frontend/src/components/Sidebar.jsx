import { NavLink } from "react-router-dom";

const menuSections = [
  {
    title: "MAIN",
    items: [
      { label: "Dashboard", path: "/", icon: "▦" },
    ],
  },
  {
    title: "PATIENT CARE",
    items: [
      { label: "Patients", path: "/patients", icon: "♙" },
      { label: "Visits", path: "/visits", icon: "◉" },
      { label: "Admissions", path: "/admissions", icon: "▣" },
      { label: "Beds", path: "/beds", icon: "▥" },
    ],
  },
  {
    title: "CLINICAL",
    items: [
      { label: "Diagnoses", path: "/diagnoses", icon: "✚" },
      { label: "Prescriptions", path: "/prescriptions", icon: "Rx" },
      { label: "Laboratory", path: "/laboratory", icon: "⌬" },
    ],
  },
  {
    title: "PHARMACY",
    items: [
      { label: "Medicines", path: "/pharmacy", icon: "⚕" },
      { label: "Inventory", path: "/inventory", icon: "▤" },
      { label: "Dispensing", path: "/dispensing", icon: "▰" },
    ],
  },
  {
    title: "ADMINISTRATION",
    items: [
      { label: "Staff", path: "/staff", icon: "♙" },
      { label: "Doctors", path: "/doctors", icon: "⚕" },
      { label: "Nurses", path: "/nurses", icon: "♧" },
      { label: "Billing", path: "/billing", icon: "¤" },
      { label: "Reports", path: "/reports", icon: "▥" },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">✚</div>

        <div>
          <div className="brand-name">HOMIS</div>
          <div className="brand-subtitle">Hospital Operations</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuSections.map((section) => (
          <div className="nav-section" key={section.title}>
            <div className="nav-section-title">{section.title}</div>

            {section.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
