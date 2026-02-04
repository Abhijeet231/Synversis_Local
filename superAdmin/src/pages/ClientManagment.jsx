import { Funnel, ChevronDown, Search, Users, Building,ClockAlert, UserStar } from "lucide-react";
import OverViewCard from "../components/clientManagment/OverViewCard";
import ClientCard from "../components/clientManagment/ClientCard";

const ClientManagment = () => {
  return (
    //Parent Div
    <div className="parent m-5">
      {/* // Top Section */}
      <section className="flex justify-between align-middle mb-5">
        <div>
          <h1 className="text-sky-900 font-semibold text-2xl">
            Client Managment
          </h1>
          <p className="text-gray-700">
            Manage Customer accounts and memberships
          </p>
        </div>

        <div>
          <button className="bg-sky-900 text-white rounded-2xl px-4 py-2">
            + Add Customers <span className="text-red-600"> *</span>
          </button>
        </div>
      </section>

      {/* Searchbar and filters*/}
      <section className="flex justify-between gap-4">
        {/* //first Div */}
        <div className="relative sm:w-7xl w-full">
            <label htmlFor="searchBar">
                <Search className=" absolute top-3 left-2 text-gray-500 w-6 h-6"/>
          <input
            type="text"
            id="searchBar"
            placeholder="Search Customers"
            className="px-8 py-3 rounded-xl w-full border bg-gray-200 "
          />
          </label>
        </div>

        {/* // Second Div */}
        <div className="flex gap-2">

          <button className="px-8 py-3 text-center text-gray-600 bg-gray-200 rounded-xl ">
            <span className="flex items-center gap-2">
              <Funnel className="w-4 h-4" />
              <span>All Status</span>
              <ChevronDown className="w-4 h-4" />
            </span>
          </button>

          <button className="px-8 py-3 text-center text-gray-600 bg-gray-200 rounded-xl ">
            <span className="flex items-center gap-2">
              <Funnel className="w-4 h-4" />
              <span>All Memberships</span>
              <ChevronDown className="w-4 h-4" />
            </span>
          </button>

        </div>
      </section>

    {/* All Companies in Gird Layout */}
    <section className="mt-5">
        {/* // OVerview */}
        <div className="grid grid-cols-4 gap-5 p-5">

           <OverViewCard name="Total Customers" number="120" icon={<Users/>} />

           <OverViewCard name="Active Customers" number="85" icon={<UserStar/>} />

           <OverViewCard name="Enterprice" number="35" icon={<Building/>} />

           <OverViewCard name="Pending Customers" number="10" icon={<ClockAlert/>} />
        </div>
    </section>

    <section className="grid grid-cols-4 gap-5">
        
        <ClientCard compamyName="Tech Solutions Inc." ContactInfo="contact@techsolutions.com" activeStatus="Active" subscriptionType="Enterprise" duration="12 months"/>
        <ClientCard compamyName="Tech Solutions Inc." ContactInfo="contact@techsolutions.com" activeStatus="Active" subscriptionType="Enterprise" duration="12 months"/>
        <ClientCard compamyName="Tech Solutions Inc." ContactInfo="contact@techsolutions.com" activeStatus="Active" subscriptionType="Enterprise" duration="12 months"/>
        <ClientCard compamyName="Tech Solutions Inc." ContactInfo="contact@techsolutions.com" activeStatus="Active" subscriptionType="Enterprise" duration="12 months"/>
        <ClientCard compamyName="Tech Solutions Inc." ContactInfo="contact@techsolutions.com" activeStatus="Active" subscriptionType="Enterprise" duration="12 months"/>
        <ClientCard compamyName="Tech Solutions Inc." ContactInfo="contact@techsolutions.com" activeStatus="Active" subscriptionType="Enterprise" duration="12 months"/>
    </section>

    </div>
  );
};

export default ClientManagment;
