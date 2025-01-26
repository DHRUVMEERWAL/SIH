import InputBox from "@/components/InputBox";
import Navbar from "@/components/Navbar"; // Importing the Navbar component
import RadialGraph from "@/components/radialGraph";

export default function App() {
  return (

    <div className="flex min-h-screen">
      {/* Sidebar Navbar */}
      <aside className="w-64">
        <Navbar />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 mt-14">


        {/* Dashboard Cards */}
        <section className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Currently Running Buses</h3>
            <p className="text-2xl font-bold">159</p>
            <p>Increased by 60%</p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Total CO2 Emissions</h3>
            <p className="text-2xl font-bold">250 mt/tonnes</p>
            <p>Decreased by 30%</p>
          </div>
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Route Efficency Score</h3>
            <p className="text-2xl font-bold">79/100</p>
            <p>Increased by 80%</p>
          </div>
        </section>

        {/* Table Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Crew Leaves</h3>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2">Name</th>
                <th className="pb-2">Email</th>
                <th className="pb-2">User Type</th>
                <th className="pb-2">Joined</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2">Rajesh</td>
                <td className="py-2">rajesh@dtc.ac.in</td>
                <td className="py-2">Driver</td>
                <td className="py-2">4 Sept 2024</td>
                <td className="py-2">
                  <span className="bg-purple-500 text-white py-1 px-3 rounded-full text-sm">
                    PENDING
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2">Sanjay Singh</td>
                <td className="py-2">sanjaysingh@dtc.ac.in</td>
                <td className="py-2">Conductor</td>
                <td className="py-2">2 Sept 2024</td>
                <td className="py-2">
                  <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
                    APPROVED
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2">Prakash Kumar Singh</td>
                <td className="py-2">prakashkumar@@dtc.ac.in</td>
                <td className="py-2">Gaurd</td>
                <td className="py-2">1 Sept 2024</td>
                <td className="py-2">
                  <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
                    APPROVED
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2">Mukesh Kumar</td>
                <td className="py-2">mukeshkumar@dtc.ac.in</td>
                <td className="py-2">Driver</td>
                <td className="py-2">31 August 2024</td>
                <td className="py-2">
                  <span className="bg-red-500 text-white py-1 px-3 rounded-full text-sm">
                    REJECT
                  </span>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2">Ghanshyam Prasad</td>
                <td className="py-2">ganshyamprasad@dtc.ac.in</td>
                <td className="py-2">Driver</td>
                <td className="py-2">29 August 2024</td>
                <td className="py-2">
                  <span className="bg-purple-500 text-white py-1 px-3 rounded-full text-sm">
                    PENDING
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <div className="flex mt-6">
        <RadialGraph/>
        </div>
      </main>
    </div>
  );
}
// "use client"

// import { useState } from "react";

// export default function RadialGraph() {
//   // Define state for showing more details
//   const [showMoreDetails, setShowMoreDetails] = useState(false);
  
//   // Define state for toggling the dropdown
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
//       <div className="flex justify-between mb-3">
//         <div className="flex items-center">
//           <div className="flex justify-center items-center">
//             <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pe-1">
//               Your team's progress
//             </h5>
//             <svg
//               className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
//         <div className="grid grid-cols-3 gap-3 mb-2">
//           <dl className="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
//             <dt className="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">
//               12
//             </dt>
//             <dd className="text-orange-600 dark:text-orange-300 text-sm font-medium">To do</dd>
//           </dl>
//           <dl className="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
//             <dt className="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">
//               23
//             </dt>
//             <dd className="text-teal-600 dark:text-teal-300 text-sm font-medium">In progress</dd>
//           </dl>
//           <dl className="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
//             <dt className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">
//               64
//             </dt>
//             <dd className="text-blue-600 dark:text-blue-300 text-sm font-medium">Done</dd>
//           </dl>
//         </div>

//         {/* Button to toggle more details */}
//         <button
//           type="button"
//           className="hover:underline text-xs text-gray-500 dark:text-gray-400 font-medium inline-flex items-center"
//           onClick={() => setShowMoreDetails(!showMoreDetails)}
//         >
//           {showMoreDetails ? "Hide" : "Show"} more details{" "}
//           <svg
//             className={`w-2 h-2 ms-1 ${showMoreDetails ? "rotate-180" : ""}`}
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 1 4 4 4-4"
//             />
//           </svg>
//         </button>

//         {/* Conditional rendering of more details section */}
//         {showMoreDetails && (
//           <div className="border-gray-200 border-t dark:border-gray-600 pt-3 mt-3 space-y-2">
//             <dl className="flex items-center justify-between">
//               <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal">
//                 Average task completion rate:
//               </dt>
//               <dd className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
//                 <svg
//                   className="w-2.5 h-2.5 me-1.5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 13V1m0 0L1 5m4-4 4 4"
//                   />
//                 </svg>{" "}
//                 57%
//               </dd>
//             </dl>
//             <dl className="flex items-center justify-between">
//               <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal">
//                 Days until sprint ends:
//               </dt>
//               <dd className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">
//                 13 days
//               </dd>
//             </dl>
//             <dl className="flex items-center justify-between">
//               <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal">Next meeting:</dt>
//               <dd className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">
//                 Thursday
//               </dd>
//             </dl>
//           </div>
//         )}
//       </div>

//       <div className="py-6" id="radial-chart"></div>

//       <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
//         <div className="flex justify-between items-center pt-5">
//           {/* Dropdown for last days selection */}
//           <button
//             onClick={() => setDropdownOpen(!isDropdownOpen)}
//             className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
//             type="button"
//           >
//             Last 7 days
//             <svg
//               className={`w-2.5 m-2.5 ms-1.5 ${isDropdownOpen ? "rotate-180" : ""}`}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m1 1 4 4 4-4"
//               />
//             </svg>
//           </button>

//           {/* Conditional rendering of dropdown options */}
//           {isDropdownOpen && (
//             <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
//                 </li>
//               </ul>
//             </div>
//           )}

//           <a
//             href="#"
//             className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2"
//           >
//             Progress report
//             <svg
//               className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 6 10"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m1 9 4-4-4-4"
//               />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
