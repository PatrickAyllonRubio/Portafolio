import React, { useEffect, useState } from "react";
import "Odometer/themes/odometer-theme-default.css";
import Odometer from "react-odometerjs";
import "./Facts.css";

const Facts = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [Clients, setClients] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(1);
      setProjects(2);
      setClients(2);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex__center fact__container">
      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={experience} className="title" />
          <h3 className="title"></h3>
        </div>
        <p className="label">Años de experiencia</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={projects} className="title" />
          <h3 className="title"></h3>
        </div>
        <p className="label">Proyectos completados</p>
      </div>

      <div className="fact__item">
        <div className="flex__center">
          <Odometer value={Clients} className="title" />
          <h3 className="title"></h3>
        </div>
        <p className="label">Clientes satisfechos</p>
      </div>
    </div>
  );
};

export default Facts;
