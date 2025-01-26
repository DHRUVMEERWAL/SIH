"use client"

import * as React from "react";
import { useState, useEffect } from "react";

import ProgressBar from "./ProgessBar";

// Define types for event
interface Event {
  column: number;
  rowIndex: number;
  // description: string;
  VIN: string;
  Driver: string;
  CurrentStop: string;
}

// Helper function to generate random events
const generateRandomEvents = (numEvents: number, numColumns: number, numRows: number): Event[] => {
  const events: Event[] = [];
  for (let i = 0; i < numEvents; i++) {
    const column = Math.floor(Math.random() * numColumns) + 1; // Columns start from 1 to avoid time column
    const rowIndex = Math.floor(Math.random() * numRows);
    const Driver = 'Rajesh Pandey';
    const VIN = 'DL93AB3245';
    const CurrentStop = 'Current Station: Shahbad Dairy';
    events.push({ column, rowIndex, VIN, Driver, CurrentStop});
  }
  return events;
};

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [visibleEvent1, setVisibleEvent1] = useState<Event | null>(null);
  const [visibleEvent2, setVisibleEvent2] = useState<Event | null>(null);
  const [visibleEvent3, setVisibleEvent3] = useState<Event | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const timeSlots = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

  useEffect(() => {
    // Generate random events on client side only
    setEvents(generateRandomEvents(10, 7, 24));
  }, []);

  return (
    <div className="flex justify-between mt-12 ">
      <section className="relative bg-stone-50 flex-1 pt-4">
        <div className="h-full w-full max-w-7xl mx-auto px-10 lg:px-16 overflow-x-auto">
          <div className="flex flex-col md:flex-row max-md:gap-3 items-center justify-between mb-2">
            <div className="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
           </svg>
              <h6 className="text-xl leading-8 font-semibold text-gray-900">Today, 5 Septmeber 2024</h6>
            </div>
            <div className="flex items-center gap-px rounded-lg bg-gray-100 p-1">
              <div className="rounded-lg py-2.5 px-5 text-sm font-medium text-gray-500">
                Shahbad Dairy
              </div>
              <div className="group inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 rounded-full text-sm font-medium text-indigo-600 bg-grey transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.8)] group-hover:scale-110">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>

{/* 
              <button className="rounded-lg py-2.5 px-5 text-sm font-medium text-indigo-600 bg-white"></button> */}
              <div className="rounded-lg py-2.5 px-5 text-sm font-medium text-gray-500">
              D Block Janak Puri (Pankha Road)
              </div>
            </div>
            <button className="py-2.5 pr-7 pl-5 bg-indigo-600 rounded-xl flex items-center gap-2 text-base font-semibold text-white hover:bg-indigo-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 5V15M15 10H5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              New Activity
            </button>
      

          </div>
          <div className="relative">

            <div className="grid grid-cols-8 border-t border-gray-200">
              {Array.from({ length: 24 }, (_, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  {/* First column for time slots */}
                  <div
                    className={`h-2 p-0.5 md:p-3.5 border-t border-r border-gray-200 flex items-center justify-center transition-all hover:bg-stone-100`}
                  >
                    <span className="text-xs font-semibold text-gray-400">{timeSlots[rowIndex]}</span>
                  </div>
                  
                  {/* Event columns */}
                  {Array.from({ length: 7 }, (_, colIndex) => (
                    <div
                      key={colIndex + 1}
                      className={`relative h-32 lg:h-28 p-0.5 md:p-3.5 border-t ${colIndex < 6 ? 'border-r' : ''} border-gray-200 `}
                    >
                      {/* Render events */}
                      {events
                        .filter(event => event.rowIndex === rowIndex && event.column === colIndex + 1)
                        .map((event, idx) => (
                          <div key={idx} className="relative flex items-center max-h-64 z-10 "  >
                              {/* <div className='h-full  bg-gray-100 rounded-3xl w-2.5 '> */}
                            <div className='relative bg-indigo-600 w-1 h-32 rounded-3xl cursor pointer mx-2' 
                                onMouseEnter={() => setVisibleEvent1(event)}
                                onMouseLeave={() => setVisibleEvent1(null)}>


                            
                              {/* The vertical line */}
                              {visibleEvent1 === event && (
                                <div className="absolute top-0 left-full ml-2 w-48 rounded-lg bg-blue-50 border-2 border-blue-600 opacity-100 transform transition-transform duration-150 ease-in-out translate-x-0 pointer-events-auto z-20 shadow-lg" >
                                  <div className="rounded p-1.5">
                                    <p className="text-xs font-normal text-gray-900 mb-px">{event.VIN}</p>
                                    <p className="text-xs font-normal text-gray-900 mb-px">{event.Driver}</p>
                                    <p className="text-xs font-normal text-gray-900 mb-px">{event.CurrentStop}</p>
                                    <p className="text-xs font-semibold text-blue-600">{timeSlots[rowIndex]} - {timeSlots[1 + rowIndex]}</p>
                                  </div>
                                </div>
                                
                              )}

                            </div>
                            <div
                              className="relative w-1 h-64 bg-red-600 rounded-full cursor-pointer"
                              onMouseEnter={() => setVisibleEvent2(event)}
                              onMouseLeave={() => setVisibleEvent2(null)}
                            >
                              {/* The vertical line */}
                              {visibleEvent2 === event && (
                                <div className="absolute top-0 left-full ml-2 w-48 rounded-lg bg-red-50 border-2 border-red-600 opacity-100 transform transition-transform duration-150 ease-in-out translate-x-0 pointer-events-auto z-10">
                                  <div className="rounded p-1.5">
                                  <p className="text-xs font-normal text-gray-900 mb-px">{event.VIN}</p>
                                    <p className="text-xs font-normal text-gray-900 mb-px">{event.Driver}</p>
                                    <p className="text-xs font-normal text-gray-900 mb-px">{event.CurrentStop}</p>
                                    <p className="text-xs font-semibold text-red-600">{timeSlots[rowIndex]} - {timeSlots[1 + rowIndex]}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div
                              className="relative w-1 h-56 bg-green-600 cursor-pointer rounded-full mx-2"
                              onMouseEnter={() => setVisibleEvent3(event)}
                              onMouseLeave={() => setVisibleEvent3(null)}
                            >
                              {/* The vertical line */}
                              {visibleEvent3 === event && (
                                <div className="absolute top-0 left-full ml-2 w-48 rounded-lg bg-green-50 border-2 border-green-600 opacity-100 transform transition-transform duration-150 ease-in-out translate-x-0 pointer-events-auto z-20">
                                  <div className="rounded p-1.5">
                                  <p className="text-xs font-normal text-gray-900 mb-px">{event.VIN}</p>
                                    <p className="text-xs font-normal text-gray-900 mb-px">{event.Driver}</p>
                                    <p className="text-xs font-normal text-gray-900 mb-px">{event.CurrentStop}</p>
                                    <p className="text-xs font-semibold text-green-600">{timeSlots[rowIndex]} - {timeSlots[1 + rowIndex]}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;


// "use client";

// import * as React from "react";
// import { useState } from "react";

// // Define types for event
// interface Event {
//   column: number;
//   rowIndex: number;
//   VIN: string;
//   Driver: string;
//   CurrentStop: string;
// }

// const Calendar: React.FC = () => {
//   const [visibleEvent1, setVisibleEvent1] = useState<Event | null>(null);
//   const [visibleEvent2, setVisibleEvent2] = useState<Event | null>(null);
//   const [visibleEvent3, setVisibleEvent3] = useState<Event | null>(null);
//   const timeSlots = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

//   // Hardcoded event details
//   const events: Event[] = [
//     { column: 1, rowIndex: 2, VIN: 'DL93AB3245', Driver: 'Rajesh Pandey', CurrentStop: 'Shahbad Dairy' },
//     { column: 2, rowIndex: 4, VIN: 'DL93AB9876', Driver: 'Sunil Kumar', CurrentStop: 'Rohini Sec-7' },
//     { column: 3, rowIndex: 5, VIN: 'DL93AB5432', Driver: 'Anil Sharma', CurrentStop: 'Pitampura' },
//     { column: 4, rowIndex: 8, VIN: 'DL93AB7865', Driver: 'Ravi Mehta', CurrentStop: 'Dwarka Mor' },
//     { column: 5, rowIndex: 10, VIN: 'DL93AB1234', Driver: 'Amit Jain', CurrentStop: 'Janakpuri' },
//   ];

//   return (
//     <div className="flex justify-between mt-12">
//       <section className="relative bg-stone-50 flex-1 pt-4">
//         <div className="h-full w-full max-w-7xl mx-auto px-10 lg:px-16 overflow-x-auto">
//           <div className="flex flex-col md:flex-row max-md:gap-3 items-center justify-between mb-2">
//             <div className="flex items-center gap-4">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
//               </svg>
//               <h6 className="text-xl leading-8 font-semibold text-gray-900">Today, 5 September 2024</h6>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="grid grid-cols-8 border-t border-gray-200">
//               {Array.from({ length: 24 }, (_, rowIndex) => (
//                 <React.Fragment key={rowIndex}>
//                   {/* First column for time slots */}
//                   <div className={`h-2 p-0.5 md:p-3.5 border-t border-r border-gray-200 flex items-center justify-center`}>
//                     <span className="text-xs font-semibold text-gray-400">{timeSlots[rowIndex]}</span>
//                   </div>

//                   {/* Event columns */}
//                   {Array.from({ length: 7 }, (_, colIndex) => (
//                     <div key={colIndex + 1} className={`relative h-32 lg:h-28 p-0.5 md:p-3.5 border-t ${colIndex < 6 ? 'border-r' : ''} border-gray-200`}>
//                       {/* Render events */}
//                       {events
//                         .filter(event => event.rowIndex === rowIndex && event.column === colIndex + 1)
//                         .map((event, idx) => (
//                           <div key={idx} className="relative flex items-center max-h-64 z-10">
//                             <div
//                               className="relative w-1 h-32 bg-indigo-600 rounded-full cursor-pointer mx-2"
//                               onMouseEnter={() => setVisibleEvent1(event)}
//                               onMouseLeave={() => setVisibleEvent1(null)}
//                             >
//                               {/* Tooltip for event */}
//                               {visibleEvent1 === event && (
//                                 <div className="absolute top-0 left-full ml-2 w-48 rounded-lg bg-blue-50 border-2 border-blue-600 opacity-100 transition-transform duration-150 transform translate-x-0 pointer-events-auto z-20 shadow-lg">
//                                   <div className="rounded p-1.5">
//                                     <p className="text-xs font-normal text-gray-900">{event.VIN}</p>
//                                     <p className="text-xs font-normal text-gray-900">{event.Driver}</p>
//                                     <p className="text-xs font-normal text-gray-900">{event.CurrentStop}</p>
//                                     <p className="text-xs font-semibold text-blue-600">{timeSlots[rowIndex]} - {timeSlots[1 + rowIndex]}</p>
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                             <div
//                               className="relative w-1 h-32 bg-red-600 rounded-full cursor-pointer mx-2"
//                               onMouseEnter={() => setVisibleEvent2(event)}
//                               onMouseLeave={() => setVisibleEvent2(null)}
//                             >
//                               {/* Tooltip for event */}
//                               {visibleEvent2 === event && (
//                                 <div className="absolute top-0 left-full ml-2 w-48 rounded-lg bg-red-50 border-2 border-red-600 opacity-100 transition-transform duration-150 transform translate-x-0 pointer-events-auto z-20">
//                                   <div className="rounded p-1.5">
//                                     <p className="text-xs font-normal text-gray-900">{event.VIN}</p>
//                                     <p className="text-xs font-normal text-gray-900">{event.Driver}</p>
//                                     <p className="text-xs font-normal text-gray-900">{event.CurrentStop}</p>
//                                     <p className="text-xs font-semibold text-red-600">{timeSlots[rowIndex]} - {timeSlots[1 + rowIndex]}</p>
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                             <div
//                               className="relative w-1 h-32 bg-green-600 rounded-full cursor-pointer mx-2"
//                               onMouseEnter={() => setVisibleEvent3(event)}
//                               onMouseLeave={() => setVisibleEvent3(null)}
//                             >
//                               {/* Tooltip for event */}
//                               {visibleEvent3 === event && (
//                                 <div className="absolute top-0 left-full ml-2 w-48 rounded-lg bg-green-50 border-2 border-green-600 opacity-100 transition-transform duration-150 transform translate-x-0 pointer-events-auto z-20">
//                                   <div className="rounded p-1.5">
//                                     <p className="text-xs font-normal text-gray-900">{event.VIN}</p>
//                                     <p className="text-xs font-normal text-gray-900">{event.Driver}</p>
//                                     <p className="text-xs font-normal text-gray-900">{event.CurrentStop}</p>
//                                     <p className="text-xs font-semibold text-green-600">{timeSlots[rowIndex]} - {timeSlots[1 + rowIndex]}</p>
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Calendar;
