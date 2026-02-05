import {
  Building,
  Contact,
  Mail,
  Phone,
  Globe,
  Edit,
  UserX,
  Box,
  ReceiptText,
  FileText
} from "lucide-react";
import CompanydetailsCard from "../components/clientManagment/CompanydetailsCard";
import AccountInfo from "../components/clientManagment/overview/AccountInfo";
import Usage from "../components/clientManagment/overview/Usage";
import SummaryCard from "../components/clientManagment/overview/SummaryCard";
import { Link, Outlet } from "react-router-dom";

const ViewClient = ({
  CompanyName = "Acme Corporation",
  email = "contact@03gmail.com",
  phone = "+1449328032",
  activeStatus = "Active",
  subscriptionType = "Premium",
  website = "www.acme.com",
  users = 12,
  activeChecklist = 8,
  assets = 159,
  submissions = 241,
  lastActive = 2,
}) => {
  return (
    <div className="mt-5 p-5">
      {/* // Header part with Copany Info and edit options */}
      <div className="flex items-start  gap-3 mt-5">
        {/* //CopanyLogo */}
        <div className="p-2 ">
          <Building className="h-10 w-10 text-sky-700" />
        </div>

        <div>
          <h2 className="text-sky-800 font-semibold text-lg">{CompanyName}</h2>
          <p className="text-gray-600 flex gap-1 items-center justify-center">
            <Mail className="h-4 w-4" />
            {email}
          </p>
        </div>

        <div className=" flex-col p-2 ml-5  ">
          <span className="text-green-600 bg-green-100 rounded-lg px-3 py-0.5 border mr-3 text-xs align-top">
            Active
          </span>
          <span className="text-purple-700  rounded-lg border bg-purple-100 px-3 py-0.5 text-xs align-top">
            Premium
          </span>

          <p className="text-sm text-gray-700">{phone}</p>
          <p className="text-sm text-gray-600">
            <Globe className="h-4 w-4 inline mr-2 " />
            {website}
          </p>
        </div>

        {/* // Edit Buttons and Disable */}
        <div className="ml-auto mr-5 flex gap-2 flex-wrap">

          <button className="border rounded-xl px-4 py-2  font-semibold mr-3 bg-sky-800 text-white text-sm whitespace-nowrap">
            <span className="flex items-center gap-1">

            <Edit className="inline mr-4 h-5 w-5" />
            <span className="text-xs">Edit Customer</span>
            </span>

          </button>

            

          <button className="border rounded-xl px-4 py-2 font-semibold ml-4 border-gray-500 text-sm whitespace-nowrap bg-gray-200">
            <span className="flex items-center gap-1">

            <UserX className="inline mr-4 h-5 w-5" />
            <span className="text-xs ">Disable</span>
            </span>
          </button>
        </div>
      </div>

      {/* // Company Details */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        <CompanydetailsCard />
        <CompanydetailsCard />
        <CompanydetailsCard />
        <CompanydetailsCard />
      </div>

      {/* // Menu Bar for Client Details */}
      <div className="border border-gray-300 bg-amber-50/20 p-1 flex justify-around mt-8 rounded-xl">
        <Link
        to={''}
        className="text-sky-700 font-semibold hover:cursor-pointer transition-all">Overview</Link>

        <Link
        to={'subscription'}
        className="text-sky-700 font-semibold hover:cursor-pointer transition-all">Subscription</Link>

        <Link
        to={'settings'}
        className="text-sky-700 font-semibold hover:cursor-pointer transition-all">Settings</Link>
      </div>

      {/* // Account Info and Usages Overview Section */}

      <Outlet/>
    </div>
  );
};

export default ViewClient;
