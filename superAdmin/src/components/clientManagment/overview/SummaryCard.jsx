import { FileText,ReceiptText, Box, MoveRight } from "lucide-react"

const SummaryCard = ({
  icon = FileText,
   headtext ="Assets",
    pText = "Manage customer assets",
     endText = "Total assets",
      endData = 23
    }) => {

      const Icon = icon
  return (
    
    <div className=' border border-gray-100 shadow-md bg-amber-50/20 p-5 space-y-5 rounded-2xl'>
         <div className="flex items-start justify-between">
            <div className="p-2 rounded-lg bg-sky-100 text-sky-700">
              <Icon className="w-5 h-5"/>
            </div>
             <MoveRight className="w-4 h-4 text-gray-400"/>
         </div>

         <p className="text-lg text-sky-700"> {headtext}</p>

         <p className="text-gray-600 text-sm">{pText}</p>

         <div className="flex items-center justify-between text-sm text-gray-600">
          <p>{endText}</p>
          <p className="font-medium text-gray-900">{endData}</p>
         </div>
    </div>
  )
}

export default SummaryCard