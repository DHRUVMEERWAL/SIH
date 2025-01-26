"use client";

import React, { useState } from "react";

interface Event {
  column: number;
  rowIndex: number;
  VIN: string;
  Driver: string;
  CurrentStop: string;
  busColor: string;
}

// Hardcoded events
const hardcodedEvents: Event[] = [
  { column: 1, rowIndex: 9, VIN: 'DL93AB3245', Driver: 'Dhruv Garg', CurrentStop: 'Shabad Dairy', busColor: 'blue' },
  { column: 2, rowIndex: 12, VIN: 'DL93AB3245', Driver: 'Dhruv Garg', CurrentStop: 'Keshav Puram', busColor: 'purple' },
  { column: 3, rowIndex: 15, VIN: 'DL93AB3245', Driver: 'Dhruv Garg', CurrentStop: 'Rohini Sector 9', busColor: 'green' },
  { column: 4, rowIndex: 18, VIN: 'DL93AB3245', Driver: 'Dhruv Garg', CurrentStop: 'Pitampura', busColor: 'red' },
];

const Calendar: React.FC = () => {
  const [events] = useState<Event[]>(hardcodedEvents);
  const [visibleEvent, setVisibleEvent] = useState<Event | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const timeSlots = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

  const handleMouseEnter = (e: React.MouseEvent, event: Event) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({ x: rect.left + rect.width / 2, y: rect.top });
    setVisibleEvent(event);
  };

  const handleMouseLeave = () => {
    setVisibleEvent(null);
  };

  return (
    <div className="flex justify-between mt-12">
      <section className="relative bg-stone-50 flex-1 pt-4">
        <div className="h-full w-full max-w-7xl mx-auto px-10 lg:px-16 overflow-x-auto">
          <div className="flex flex-col md:flex-row max-md:gap-3 items-center justify-between mb-2">
            <div className="flex items-center gap-4">
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
            <div className="grid grid-cols-8 border-t border-gray-200 sticky top-0 bg-white z-50">
            </div>

            <div className="grid grid-cols-8 border-t border-gray-200">
              {timeSlots.map((timeSlot, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  <div className="h-2 p-0.5 md:p-3.5 border-t border-r border-gray-200 flex items-center justify-center hover:bg-stone-100">
                    <span className="text-xs font-semibold text-gray-400">{timeSlot}</span>
                  </div>

                  {Array.from({ length: 7 }, (_, colIndex) => (
                    <div
                      key={colIndex + 1}
                      className={`relative h-32 lg:h-28 p-0.5 md:p-3.5 border-t ${colIndex < 6 ? 'border-r' : ''} border-gray-200`}
                    >
                      {events
                        .filter((event) => event.rowIndex === rowIndex && event.column === colIndex + 1)
                        .map((event, idx) => (
                          <div key={idx} className="relative flex items-center z-10">
                            <div
                              className="bg-indigo-600 w-1 h-32 rounded-3xl cursor-pointer hover:bg-indigo-500 mx-auto"
                              onMouseEnter={(e) => handleMouseEnter(e, event)}
                              onMouseLeave={handleMouseLeave}
                            />
                          </div>
                        ))}
                    </div>
                  ))}
                </React.Fragment>
              ))}

              {visibleEvent && (
                <div
                  className="absolute z-50 pointer-events-none transition-opacity duration-300"
                  style={{ transform: `translate(${tooltipPosition.x}px, ${tooltipPosition.y}px)`, opacity: visibleEvent ? 1 : 0 }}
                >
                  <div className="rounded-lg bg-white text-sm shadow-lg p-4">
                    <p className="font-semibold text-gray-800">Bus Route: {visibleEvent.VIN}</p>
                    <p className="mt-1 text-gray-600">Driver: {visibleEvent.Driver}</p>
                    <p className="mt-1 text-gray-600">Current Stop: {visibleEvent.CurrentStop}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;
