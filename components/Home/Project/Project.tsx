import SectionHeading from "@/components/Helper/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getProjectData } from "@/sanity/lib/queries";

interface projectItem {
  // id:number;
  title: string;
  description: string;
  image: string;
  Live_link: string;
}

const Project = () => {
  const [post, setPost] = useState<projectItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: projectItem[] = await getProjectData();
      setPost(data);
    };

    fetchData();
  }, []);

  return (
    <div id="projects" className="pt-16 pb-16 bg-[#0f0f10]">
      <SectionHeading>
        Latest <span className="text-[#F78F42]">Projects</span>
      </SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center font-[Sora]">
        {post.map((project, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${index * 150}`}
              key={index}
              className="bg-[#fbaa6c] opacity-90 p-6 rounded-lg hover:scale-150 transition-all duration-300"
            >
              {project.Live_link ? (
                <Link
                  href={project.Live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image || "default-image.jpg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    loading="lazy"
                    className="w-full rounded-md"
                  />
                </Link>
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  loading="lazy"
                  className="w-full rounded-md"
                />
              )}
              <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
              <p className="text-sm text-gray-800">{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
