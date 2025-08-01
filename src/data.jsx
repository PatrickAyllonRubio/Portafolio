import { FaProjectDiagram } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  sql,
  mongodb,
  css,
  csharp,
  html,
  django,
  github,
  nodejs,
  react,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "Perfil" },
  { name: "Servicios" },
  { name: "Habilidades" },
  { name: "Proyectos" },
  { name: "Contactame" },
];

export const services = [
  {
    title: "Desarrollo Backend",
    icon: <FaCodeCompare />,
    description: `Especializado en construir sistemas backend seguros, escalables y bien estructurados. 
    Con experiencia en .NET 8, Django y APIs RESTful, aplico principios de arquitectura limpia y 
    técnicas de encriptación de datos para ofrecer una lógica del lado del servidor robusta y alineada 
    con prácticas modernas de desarrollo.`,
  },
  {
    title: "Diseño e Integración de APIs",
    icon: <FaProjectDiagram />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Diseño e implemento APIs RESTful utilizando tecnologías como Node.js, Express y Django. 
    Garantizo documentación clara, autenticación segura (JWT) e integración fluida con bases de datos 
    y servicios externos.`,
  },
  {
    title: "Implementación de Proyectos Full Stack",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Desde la arquitectura del backend hasta la entrega del frontend, he liderado soluciones 
    full stack que conectan hardware y software. Mi experiencia incluye sistemas inteligentes, modelado 
    de bases de datos e interfaces intuitivas centradas en funcionalidad y rendimiento.`,
  },
];

export const projects = [
  {
    title: "MiChamba – Plataforma de Retos Laborales",
    image: project1,
    category: "Web / Backend",
    description: `Desarrollé el backend de una plataforma que conecta empresas con talentos mediante desafíos prácticos.`,
    stacks: [
      { name: "C#", logo: csharp },
      { name: "MySQL", logo: sql },
      { name: "GitHub", logo: github },
    ],
  },
  {
    title: "TecSecure – Cerradura Inteligente",
    image: project2,
    category: "Web /Full Stack",
    description: `Desarrolle un Dashboard que permite controlar una cerradura inteligente desde un panel web 
    con autenticación segura y control remoto de usuarios.`,
    stacks: [
      { name: "Django", logo: django },
      { name: "MySQL", logo: sql },
      { name: "GitHub", logo: github },
    ],
  },
];

export const skills = [
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Django",
        level: "Intermediate",
        logo: django,
      },
      {
        skill: "Sql",
        level: "Intermediate",
        logo: sql,
      },
      {
        skill: "Nodejs",
        level: "Intermediate",
        logo: nodejs,
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
        logo: mongodb,
      },
      {
        skill: "C#",
        level: "Intermediate",
        logo: csharp,
      },
      {
        skill: "GitHub",
        level: "Experienced",
        logo: github,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "patrick.ayllon@tecsup.com.pe",
    link: "mailto:patrick.ayllon@tecsup.com.pe",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "Patrick Ayllon Rubio",
    link: "https://m.me/patrick.ayllonrubio.3",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+51 983764047",
    link: "https://wa.me/51983764047",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/PatrickAyllonRubio",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/patrick-ayllon-rubio",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    link: "https://www.instagram.com/patrickayllonrubio?igsh=MzludHhtcjVlYTRw",
  },
];

// export const testimonials = [
//   {
//     avatar: profile3,
//     name: "Samuel Eze",
//     review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
//   },
//   {
//     avatar: profile4,
//     name: "Emmanuel Joseph",
//     review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
//   },
//   {
//     avatar: profile5,
//     name: "Gloria Chiwendu",
//     review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
//   },
//   {
//     avatar: profile6,
//     name: "Precious Stone",
//     review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
//   },
// ];
