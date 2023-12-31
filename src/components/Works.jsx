import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import axios from "axios";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ index, name, description, tags, image, demo }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ">
      <div className="relative w-full h-[230px] ">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full  rounded-2xl "
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <a
            href={demo}
            target="_blank"
            className="black-gradient w-20 h-10 rounded-full flex justify-center items-center cursor-pointer hover:opacity-30 transition-opacity">
            Demo
          </a>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-white font-bold text-[24px] ">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] ">{description}</p>
      </div>
      <div className=" mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <React.Fragment key={tag && tag.name}>
            {tag && <p className={`text-[14px] ${tag.color}`}>#{tag.name}</p>}
          </React.Fragment>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const res = await axios(
      `${import.meta.env.VITE_APP_API_URL || "http://localhost:5000"}/projects`
    );

    setProjects(res.data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project has a link to a live demo
          in it. It reflects my ability to solve complex problems, work with
          different technologies, and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
