// import { BaseInfo } from "@/Data/data";
// import Image from "next/image";
// import React from "react";
// import { FaDownload, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
// import { CiLinkedin, CiFacebook } from "react-icons/ci";

// type SocialLink = {
//   name: string;
//   url: string;
//   icon: React.ReactNode;
// };

// // Social Links Data
// const socialLinks: SocialLink[] = [
//   { name: "GitHub", url: "https://github.com/deblina00", icon: <FaGithub /> },
//   { name: "Instagram", url: "#", icon: <FaInstagram /> },
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/in/deblina-roy-b7059a225/",
//     icon: <CiLinkedin />,
//   },
//   { name: "Twitter", url: "#", icon: <FaTwitter /> },
//   { name: "Facebook", url: "#", icon: <CiFacebook /> },
// ];

// const Hero: React.FC= () => {
//   return (
//     <div className="w-full pt-[4vh] md:pt-[12vh]  md:pb-0 h-screen bg-[#0f0f10] overflow-hidden relative">
//       <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//           {/* Text content */}
//           <div>
//             <h5
//               data-aos="fade-left"
//               className="text-xl md:text-2xl lg:text-3xl mb-5 text-gray-300 font-semibold"
//             >
//               Hi, I am {BaseInfo.name}
//             </h5>
//             {/* Title */}
//             <h1
//               data-aos="fade-right"
//               data-aos-delay="100"
//               className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
//             >
//               {BaseInfo.position}
//             </h1>
//             {/* Description */}
//             <p
//               data-aos="fade-right"
//               data-aos-delay="200"
//               className="mt-6 text-sm md:text-base text-white text-opacity-60"
//             >
//               {BaseInfo.description}
//             </p>

//             {/* Social Links */}
//             <div
//               data-aos="fade-left"
//               data-aos-delay="300"
//               className="flex flex-wrap gap-3 mt-5 text-white"
//             >
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-full p-2 border-2 border-[#F78F42] hover:bg-[#F78F42] transition"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//             {/* Button */}
//             {/* Download CV Button */}
//             <a
//               href="/Deblina Roy-CV.pdf"
//               download="My_CV.pdf"
//               data-aos="zoom-in"
//               data-aos-delay="400"
//               className="inline-flex items-center gap-2 px-6 py-1.5 md:px-8 md:py-2.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-[#F78F42] hover:bg-white hover:text-black"
//             >
//               <span>Download CV</span>
//               <FaDownload />
//             </a>
//           </div>
//           {/* Profile Image */}
//           {BaseInfo.profilePic && (
//             <div
//               data-aos="zoom-in"
//               data-aos-delay="500"
//               className="mx-auto rounded-3xl border-3 border-orange-600 overflow-hidden w-70 h-55 mb-4
//                sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[500px] lg:h-[500px]"
//             >
//               <Image
//                 src={BaseInfo.profilePic}
//                 alt={`Portrait of ${BaseInfo.name}`}
//                 width={500}
//                 height={500}
//                 loading="lazy"
//                 className="object-cover"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaDownload, FaGithub, FaInstagram} from "react-icons/fa";
import { CiLinkedin, CiFacebook } from "react-icons/ci";

type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

// Social Links Data
const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/deblina00", icon: <FaGithub /> },
  { name: "Instagram", url: "#", icon: <FaInstagram /> },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/deblina-roy-b7059a225/",
    icon: <CiLinkedin />,
  },
  // { name: "Twitter", url: "#", icon: <FaTwitter /> },
  { name: "Facebook", url: "#", icon: <CiFacebook /> },
];

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-[#0f0f10] overflow-hidden relative pt-[10vh] pb-10 md:pt-[12vh]">
      <div className="container mx-auto px-6 md:px-10 font-[Sora]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h5
              data-aos="fade-left"
              className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-300 font-semibold"
            >
              Hi, I am {BaseInfo.name}
            </h5>

            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-bg leading-tight"
            >
              {BaseInfo.position}
            </h1>

            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="mt-6 text-sm sm:text-base md:text-lg text-white text-opacity-70 leading-relaxed"
            >
              {BaseInfo.description}
            </p>

            {/* Social Links */}
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 text-white"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 border-2 border-[#F78F42] hover:bg-[#F78F42] transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <a
                href="/Deblina Roy-CV.pdf"
                download="Deblina_Roy_CV.pdf"
                data-aos="zoom-in"
                data-aos-delay="400"
                className="inline-flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 text-white font-semibold text-base md:text-lg bg-[#F78F42] rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                <span>Download CV</span>
                <FaDownload />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          {BaseInfo.profilePic && (
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="flex justify-center"
            >
              <div className="rounded-3xl overflow-hidden border-4 border-[#F78F42] w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
                <Image
                  src={BaseInfo.profilePic}
                  alt={`Portrait of ${BaseInfo.name}`}
                  width={500}
                  height={500}
                  loading="lazy"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
