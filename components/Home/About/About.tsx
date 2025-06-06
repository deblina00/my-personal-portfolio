// import SectionHeading from "@/components/Helper/SectionHeading";
// import { aboutInfo } from "@/Data/data";
// import Image from "next/image";
// import React from "react";
// import { FaCheck } from "react-icons/fa";

// const About = () => {

//   const skills = ["Frontend Development", "React JS Development"];

//   const stats = [
//     {
//       image: "/images/customer.png",
//       value: aboutInfo.client,
//       label: "Satisfied Customers",
//     },
//     {
//       image: "/images/experience.png",
//       value: aboutInfo.experience,
//       label: "Years Experience",
//     },
//     {
//       image: "/images/completed.png",
//       value: aboutInfo.project,
//       label: "Completed Projects",
//     },
//     {
//       image: "/images/rocket.png",
//       value: aboutInfo.website,
//       label: "Websites Launched",
//     },
//   ];

//   return (
//     <div id="about" className="pt-16 pb-16 bg-[#050709]">
//       {/* SectionHeading */}
//       <SectionHeading>
//         About <span className="text-[#F78F42]">Me</span>
//       </SectionHeading>

//       <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
//         {/* Text Content */}
//         <div data-aos="fade-left" data-aos-anchor-placement="top-center">
//           <h2 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
//             {aboutInfo.title}
//           </h2>
//           <p className="mt-6 text-base text-gray-500">
//             {aboutInfo.description}
//           </p>
//           <div className="mt-8 space-y-6">
//             {skills.map((skill, index) => (
//               <div key={index} className="flex items-center space-x-2">
//                 <div className="w-7 h-7 bg-[#F78F42] flex items-center justify-center">
//                   <FaCheck className="text-white" />
//                 </div>
//                 <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
//                   {skill}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Stats Content */}
//         <div
//           data-aos="zoom-in"
//           data-aos-anchor-placement="top-center"
//           data-aos-delay="150"
//           className="grid grid-cols-2 gap-16"
//         >
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center">
//               <Image
//                 src={stat.image}
//                 alt="image"
//                 width={80}
//                 height={80}
//                 loading="lazy"
//                 className="mx-auto"
//               />
//               <p className="mt-3 font-bold text-xl text-white">{stat.value}</p>
//               <p className="text-base sm:text-lg text-gray-400">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  const skills = ["Frontend Development", "React JS Development"];

  return (
    <div id="about" className="py-16 bg-[#050709]">
      {/* Section Heading */}
      <SectionHeading>
        About <span className="text-[#F78F42]">Me</span>
      </SectionHeading>

      {/* Container */}
      <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12 font-[Sora]">
        {/* Text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h2 className="text-2xl text-bg sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 leading-snug">
            {aboutInfo.title}
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            {aboutInfo.description}
          </p>

          {/* Skills */}
          <div className="mt-8 space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-7 h-7 bg-[#F78F42] flex items-center justify-center rounded-full">
                  <FaCheck className="text-white text-sm" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-300">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration Section */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          className="flex justify-center items-center"
        >
          <Image
            src="/images/svg.svg" // make sure you move svg.svg to /public/images/ folder
            alt="Illustration"
            width={500}
            height={500}
            className="w-full h-auto max-w-md sm:max-w-lg md:max-w-xl object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default About;

