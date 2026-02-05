import { Search, Bell, User  } from "lucide-react"


const Navbar = () => {
  return (
    <div>
        {/* //SearchBar */}
        <div className="w-full h-14 border-b bg-white px-6 ">
      <div className="h-full flex items-center justify-between gap-4">
        
        {/* LEFT: Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search assets, checklist, team members..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search/>
            </span>
          </div>
        </div>

        {/* RIGHT: Icons + user */}
        <div className="flex items-center gap-4">
          
          {/* Notification */}
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <Bell/>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600"></span>
          </button>

         

          {/* User */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center font-medium">
              <User/>
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-medium">Sarah Chen</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    </div>
  )
}

export default Navbar