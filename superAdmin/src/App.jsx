import SideNavbar from "./components/SideNavbar"
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"





const App = () => {
  return (
    <>
       <div className="flex h-screen">
      {/*  Side-Navbar */}

      <div>
       <aside className="w-auto border-r bg-white">
         <SideNavbar />
       </aside>
      </div>

      {/* Navbar + Main area */}
      <div className="flex flex-col flex-1">
         {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50  ">
          <div className="max-w-360 mx-auto p-5">
            <Outlet/>
          </div>
          </main>
      </div>
    </div>
    </>
  )
}

export default App