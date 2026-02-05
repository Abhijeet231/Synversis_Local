import { MapPin, Calendar, Clock } from "lucide-react"

const AccountInfo = () => {
  return (
    <div className='border border-gray-100 shadow-md bg-amber-50/20 p-5 space-y-8 rounded-2xl mt-5'>
        <h1 className='ml-auto text-lg text-sky-800  mb-10'>Account Information</h1>

{/* // Customer ID */}
        <div className='flex justify-between items-start border-b border-gray-300 '>
            <p className="text-gray-600" >Customer Id</p>
            <p className="text-right max-w-xs text-sky-900">1</p>
        </div>

        {/* Address */}
        <div className="flex justify-between items-start border-b border-gray-300
        ">
            <div className="flex items-center gap-2 ">
                <MapPin className="h-5 w-5"/>
            <p className="text-gray-600">Address</p>
            </div>
            
            <p className="text-right max-w-xs text-sky-900 ">123 Business St, San Francisco, CA,8312</p>
        </div>

        {/* StartDate */}
        <div className="flex justify-between items-start border-b border-gray-300">
         <div className="flex items-center gap-2">
                  <Calendar className="h-5 w5"/>
                  <p className="text-gray-600">Start Date</p>
         </div>

         <p className="text-right max-w-xs text-sky-900">Jan 15, 2026</p>
        </div>

        {/* End Date */}
        <div className="flex justify-between items-start border-b border-gray-300">
         <div className="flex items-center gap-2">
                  <Calendar className="h-5 w5"/>
                  <p className="text-gray-600">End Date</p>
         </div>

         <p className="text-right max-w-xs text-sky-900">Dec 25, 2026</p>
        </div>

        {/* Days Remaining */}
        <div className="flex justify-between items-start ">
         <div className="flex items-center gap-2">
                  <Clock className="h-5 w5"/>
                  <p className="text-gray-600">Days Remaining</p>
         </div>

         <p className="text-right max-w-xs text-sky-900">345</p>
        </div>
          
    </div>
  )
}

export default AccountInfo