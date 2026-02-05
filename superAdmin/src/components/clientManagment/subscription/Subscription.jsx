import { CircleCheck, TrendingUp } from "lucide-react";

const Subscription = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-amber-50/20 rounded-2xl gap-3 mt-5 ">
      <div className="col-span-7 border border-gray-200 p-4  rounded-2xl">
        <h1 className="ml-auto text-lg text-sky-700 mt-1 mb-3 ">
          Current Plan
        </h1>

        <div className="border border-purple-200  rounded-2xl bg-purple-50 px-4 py-2">
          <div className="flex justify-between gap-4">
            <div>
              <h3 className="text-purple-800 text-lg text-left">Enterprise</h3>
              <p className="text-purple-500 text-xs text-left mt-1">
                Premium business features
              </p>
            </div>

            <div>
              <p className="text-purple-800 text-2xl text-right">
                $299 per month
              </p>
            </div>
          </div>

          <div className="space-y-3 mt-3">
            <div className="flex items-start gap-3">
              <span>
                <CircleCheck className="h-5 w-5 text-purple-600" />
              </span>

              <span>
                <p className="text-sm text-sky-800">Up to 50 user licenses</p>
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span>
                <CircleCheck className="h-5 w-5 text-purple-600" />
              </span>

              <span>
                <p className="text-sm text-sky-800">10 GB Storage</p>
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span>
                <CircleCheck className="h-5 w-5 text-purple-600" />
              </span>

              <span>
                <p className="text-sm text-sky-800">Priority Support</p>
              </span>
            </div>

            <div className="flex items-start gap-3">
              <span>
                <CircleCheck className="h-5 w-5 text-purple-600" />
              </span>

              <span>
                <p className="text-sm text-sky-800">Advanced analytics.</p>
              </span>
            </div>
          </div>
        </div>
        {/* Upgrade Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 px-4 py-2 mt-3">
          {/* Primary */}
          <button
            className="md:col-span-8 flex items-center justify-center gap-2
               rounded-2xl bg-amber-500 text-white
               py-2 font-semibold hover:bg-amber-600 transition"
          >
            <TrendingUp className="w-4 h-4" />
            Upgrade Plan
          </button>

          {/* Secondary */}
          <button
            className="md:col-span-4 flex items-center justify-center
               rounded-2xl bg-gray-200 text-gray-700
               py-2 px-4 font-medium whitespace-nowrap
               hover:bg-gray-300 transition"
          >
            Change Plan
          </button>
        </div>
      </div>

{/* // BILL CYCLE SECTION */}
      <div className="col-span-5 border border-gray-200 p-4 rounded-2xl">
      
       <h3 className="ml-auto text-lg text-sky-700 mt-1 mb-8">Billing Cycle</h3>
       
      <div className="space-y-4 mt-4">
         {/* Billing Period */}
       <div className="flex justify-between ">
          <p className="text-gray-600 text-sm">Billing Period</p>
          <p className="text-sky-700">Monthly</p>
       </div>

       {/* Next Bill Date */}
       <div className="flex justify-between">
        <p className="text-gray-600 text-sm">Next Bill Date</p>
        <p className="text-sky-700 text-sm">Jul 15, 2027</p>
       </div>

       {/* Amount */}
       <div className="flex justify-between"> 
           <p className="text-gray-600 text-sm">Amount</p>
           <p className="text-sm text-sky-700">$299.00</p>
       </div>

       {/* Payment Method */}
       <div className="flex justify-between">
        <p className="text-gray-600 text-sm">Payment Method</p>
        <p className="text-sky-700 text-sm">...@upi</p>

       </div>
      </div>

      </div>
    </div>
  );
};

export default Subscription;
