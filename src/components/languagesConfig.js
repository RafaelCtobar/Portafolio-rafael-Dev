import {faHouse, faPencilRuler, faDiagramProject, faAddressCard} 
        from "@fortawesome/free-solid-svg-icons";
import skillData from ".././components/dataSkills.json"

const icons = [faHouse, faPencilRuler, faDiagramProject, faAddressCard];
const datos = skillData.frontEnd.basic;
export const españolConfig = {
    menuItems: ["Inicio", "Habilidades",  "Proyectos", "Contacto"],
    icons,
    title: "¡Hola! Mellamo Rafael Tobar y soy ",
    button: "Click para ver CV",
    bio: `Soy un apasionado del mundo de la tecnología y el
          desarrollo web. Con una formación completamente autodidacta
          he perfeccionado mis habilidades en diferentes
          herramientas para la creación de software.
          Emprendedor e independiente, si quieres ver algunos de mis
          proyectos puedes navegar por el `,
    footerContact: ["Número:  ", "Correo:  ", "Hecho con ♥ por Rafael Tobar."],
    skillTargetSectionTitle: "Destacable: ",
    insideTitle: ["Tecnologías básicas", "Herramientas CSS", "Librerías JS"],
    form: ['Háblame sobre tu proyecto...', 'Tu nombre', 'Dirección de email', 'Todos los detalles', 'Enviar']
}
export const inglesConfig = {
    menuItems: ["Home", "Skills",  "Projects", "Contact"],
    icons,
    title: "Hi! I'm Rafael Tobar and I'm",
    button: "Click to see resume",
    bio: `I'm  passionate about the world of technology and
          web development. With a completely self-taught training
          I have perfected my skills with different
          software creation tools.
          Entrepreneur and freelancer, if you want to see some of my
          projects you can browse the `,
    footerContact: ["Number:  ", "Email:  ", "Made with ♥ by Rafael Tobar."],
    skillTargetSectionTitle: "Remarkable: ",
    insideTitle: ["Basic technologies", "CSS tools", "JS libraries"],
    form: ['Tell me about your project...', 'Your name', 'Email address', 'All details', 'Send']
}