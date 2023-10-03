import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import axios from "axios";

const Tech = () => {
  const [technologies, setTechnologies] = useState([]);

  const getTechnologies = async () => {
    const res = await axios(
      `${
        import.meta.env.VITE_APP_API_URL || "http://localhost:5000"
      }/technologies`
    );

    setTechnologies(res.data);
  };

  useEffect(() => {
    getTechnologies();
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
