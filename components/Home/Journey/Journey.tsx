// import { useEffect, useState } from "react";
// import { getTimelineData } from "@/sanity/lib/queries";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import SectionHeading from "@/components/Helper/SectionHeading";

// interface TimelineItem {
//   title: string;
//   organization: string;
//   // description: string;
//   startDate: number;
//   endDate?: number;
//   iconUrl?: string;
// }

// const Journey = () => {
//   const [timeline, setTimeline] = useState<TimelineItem[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data: TimelineItem[] = await getTimelineData();
//       setTimeline(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <motion.section
//       id="journey"
//       className="py-16 bg-[#0f0f10]"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <div className="container mx-auto px-6">
//         <SectionHeading>
//           My <span className="text-[#F78F42]">Journey</span>
//         </SectionHeading>

//         <div className="relative">
//           {/* Vertical Line */}
//           <div className="absolute top-0 left-8 w-1 bg-blue-500 h-full hidden sm:block"></div>

//           <div className="space-y-12">
//             {timeline.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="flex items-start gap-6 relative"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 viewport={{ once: true, amount: 0.3 }}
//               >
//                 {/* Dot and Icon */}
//                 <div className="flex flex-col items-center">
//                   <div className="relative z-10">
//                     {item.iconUrl ? (
//                       <Image
//                         src={item.iconUrl}
//                         alt={item.title}
//                         width={40}
//                         height={40}
//                         className="rounded-full border-2 border-blue-500 bg-[#F78F42]"
//                       />
//                     ) : (
//                       <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
//                     )}
//                   </div>
//                   {index !== timeline.length - 1 && (
//                     <div className="w-1 flex-1 bg-blue-500 mt-2 hidden sm:block"></div>
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h3 className="text-xl font-semibold text-white">
//                     {item.title}
//                   </h3>
//                   <h4 className="text-md text-blue-300">{item.organization}</h4>
//                   {/* <p className="text-gray-300 mt-2">{item.description}</p> */}
//                   <p className="text-sm text-gray-400 mt-1">
//                     {item.startDate} - {item.endDate || "Present"}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Journey;











import { useEffect, useState } from "react";
import { getTimelineData } from "@/sanity/lib/queries";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/Helper/SectionHeading";

interface TimelineItem {
  title: string;
  organization: string;
  startDate: number;
  endDate?: number;
  iconUrl?: string;
}

const Journey = () => {
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: TimelineItem[] = await getTimelineData();
      setTimeline(data);
    };

    fetchData();
  }, []);

  return (
    <div id="journey" className="py-16 bg-[#0f0f10]">
      {/* Section Heading */}
      <div className="container mx-auto px-6">
        <SectionHeading>
          My <span className="text-[#F78F42]">Journey</span>
        </SectionHeading>
        {/* Container */}
        <div className="relative">
          {/* Line (slightly shorter) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 mx-auto h-0.5 bg-gray-500"></div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-8 mt-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Dot and Icon */}
                <div className="relative z-10 mb-4 lg:mb-2">
                  {item.iconUrl ? (
                    <motion.div
                      className="p-2 rounded-full border-3 border-white bg-gradient-to-br from-[#F78F42] to-[#FF3D00] shadow-lg group-hover:scale-125 transition-all duration-300 ease-in-out animate-pulse"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Image
                        src={item.iconUrl}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg group-hover:scale-125 transition-all duration-300 ease-in-out animate-pulse"
                      whileHover={{ scale: 1.2 }}
                    ></motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="text-center max-w-xs">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#F78F42] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <h4 className="text-md text-gray-500 mt-1">
                    {item.organization}
                  </h4>
                  <p className="text-sm text-gray-300 mt-1">
                    {item.startDate} - {item.endDate || "Present"}
                  </p>
                </div>

                {/* Vertical Line for small screens */}
                {index !== timeline.length - 1 && (
                  <div className="w-1 h-24 bg-blue-500 mt-4 lg:hidden"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;

























