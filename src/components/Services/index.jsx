import ServiceCard from "../../ui/ServiceCard";
import { services } from "../../data";
import "./Services.css";

const Services = () => {
  return (
    <section id="servicios">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Servicios</h2>
        </div>
        <div className="services__group">
          {services.map(
            ({ title, description, icon, color, colorRGB }, index) => (
              <ServiceCard
                title={title}
                description={description}
                icon={icon}
                color={color}
                colorRGB={colorRGB}
                key={index}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
