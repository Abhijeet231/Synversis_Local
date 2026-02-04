import { Building, Eye, SquarePen, Trash } from "lucide-react";

const ClientCard = ({compamyName, ContactInfo, activeStatus, subscriptionType, duration}) => {
  return (
    <div className="border border-gray-100 p-10 bg-amber-50/20 shadow-xl shadow-black/10 rounded-xl w-full ">
      <section>
        <div>
          <Building />
          <h3> {compamyName}</h3>
          <p>{ContactInfo}</p>
        </div>

        <p>{activeStatus}</p>
      </section>

      <section>
       <div>
        <span>Membership</span>
        <span>{subscriptionType}</span>
       </div>

       <div>
        <span>Duration</span>
        <span>{duration}</span>
       </div>

       <div>
        <span>Usage</span>
        <span></span>
       </div>

      </section>

      <section>
        <button>
           <Eye/>
           View
           <span className="text-red-600">*</span>
        </button>

        <button>
           <SquarePen/>
        </button>

        <button>
         <Trash/>
        </button>
      </section>
    </div>
  );
};

export default ClientCard;
