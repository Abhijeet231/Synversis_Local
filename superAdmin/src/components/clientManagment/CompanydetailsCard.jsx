import { Building, Users } from "lucide-react"

const CompanydetailsCard = (
    {
       icon = <Building/>,
       name ="Users",
       data =8,
       endText="This is end text"
    }
) => {
  return (
    <div className='border border-gray-200 shadow-md rounded-lg mt-4 p-5 bg-amber-50/20 space-y-3 '>
        
        {/* Top Row */}
      <div className=" flex items-start  gap-3 ">
       <div className=" p-2 rounded-lg bg-sky-100 text-sky-700 ">
         {icon}
       </div>

        <div>
            <p className="text-sky-700 text-sm font-semibold">{name}</p>
            <p className="text-lg font-semibold ">{data}</p>
        </div>
      </div>
    {/* // Footer text */}
      <p className="text-gray-500 text-xs">{endText}</p>
       
    </div>
  )
}

export default CompanydetailsCard