const translations = {
  es: {
    title: "Bienvenido a mi sitio",
    description: "Este es un portafolio profesional de desarrollo web.",
    work: "Mis proyectos personales realizados.",
    projects: "Proyectos",
    about: "Acerca de mi",
    contact : "Contacto",
    field : "Desarrollador Full Stack",
    footer : "2025 Jesus Javier Velazquez Carrillo. Todos los derechos reservados",
    intro: "Un gusto presentarme. Me defino como alguien profesional, claro en sus objetivos, comprometido con la mejora constante y siempre dispuesto a colaborar activamente con su equipo.",
    about_1:"Soy Jesús Javier Velázquez Carrillo, Ingeniero en Electrónica con especialidad en Sistemas Embebidos. A lo largo de mi carrera, he ampliado mis habilidades hacia el desarrollo web, combinando lógica backend con interfaces modernas y funcionales",
     about_2:"Tengo experiencia en tecnologías como Angular, Spring Boot, PrimeFaces, Java, HTML/CSS y bases de datos SQL. También he trabajado en el desarrollo de sistemas embebidos, programación de microcontroladores",
    about_3: "Lo que me distingue, es mi capacidad para aprender de forma autodidacta, resolver problemas desde la raíz y adaptarme rápidamente a nuevos entornos tecnológicos. Me motiva enfrentar desafíos técnicos y encontrar soluciones eficientes, siempre buscando mejorar tanto a nivel técnico como personal.",
    about_4:"Más allá del código, disfruto explorar temas como la neurociencia, el rendimiento mental, y el desarrollo personal. Me inspiran los proyectos que representan un reto intelectual y que tienen un impacto positivo en el entorno.",
    about_5:"Actualmente, busco seguir creciendo como desarrollador Full Stack, aportar valor a proyectos innovadores y conectar con equipos que compartan la pasión por crear tecnología de calidad.",
    project_angular: "Catálogo Angular + Spring Boot",
    project_festival:"Festival de Música",
    project_cafe:"Blog de Café",
    project_store:"Tienda Online",
    project_freelance:"Dashboard Freelancer",
    },
  en: {
    title: "Welcome to my site",
    description: "This is a professional web development portfolio.",
     projects: "Projects",
     work: "My personal projects completed.",
     about: "About me",
     contact: "Contact",
     field : "Full Stack Developer",
     footer : "2025 Jesus Javier Velazquez Carrillo. All rights reserved",
     intro: "It's a pleasure to introduce myself. I define myself as a professional, clear-minded, committed to constant improvement, and always willing to actively collaborate with my team.",
      about_1:"I'm Jesús Javier Velázquez Carrillo, an electronics engineer specializing in embedded systems. Throughout my career, I've expanded my skills into web development, combining backend logic with modern, functional interfaces.",
    about_2:"I have experience in technologies such as Angular, Spring Boot, PrimeFaces, Java, HTML/CSS, and SQL databases. I have also worked in embedded systems development and microcontroller programming.",
    about_3:"What sets me apart is my ability to learn independently, solve root-level problems, and quickly adapt to new technological environments. I'm motivated by tackling technical challenges and finding efficient solutions, always seeking to improve both technically and personally.",
    about_4:"Beyond coding, I enjoy exploring topics like neuroscience, mental performance, and personal development. I'm inspired by projects that represent an intellectual challenge and have a positive impact on the environment.",
    about_5:"Currently, I'm looking to continue growing as a full-stack developer, adding value to innovative projects, and connecting with teams that share a passion for creating quality technology.",
     project_angular: "Angular + Spring Boot Catalog",
     project_festival:"Music Festival",
    project_cafe:"Coffee Blog",
    project_store:"Online Store",
    project_freelance:"Freelancer Dashboard",
},
};

function translatePage(language) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[language][key] || key;
  });
}

// Por defecto en español
document.addEventListener("DOMContentLoaded", () => {
  translatePage("es");

  const switcher = document.getElementById("language-switcher");
  switcher.addEventListener("change", (e) => {
    translatePage(e.target.value);
  });
});
