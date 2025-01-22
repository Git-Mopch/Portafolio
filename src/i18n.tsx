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
        Contacto: "Contact",

        textoLaroye:
          "My client, Laroye Café, entrusted me with the development of their website to create a modern and eye-catching digital presence that reflects the essence of their business. This project focused not only on design but also on user experience and functionality. I incorporated the brand’s typography and signature colors to ensure visual consistency and a strong corporate identity. Additionally, I implemented specific features such as interactive questionnaires to gather valuable customer insights and integrated Google Reviews to showcase the business's real-time reputation. This project highlights my ability to design tailored web solutions while collaborating closely with clients to understand their needs and transform them into functional, effective digital products.",
        textoLivecan:
          "LiveCan approached me to design a modern and functional e-commerce platform to effectively showcase and sell their animal toys. The goal was to build a user-friendly website equipped with all the necessary tools for running an online business seamlessly. The platform features an integrated payment gateway to ensure secure and efficient transactions. I also developed custom forms to collect valuable customer data and improve communication. Additionally, I implemented key e-commerce functionalities, such as inventory management and order tracking, providing a comprehensive solution tailored to their needs. This project highlights my expertise in crafting e-commerce platforms that not only meet the client’s expectations but are also optimized for operational efficiency and business growth.",
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
        formBtnTexto: "Enviar",

        toastexito: "Enviado con éxito",
        toastError: "Hubo un problema enviando el correo: ",

        inicio: "Inicio",
        sobreMi: "Sobre Mi",
        portafolio: "Portafolio",
        Contacto: "Contacto",

        textoLivecan:
          "LiveCan me solicitó crear un e-commerce moderno y funcional que le permitiera vender sus juguetes para animales de manera eficiente y atractiva. Desde el inicio, el objetivo fue diseñar una plataforma sencilla para los usuarios pero con todas las herramientas necesarias para gestionar un negocio en línea. El sitio incluye una pasarela de pagos integrada, garantizando transacciones seguras y rápidas. También desarrollé formularios personalizados para capturar datos relevantes y facilitar la interacción con los clientes. Además, implementé funcionalidades específicas de un e-commerce, como el control de inventarios y el seguimiento detallado de pedidos, asegurando una experiencia completa tanto para el cliente como para el usuario final. Este proyecto destaca mi capacidad para crear soluciones de e-commerce que no solo cumplen con los requisitos del cliente, sino que también están optimizadas para la eficiencia y el crecimiento del negocio.",
        textoLaroye:
          "Mi cliente, Laroye Café, me encargó el desarrollo de su sitio web con el objetivo de proyectar una imagen moderna y llamativa que refleje la esencia de su negocio. Este proyecto no solo se centró en el diseño, sino también en la experiencia del usuario y la funcionalidad. Se trabajó con la tipografía y los colores característicos de la marca para garantizar consistencia visual e identidad corporativa. Además, integré funcionalidades específicas, como cuestionarios interactivos para captar información valiosa de los clientes y la integración de reseñas de Google, lo que permite destacar la reputación del negocio en tiempo real. Este proyecto no solo demuestra mi capacidad para diseñar soluciones web personalizadas, sino también para trabajar en equipo con mis clientes, entender sus necesidades y traducirlas en productos digitales funcionales y efectivos.",
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
