// import SectionHeading from "@/components/Helper/SectionHeading";
// import { skillsData } from "@/Data/data";
// import React from "react";
// import SkillCard from "./SkillCard";

// const Skills = () => {
//   return (
//     <div id="skills" className="pt-16 pb-16 bg-[#0f0f10]">
//       <SectionHeading>
//         My <span className="text-[#F78F42]">Skills</span>
//       </SectionHeading>
//       <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
//         {skillsData.map((skill, i) => {
//           return (
//             <div
//               data-aos="flip-left"
//               data-aos-anchor-placement="top-center"
//               data-aos-delay={`${i * 150}`}
//               key={skill.id}
//             >
//               <SkillCard skill={skill} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import SectionHeading from "@/components/Helper/SectionHeading";
// import { skillsData } from "@/Data/data";
import { getSkillData } from "@/sanity/lib/queries";
import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";

interface skillItem {
  id: number;
  title: string;
  image: string;
  percent: number;
}

const Skills = () => {
  const [skills, setSkills] = useState<skillItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data: skillItem[] = await getSkillData();
      setSkills(data);
    };

    fetchData();
  }, []);
  return (
    <div id="skills" className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>
        My <span className="text-[#F78F42]">Skills</span>
      </SectionHeading>
      <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
        {skills.map((skill, index) => (
          <div
            data-aos="flip-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${index * 150}`}
            key={index}
          >
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
