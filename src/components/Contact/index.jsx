import "./Contact.css";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Pyramid from "../../ui/Pyramid";
import { contactInfo } from "../../data";
import SocialHandles from "../../ui/SocialHandles";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yr1we84",
        "template_unu883f",
        form.current,
        "pAmrVQixbJbZjdlmj"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado correctamente");
        },
        (error) => {
          console.error(error.text);
          alert("Hubo un error al enviar el mensaje");
        }
      );
  };
  return (
    <section id="contactame">
      <div className="section__wrapper">
        <div className="pyramid__container">
          <Pyramid />
        </div>
        <div className="contact__group">
          <div>
            <h3 className="title">
              Hablemos de tu <span className="shine">gran proyecto </span>{" "}
              juntos
            </h3>
            <div className="flex contact__options">
              {contactInfo.map((contact, index) => (
                <article className="flex option" key={index}>
                  <div className="contact__icon">
                    <img src={contact.icon} alt="" />
                  </div>
                  <div className="flex contact__content">
                    <div>
                      <h3 className="name">{contact.name}</h3>
                      <p className="text__muted line__clamp__1 value">
                        {contact.value}
                      </p>
                    </div>
                    <a
                      href={contact.link}
                      target="_blank"
                      className="flex__center btn"
                    >
                      <span className="btn__shine text">Mensaje</span>
                      <div
                        className="flex__center icon"
                        style={{ background: contact.color }}
                      >
                        {contact.btnIcon}
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SocialHandles />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Tu nombre completo"
              name="name"
              required
            />
            <input type="email" placeholder="Tu correo" name="email" required />
            <textarea
              name="message"
              rows={7}
              placeholder="Tu mensaje"
            ></textarea>
            <button type="submit" className="btn flex__center submit__btn">
              <div className="icon">
                <BsFillSendFill />
              </div>
              <span>Enviar</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
