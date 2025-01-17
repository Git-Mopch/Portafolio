import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        projects: "View Projects",
        developer: "Web and Software developer",
        available: "Available",

        estudios1: "Web Application Development",
        estudios2: "Company Internship",
        estudios3: "Multiplatform Application Development",
        estudios4: "Company Internship",
        tituloEstudios: "Experience",
        subtitulosEstudios: '"Great changes require great efforts"',

        estudios1texto:
          "Thanks to this degree, I have been able to master languages that are very useful for everyday life as a web developer, including HTML, CSS, JavaScript, NodeJs, SQL, PhpMyAdmin, WordPress.",

        estudios2texto:
          "During my internship at Pulsap, I gained experience in WordPress layout, developing custom plugins in PHP, and troubleshooting issues on our clients' websites. Additionally, I strengthened my customer service skills by directly contacting them to offer efficient and personalized solutions.",

        estudios3texto:
          "At Dam, I learned the key fundamentals of cross-platform application development, gaining the knowledge needed to create functional apps for both Apple and Android ecosystems. In this course, I mastered languages like Kotlin, Python, Swift, PostgreSQL, and XML.",

        estudios4texto:
          "During my internship at Minderest, I learned how to monitor websites and extract data using advanced search tools. I also reinforced my web design skills and worked in a professional environment using Git and other collaborative tools.",

        estudios5texto:
          "This course by Dr. Angela Yu helped me deepen my knowledge of web development, acquiring useful tools and foundations to improve my skills. In addition to tools, I also learned new ways to structure a project and add innovative design approaches. In this comprehensive course, I fully understood the most widely used languages and tools such as: JavaScript, TypeScript, NodeJs, Bootstrap, React, FlexBox, Git.",

        estudios6texto:
          "In this Udemy course created by Jonathan Goyes, I learned how to develop a mobile application in depth by using tokens, APIs, and modern UI styles. Additionally, I had the privilege of diving deeper into Kotlin, as it is a very interesting and, above all, useful language for Android software development.",

        tituloSobreMi: "About Me",
        sobreMiHola: "Hello! My name is",
        sobreMiNombre: "Miguel Pomares",
        subtituloSobreMi: '"If you can imagine it, you can create it"',
        textoSobreMi:
          "Hello!🤓 My name is Miguel, I’m a 21-year-old passionate about learning and innovation. I have experience in active customer interaction and in the web development field. I stand out for my ability to quickly adapt to new challenges. I’m committed to continuous improvement and always aim to add value to the projects I participate in. I’m a proactive person with a strong work ethic and results-oriented.",
        botonCv: "Download CV",
        botonSobreMi1: "PROJECTS",
        botonSobreMi2: "EXPERIENCE",
        botonSobreMi2Sub: "YEARS",
        botonSobreMi3: "LANGUAGES",
        tituloPortafolio: "Portfolio",
        portafolios1: "Projects",
        portafolios2: "Certificates",
        portafolios3: "Languages",
        portafolios4: "Tools",
        proyecto1:
          "LiveCan offers innovative and durable dog chews designed to promote their dental health and entertainment. Quality and fun in every bite. 🐾",
        proyecto2:
          "Laroye Café is a cozy and family-friendly place where you can enjoy a unique gastronomic experience, with artisanal products and a young atmosphere. ☕",
        verMas: "See More",

        formTitulo: "Let's work together!",
        formtextopt1:
          "Do you have an idea, project, or collaboration in mind? I'm open to exploring new opportunities and working together on something amazing.",
        formtextopt2:
          "Share the details of your project, and I'll be happy to discuss how we can make it happen. Let's talk soon!",
        formNombre: "Name:",
        formMail: "Email:",
        formTextoMensaje: "Message:",
        formBtnTexto: "Send",
        toastexito: "Sent successfully",
        toastError: "There was an issue sending the email: ",
        inicio: "Home",
        sobreMi: "About Me",
        portafolio: "Portafolio",
        contacto: "Contact",

        textoLaroye:
          "Laroye Café offers a unique experience in a youthful and welcoming environment for all audiences. With a menu of handcrafted products created by culinary experts, this café stands out for its dedication to quality and service. Additionally, it features special promotions and an ideal space to share with family and friends. Come and enjoy a place where every day they strive to exceed your expectations and where your loyalty is rewarded.",
        textoLivecan:
          "At LiveCan, we are passionate about improving the lives of dogs and their owners. That's why we design high-quality chew toys, made with safe and durable materials, perfect for keeping your dog entertained while taking care of their dental health. Our products are designed to meet the needs of different breeds and sizes, ensuring fun and well-being. Discover how our chew toys can strengthen the bond with your four-legged best friend, providing hours of play and satisfaction. 🐶✨",

        funcionalidad1Livecan:
          "Integrated Shopping Cart: Users can easily add products to their cart and proceed to checkout seamlessly.",
        funcionalidad2Livecan:
          "Responsive Design: The website adapts effectively to different screen sizes, providing an optimal user experience on mobile and desktop devices.",
        funcionalidad3Livecan:
          "Secure Payment System: It offers multiple payment options and secure transactions to ensure customer data protection.",

        funcionalidad: "Functionality",
        lenguajes: "Languages",
        proyectos: "Projects",
        volverInicio: "Go Back",

        funcionalidad1Laroye:
          "Responsive Web Design: Adapts to various devices and screen sizes, ensuring a smooth experience on both mobile and desktop.",
        funcionalidad2Laroye:
          "Interactive Contact Form: Allows users to make reservations or request information quickly.",
        funcionalidad3Laroye:
          "Social Media Integration System: Enables direct interaction with platforms like Instagram and Facebook, enhancing customer communication.",
      },
    },
    es: {
      translation: {
        projects: "Ver Proyectos",
        available: "Disponible",
        developer: "Desarrollador web y software",
        estudios1: "Desarrollo de aplicaciones Web",
        estudios2: "Practicas Empresa",
        estudios3: "Desarrollo de aplicaciones Multiplataforma",
        estudios4: "Practicas Empresa",
        tituloEstudios: "Experiencia",
        subtitulosEstudios: '"Los grandes cambios requieren grandes esfuerzos"',
        estudios1texto:
          "Gracias a este grado he podido dominar lenguajes tan utiles para el dia a dia como desarrollador web entre ellos: Html, Css, JavaScript, NodeJs, Sql, PhpMyAdmin, Wordpress.",
        estudios2texto:
          "Durante mis prácticas en Pulsap, adquirí experiencia en maquetación con WordPress, desarrollo de plugins personalizados en PHP y resolución de problemas en las webs de nuestros clientes. Además, fortalecí mis habilidades de atención al cliente al contactar directamente con ellos para ofrecer soluciones eficientes y personalizadas.",
        estudios3texto:
          "En Dam aprendí los fundamentos claves sobre el desarrollo de aplicaciones multiplataforma, adquirimos el conocimiento necesario para desarrollar aplicaciones funcionales para dispositivos del ecosistema de Apple y de Android. En este curso dominé lenguajes como Kotlin, Python, Swift, PostgreSql, Xml.",
        estudios4texto:
          "Durante mis prácticas en Minderest, aprendí a monitorizar sitios web y realizar extracción de datos utilizando herramientas de búsqueda avanzadas. También reforcé mis conocimientos en maquetación web y trabajé en un entorno profesional utilizando Git y otras herramientas colaborativas.",
        estudios5texto:
          "Este curso de la Dr.Angela Yu, me ayudó a profundizar en el desarrollo web, adquiriendo herramientas y bases útiles para mejorar en el desarrollo. Además de herramientas, también aprendí nuevas formas de estructurar un proyecto, y a añadirles nuevos enfoques innovadores de diseño. En este curso tan completo comprendí en exactitud los lenguajes y las herramientas más utilizadas como: JavaScript, TypeScript, Node.Js, Bootstrap, React, FlexBox, Git",
        estudios6texto:
          "En este curso de Udemy creado por Jonathan Goyes, he aprendido a desarrollar una aplicación móvil en profundidad mediante el uso de Tokens, APIs, y estilos modernos de UI. Además, he tenido el privilegio de profundizar en Kotlin, ya que me parece un lenguaje muy interesante y, sobre todo, útil para el desarrollo de software en Android.",

        tituloSobreMi: "Sobre Mí",
        sobreMiHola: "Hola!, Me llamo",
        sobreMiNombre: "Miguel Pomares",
        subtituloSobreMi: '"Si pudes imaginarlo, puedes crearlo"',
        textoSobreMi:
          "Holaa!🤓 me llamo Miguel, soy un joven de 21 años apasionado por el aprendizaje y la innovación. Tengo experiencia en el trato activo con el cliente, y en el área del desarrollo web, destaco por mi capacidad para adaptarme rápidamente a nuevos desafíos. Estoy comprometido con la mejora continua y busco siempre aportar valor a los proyectos en los que participo. Soy una persona proactiva, con una fuerte ética de trabajo y orientada a resultados.",
        botonCv: "Descargar CV",
        botonSobreMi1: "PROYECTOS",
        botonSobreMi2: "EXPERIENCIA",
        botonSobreMi2Sub: "AÑOS",
        botonSobreMi3: "LENGUAJES",

        tituloPortafolio: "Portafolio",
        portafolios1: "Proyectos",
        portafolios2: "Certificados",
        portafolios3: "Lenguajes",
        portafolios4: "Herramientas",
        proyecto1:
          "LiveCan ofrece mordedores innovadores y resistentes para perros, diseñados para promover su salud dental y entretenimiento. Calidad y diversión en cada mordida. 🐾",
        proyecto2:
          "Laroye Café es un lugar acogedor y familiar donde puedes disfrutar de una experiencia gastronómica única, con productos artesanales y un ambiente joven. ☕",
        verMas: "Ver Más",

        formTitulo: "¡Trabajemos juntos!",
        formtextopt1:
          "¿Tienes una idea, proyecto o colaboración en mente? Estoy abierto a explorar nuevas oportunidades y trabajar juntos en algo increíble.",
        formtextopt2:
          "Compárteme los detalles de tu proyecto, y estaré encantado de discutir cómo podemos hacer que suceda. ¡Hablemos pronto!",
        formNombre: "Nombre:",
        formMail: "Correo:",
        formTextoMensaje: "Mensaje:",
        formBtnTexto: "Eviar",

        toastexito: "Enviado con éxito",
        toastError: "Hubo un problema enviando el correo: ",

        inicio: "Inicio",
        sobreMi: "Sobre Mi",
        portafolio: "Portafolio",
        contacto: "Contacto",

        textoLivecan:
          "En LiveCan nos apasiona mejorar la vida de los perros y sus dueños. Por eso diseñamos mordedores de alta calidad, fabricados con materiales seguros y duraderos, ideales para mantener a tu perro entretenido mientras cuidas su salud dental. Nuestros productos están pensados para adaptarse a las necesidades de diferentes razas y tamaños, asegurando diversión y bienestar. Descubre cómo nuestros mordedores pueden fortalecer el vínculo con tu mejor amigo de cuatro patas, ofreciéndole horas de juego y satisfacción. 🐶✨",
        textoLaroye:
          "Laroye Café ofrece una experiencia única en un ambiente joven y agradable para todos los públicos. Con una carta de productos artesanales elaborados por expertos en gastronomía, este café se distingue por su dedicación a la calidad y el servicio. Además, cuenta con promociones especiales y un espacio ideal para compartir con familiares y amigos. Ven a disfrutar de un lugar donde cada día mejoran para superar tus expectativas y donde tu fidelidad es recompensada.",

        funcionalidad1Livecan:
          "Carrito de Compras Integrado: Los usuarios pueden agregar productos a su carrito y proceder a la compra de manera sencilla.",
        funcionalidad2Livecan:
          "Responsive Design: La web se adapta correctamente a diferentes tamaños de pantalla, proporcionando una experiencia de usuario óptima en móviles y dispositivos de escritorio.",
        funcionalidad3Livecan:
          "Sistema de Pagos Seguro: Ofrece múltiples opciones de pago y seguridad en las transacciones para garantizar la protección de los datos del cliente.",

        funcionalidad: "Funcionalidad",
        lenguajes: "Lenguajes",
        proyectos: "Proyectos",
        volverInicio: "Volver incio",

        funcionalidad1Laroye:
          "Diseño Web Responsivo: Se adapta a diferentes dispositivos y tamaños de pantalla, asegurando una experiencia fluida tanto en móviles como en escritorio.",
        funcionalidad2Laroye:
          "Formulario de Contacto Interactivo: Permite a los usuarios hacer reservas o consultar información rápidamente.",
        funcionalidad3Laroye:
          "Sistema de Integración con Redes Sociales: Facilita la interacción directa con plataformas como Instagram y Facebook, mejorando la comunicación con los clientes.",
      },
    },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
