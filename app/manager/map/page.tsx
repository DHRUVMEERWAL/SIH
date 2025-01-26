"use client"
import Maps from "@/components/Maps";
import Navbar from "@/components/Navbar";
import InputBox from "@/components/InputBox";

export default function Map() {
    return (
      <div className="h-screen relative"> {/* Use relative positioning on the container */}
        <Navbar />
        
        {/* Input box */}
        <div className="py-2 px-4 mt-4 z-30 absolute top-12 mx-64 " style={{ width: '400px' }}>
        <InputBox/>
        </div>
        <Maps /> {/* Make the map full-screen */}
      </div>
    );
}


// "use client"
// import Maps from "@/components/Maps";
// import Navbar from "@/components/Navbar";

// export default function Map() {
//     return (
//       <div className="h-screen relative">
//         <Navbar />
        
//         {/* Input container */}
//         <div className="relative w-full flex justify-center mt-4"> 
//           <div className="relative">
//             {/* Input box */}
//             <input
//               type="text"
//               placeholder="Search Bus Route"
//               className="border rounded-full py-2 px-4 mt-4 z-30 relative top-16 -left- shadow-lg" 
//               style={{ width: '300px' }}
//             />

//             {/* SVG icon inside input */}
//             <span className="absolute py-2 px-4 mt-4 z-30 top-16 -left-30">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//               </svg>
//             </span>
//           </div>
//         </div>
        
//         {/* Map component */}
//         <Maps /> 
//       </div>
//     );
// }
