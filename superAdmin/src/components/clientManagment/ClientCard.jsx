import { Building, Eye, Mail, SquarePen, Trash } from "lucide-react";


const ClientCard = ({compamyName, ContactInfo, activeStatus, subscriptionType, duration, usage = 60}) => {
  return (
    <div className="border border-gray-400 p-5 space-y-4  rounded-xl shadow-md ">

      <section className="flex flex-wrap items-start gap-3">
         <div className="p-2 rounded-lg bg-sky-100 text-sky-700 shrink-0">
          <Building className="w-5 h-5"/>
         </div>

         <div className=" min-w-0" >
          <h2 className="font-semibold text-sky-900 truncate"> {compamyName}</h2>

          <h3 className="text-sm text-gray-500 truncate flex items-center gap-1">
            <Mail className="h-3 w-3 shrink-0 text-sky-800"/>
             <span className="truncate">{ContactInfo}</span>
             </h3>
         </div>
         <span className="ml-auto text-xs px-3 py-1 rounded-full bg-green-100 text-gray-600 ">{activeStatus}</span>

      </section>

      {/* // Infor rows */}
      <section className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 text-sm">Membership</span>
          <span className="px-3 py-1 rounded-full bg-purple-100 text-sm text-black">{subscriptionType}</span>

        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 text-sm">Duration</span>
          <span className="px-3 py-1 rounded-full text-sm">{duration}</span>

        </div>

        <div className="space-y-1">
        <div className="flex justify-between">
            <span className="text-gray-500">Usage</span>
            <span className="text-sky-900">{usage}%</span>
          </div>

          <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full bg-sky-600"
              style={{ width: `${usage}%` }}
            />
          </div>
        </div>

      </section>

      {/* //Last Section */}
      <section className="flex items-center gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 text-sky-700 font-semibold">
          <Eye className="w-4 h-4"/>
          View
          

        </button>

        <button className="p-2 border rounded-lg">
          <SquarePen className="w-4 h-4 text-sky-800 "/>

        </button>

        <button className="p-2 border rounded-lg">
          <Trash className="w-4 h-4 text-sky-800"/>

        </button>

      </section>

    </div>
  );
};

export default ClientCard;
