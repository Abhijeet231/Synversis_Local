import { LayoutDashboard, Users, NotepadText, ClipboardCheck, ChartColumn, Settings, Icon } from "lucide-react"
import { NavLink } from "react-router-dom"

const navItems = [
    {to: "/", label: "Dashboard", icon: LayoutDashboard },
    {to: "/client-managment", label: "Client Managment", icon: Users},
    {to: "/checklist-builder", label: "Checklist Builder", icon: NotepadText},
    {to:"/assigned-checklist", label:"Assigned Checklist", icon: ClipboardCheck},
    {to:"/reports-analytics", label:"Reports & Analytics", icon: ChartColumn},
    {to:"/setting", label:"Settings", icon:Settings}

]

const SideNavbar = () => {

    const [isActive, setIsActive] = [true]

  return (
    <div className="p-4 space-y-3 ml-auto">
        {navItems.map(({to, label, icon: Icon}) => (
            <NavLink
              key={to}
              to={to}
              className={({isActive}) => `flex items-center p-2 text-sm rounded-md ${isActive ? "bg-sky-100 text-sky-700" : "text-gray-700 hover:bg-gray-100"}`}
            >

                <div className={`p-2 rounded-lg transition-all ${isActive ? "bg-sky-800 text-white" : "text-gray-400"} `}>
                    <Icon size={20}/>
                </div>
                <div className="ml-3">
                    {label}
                </div>
 
            </NavLink>
        ))}

    </div>
  )
}

export default SideNavbar