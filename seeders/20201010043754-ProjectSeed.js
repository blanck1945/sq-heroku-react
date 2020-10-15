'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('projects', [
      {
        project_name: 'RDVS Eventos',
        project_type: "Pagina Web",
        project_desc: "Pagina de publicación y compra de eventos online. Sistema de Login, User Dashboard, Dos tipo de roles. Autenticación con JWT. Formularios con Formik",
        project_URL: "https://react-eventos-rdvs.vercel.app/",
        project_github: "https://github.com/blanck1945/React_Eventos_RDVS",
        project_img: "Eventos.png",
        project_state: true,
        project_front: JSON.stringify(["React", "Redux", "SCSS", "Formik", "SWR", "TypeScript", "Webpack"]),
        project_back: JSON.stringify(["Adonisjs", "JWT", "Node"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_name: 'Starlight Mobile Page',
        project_type: "Pagina Web",
        project_desc: "Copia de la Pagina https://www.en.revuestarlight-relive.com/",
        project_URL: "https://starlight-mobile-page-qx3mekiu4.vercel.app/",
        project_github: "https://github.com/blanck1945/starlight_mobile_app",
        project_img: "starlight.png",
        project_state: true,
        project_front: JSON.stringify(["React", "Redux", "SCSS", "TypeScript", "Webpack"]),
        project_back: JSON.stringify(["Json-Server"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_name: 'Nextjs Pagina Personal',
        project_type: "Pagina Web",
        project_desc: "Pagina personal con mis proyectos, CV y datos de contacto",
        project_URL: "https://react-next-pagina-personal.vercel.app/",
        project_github: "https://github.com/blanck1945/React_Next_Pagina_Personal",
        project_img: "Pagina.png",
        project_state: true,
        project_front: JSON.stringify(["React", "Redux", "CSS"]),
        project_back: JSON.stringify(["Node", "Express", "Sequelize", "Postgres"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_name: 'Social Hostel Trindade',
        project_type: "Pagina Web",
        project_desc: "Static site del hostel Social Hostel Trindade creado con Gatsby",
        project_URL: "https://social-hostel-trindade.netlify.app/",
        project_github: "https://github.com/blanck1945/Gatsby-Social-Hostel",
        project_img: "social.png",
        project_state: true,
        project_front: JSON.stringify(["React", "Gatsby", "SCSS", "Context-API"]),
        project_back: JSON.stringify(["DatoCMS"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_name: 'Corona Virus Tracker',
        project_type: "Aplicación",
        project_desc: "Aplicación de conteo de casos y graficos sobre las estadisticas del Corona Virus",
        project_URL: "https://corona-tracker-arg.netlify.app/",
        project_github: "https://github.com/blanck1945/CoronaTracker",
        project_img: "Corona.png",
        project_state: true,
        project_front: JSON.stringify(["React", "Redux", "CSS"]),
        project_back: JSON.stringify([]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_name: 'Rendir',
        project_type: "Aplicación",
        project_desc: "Aplicación basada en el Keeper de la universidad del Siglo XXI",
        project_URL: "https://rendir-app.vercel.app/",
        project_github: "https://github.com/blanck1945/Rendir-App",
        project_img: "Rendir.png",
        project_state: true,
        project_front: JSON.stringify(["Vue", "Bulma"]),
        project_back: JSON.stringify(["Firebase"]),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        project_name: 'Book Depository',
        project_type: "Pagina Web",
        project_desc: "Copia de la pagina Book Depository.",
        project_URL: "https://vue-e-commerce.vercel.app/",
        project_github: "https://github.com/blanck1945/vue_e_commerce/tree/master/src",
        project_img: "Book.png",
        project_state: false,
        project_front: JSON.stringify(["Vue", "Vuex", "SCSS"]),
        project_back: JSON.stringify([
          "Node", "Express", "Knex"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', null, {});

  }
};


//comentario

/*
   {
        project_name: 'Aplicación de Examenes',
        project_type: "Aplicación",
        project_desc: "Copia del sistema de examen de la Universidad el SigloXXI",
        project_URL: "https://corona-tracker-arg.netlify.app/",
        project_github: "https://github.com/blanck1945/exam-repo",
        project_img: "Examen.png",
        project_state: true,
        project_front: JSON.stringify(["React", "Redux", "SCSS",]),
        project_back: JSON.stringify([
          "Firebase"
        ]),
        createdAt: new Date(),
        updatedAt: new Date()
      },*/