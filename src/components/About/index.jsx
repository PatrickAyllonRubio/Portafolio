import Hole from "../../ui/Hole";
import "./About.css";
import { skills } from "../../data";
import CardUi from "../../assets/CardUi";

const About = () => {
  return (
    <section id="perfil">
      <div className="card section__wrapper">
        <Hole />
        <div className="column left-column">
          <h3 className="skill__title">Mis habilidades</h3>
          <div className="skill__container">
            {skills.map((skill, index) => (
              <div className="flex skill__group" key={index}>
                {skill.data.map((list, key) => (
                  <div className="blur__overlay flex__center skill" key={key}>
                    <div className="skill__logo">
                      <img src={list.logo} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"} />
        </div>
        <div className="colum right-column">
          <h2 className="shine">Sobre mi</h2>
          <h1 className="title">
            Soy <span className="color__primary">Patrick Ayllón</span>
          </h1>
          <p className="text__muted description">
            Egresado de la carrera de Diseño y Desarrollo de Software en TECSUP,
            con experiencia en desarrollo backend utilizando .NET 8, Django y
            MySQL. Especializado en arquitectura limpia, principios SOLID y
            seguridad con JWT y encriptación de datos. Enfocado en crear
            soluciones escalables, seguras y funcionales, con un alto compromiso
            con la calidad técnica y la automatización de procesos. Acostumbrado
            a trabajar en equipos ágiles y colaborativos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
