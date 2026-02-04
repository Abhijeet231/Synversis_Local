import {
  Building,
  Contact,
  Mail,
  Phone,
  Globe,
  Edit,
  UserX,
} from "lucide-react";
import CompanydetailsCard from "../components/clientManagment/CompanydetailsCard";

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
          <Building className="h-14 w-14 text-sky-700" />
        </div>

        <div>
          <h2 className="text-sky-800 font-semibold text-2xl">{CompanyName}</h2>
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
        <div className="ml-auto mr-5">
          <button className="border rounded-xl px-4 py-2  font-semibold mr-3 bg-sky-800 text-white ">
            <Edit className="inline mr-4" />
            Edit Customer
          </button>

          <button className="border rounded-xl px-4 py-2 font-semibold ml-4 border-gray-500">
            <UserX className="inline mr-4" />
            Disable
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
        <button className="text-sky-700 font-semibold">Overview</button>

        <button className="text-sky-700 font-semibold">Subscription</button>

        <button className="text-sky-700 font-semibold">Settings</button>
      </div>

      {/* // Account Info and Usages Overview Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
        {/* // Account Info */}
        <div className="bg-amber-50/20 ">
          Account Info</div>

        <div>Usages Overview</div>
      </div>
    </div>
  );
};

export default ViewClient;
