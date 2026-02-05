import React from "react";

const Usage = () => {
  let usages = Math.min(100, Math.max(0, 45));
  return (
    <div className="mt-5 border border-gray-100 shadow-md bg-amber-50/20 p-5 space-y-5 rounded-2xl ">
      <h1 className="ml-auto text-lg text-sky-800  mb-10">Usage Overview</h1>

      {/* Storage */}
      <div>
        <div className="flex justify-between ">
          <p className="text-gray-600">Storage</p>
          <p className="text-sky-900 text-right">2.4GB / 10 GB</p>
        </div>

        <div className="h-2 w-full rounded-full  overflow-hidden mt-2 bg-gray-300">
          <div
            className="h-full bg-sky-700 rounded-full transition-all duration-300"
            style={{ width: `${usages}%` }}
          />
        </div>
      </div>

      {/* User Licenses */}
      <div>
        <div className="flex justify-between ">
          <p className="text-gray-600">User Licenses</p>
          <p className="text-sky-900 text-right">2.12GB / 50 GB</p>
        </div>

        <div className="h-2 w-full rounded-full  overflow-hidden mt-2 bg-gray-300">
          <div
            className="h-full bg-sky-700 rounded-full transition-all duration-300"
            style={{ width: `${usages +38}%` }}
          />
        </div>
      </div>

      {/* APi Calls */}
      <div>
        <div className="flex justify-between ">
          <p className="text-gray-600">API Calls (This Month)</p>
          <p className="text-sky-900 text-right">2.2470 / 10,000 </p>
        </div>

        <div className="h-2 w-full rounded-full  overflow-hidden mt-2 bg-gray-300">
          <div
            className="h-full bg-sky-700 rounded-full transition-all duration-300"
            style={{ width: `${usages +30}%` }}
          />
        </div>
      </div>

      {/* Overall Usages */}
      <div>
        <div className="flex justify-between ">
          <p className="text-gray-600">Overall Usage</p>
          <p className="text-sky-900 text-right">75%</p>
        </div>

        <div className="mt-2 w-full rounded-md bg-sky-100 px-4 py-2 ">
           <p className="text-sm text-sky-800">Usage is within normal limits.</p>
        </div>
      </div>


    </div>
  );
};

export default Usage;
