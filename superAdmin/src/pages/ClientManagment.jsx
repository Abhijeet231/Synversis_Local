import { Funnel, ChevronDown, Search, Users, Building,ClockAlert, UserStar } from "lucide-react";
import OverViewCard from "../components/clientManagment/OverViewCard";
import ClientCard from "../components/clientManagment/ClientCard";

const ClientManagment = () => {
  return (
    //Parent Div
    <div className=" p-2 ">
      {/* // Top Section */}
      <section className="flex justify-between align-middle mb-5">
        <div>
          <h1 className="text-sky-900 font-semibold text-xl">
            Client Managment
          </h1>
          <p className="text-gray-700 text-sm">
            Manage Customer accounts and memberships
          </p>
        </div>

        <div>
          <button className="bg-sky-900 text-white rounded-xl px-4 py-1 text-sm flex items-center text-center gap-2">
            + Add Customers <span className="text-red-600"> *</span>
          </button>
        </div>
      </section>

      {/* Searchbar and filters*/}
      <section className="flex flex-col sm:flex-row gap-4">
        {/* //first Div */}
        <div className="relative w-full max-w-5xl ">
            <label htmlFor="searchBar">
                <Search className=" absolute top-2 left-2 text-gray-500 w-6 h-6"/>
          <input
            type="text"
            id="searchBar"
            placeholder="Search Customers"
            className="px-8 py-2 rounded-xl w-full border bg-gray-50 "
          />
          </label>
        </div>

        {/* // Second Div */}
        <div className="flex gap-2 items-center">

          <button className="px-5 py-2 text-center text-gray-600 bg-gray-200 rounded-xl whitespace-nowrap ">
            <span className="flex items-center gap-2">
              <Funnel className="w-4 h-4" />
              <span className="text-xs">All Status</span>
              <ChevronDown className="w-4 h-4" />
            </span>
          </button>

          <button className="px-5 py-2 text-center text-gray-600 bg-gray-200 rounded-xl whitespace-nowrap">
            <span className="flex items-center gap-2">
              <Funnel className="w-4 h-4" />
              <span className="text-xs">All Memberships</span>
              <ChevronDown className="w-4 h-4" />
            </span>
          </button>

        </div>
      </section>

    {/* All Companies in Gird Layout */}
    <section className="mt-5">
        {/* // OVerview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">

           <OverViewCard name="Total Customers" number="120" icon={<Users/>} />

           <OverViewCard name="Active Customers" number="85" icon={<UserStar/>} />

           <OverViewCard name="Enterprice" number="35" icon={<Building/>} />

           <OverViewCard name="Pending Customers" number="10" icon={<ClockAlert/>} />
        </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        
        <ClientCard compamyName="Tech Solutions Inc." ContactInfo="contact@techsolutions.com" activeStatus="Active" subscriptionType="Enterprise" duration="12 months" usage={78}/>
        <ClientCard compamyName="GreenLeaf Organics" ContactInfo="contact@greenleaf.com" activeStatus="Active" subscriptionType="Premium" duration="6 months" usage={45}/>
        <ClientCard compamyName="BlueWave Technologies" ContactInfo="contact@bluewave.com" activeStatus="Inactive" subscriptionType="Basic" duration="3 months" usage={20}/>
        <ClientCard compamyName="Sunrise Ventures" ContactInfo="contact@sunrise.com" activeStatus="Pending" subscriptionType="Trial" duration="1 month" usage={10}/>
          <ClientCard compamyName="Tech Solutions Inc." ContactInfo="contact@techsolutions.com" activeStatus="Active" subscriptionType="Enterprise" duration="12 months" usage={90}/>
           <ClientCard compamyName="Synchronize Solutions Inc." ContactInfo="sync@techsl.com" activeStatus="Active" subscriptionType="Trial" duration="7 months" usage={37}/>
           <ClientCard compamyName="TeslaAuto Solutions Inc." ContactInfo="tesla@techsl.com" activeStatus="Active" subscriptionType="Premium" duration="24 months" usage={69}/>
           <ClientCard compamyName="TataParts Solutions Inc." ContactInfo="tataauto@techsl.com" activeStatus="pending" subscriptionType="Trial" duration="7 months" usage={55}/>
        
    </section>

    </div>
  );
};

export default ClientManagment;
