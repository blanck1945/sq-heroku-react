'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('projects', [
      {
        project_name: 'Starlight Mobile Page',
        project_type: "Pagina Web",
        project_desc: "Copia de la Pagina https://www.en.revuestarlight-relive.com/",
        project_URL: "https://starlight-mobile-page-qx3mekiu4.vercel.app/",
        project_github: "https://github.com/blanck1945/starlight_mobile_app",
        project_img: "starlight.png",
        project_state: true,
        project_tech: JSON.stringify(["React", "Redux", "SCSS", "TypeScript", "Webpack"]),
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
        project_tech: JSON.stringify(["React", "Gatsby", "SCSS", "Context-API", "DatoCMS"]),
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
        project_tech: JSON.stringify(["React", "Redux", "CSS", "HTML"]),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', null, {});

  }
};


//comentario