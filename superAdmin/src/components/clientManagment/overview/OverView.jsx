import AccountInfo from "./AccountInfo"
import Usage from "./Usage"
import SummaryCard from "./SummaryCard"
import { Box, FileText, ReceiptText } from "lucide-react"

const OverView = () => {
  return (
    <>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6  mb-6">
        {/* // Account Info */}
        <div>
          <AccountInfo/>
        </div>

        <div>
           <Usage/>
        </div>

      </div>

      {/* Summary Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        <SummaryCard icon={Box} headtext="Assets" pText="Manage customer assets" endText="Total Assets" endData={24}/>

        <SummaryCard icon={FileText} headtext="Checklist" pText="View Form Submissions" endData={12}/>

        <SummaryCard icon={ReceiptText} headtext="Billing" pText="View biling history" endText="Total Invoices" endData={18}/>
      </div>
    </>
  )
}

export default OverView