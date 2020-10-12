'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('techs', [{
      tech_name: "HTML",
      tech_type: "Lenguaje",
      tech_field: JSON.stringify(["Front-end"]),
      tech_img: "HTML.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "CSS",
      tech_type: "Lenguaje",
      tech_field: JSON.stringify(["Front-end"]),
      tech_img: "CSS.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "JavaScript",
      tech_type: "Lenguaje",
      tech_field: JSON.stringify(["Front-end", "Back-end"]),
      tech_img: "JS.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "TypeScript",
      tech_type: "Lenguaje",
      tech_field: JSON.stringify(["Front-end", "Back-end"]),
      tech_img: "TS.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Webpack",
      tech_type: "Modulador de Paquetes",
      tech_field: JSON.stringify(["Entorno"]),
      tech_img: "WEBPACK.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "React",
      tech_type: "Librería",
      tech_field: JSON.stringify(["Font-end"]),
      tech_img: "REACT.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Redux",
      tech_type: "Librería",
      tech_field: JSON.stringify(["Font-end"]),
      tech_img: "REDUX.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Formik",
      tech_type: "Librería",
      tech_field: JSON.stringify(["Font-end"]),
      tech_img: "FORMIK.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "SWR",
      tech_type: "Librería",
      tech_field: JSON.stringify(["Font-end"]),
      tech_img: "SWR.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "React-Router",
      tech_type: "Librería",
      tech_field: JSON.stringify(["Font-end"]),
      tech_img: "ROUTER.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Vue",
      tech_type: "Framework",
      tech_field: JSON.stringify(["Font-end"]),
      tech_img: "VUE.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Node",
      tech_type: "Framework",
      tech_field: JSON.stringify(["Entorno"]),
      tech_img: "NODE.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Express",
      tech_type: "Framework",
      tech_field: JSON.stringify(["Back-end"]),
      tech_img: "EXPRESS.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Adonis.js",
      tech_type: "Framework",
      tech_field: JSON.stringify(["Back-end"]),
      tech_img: "ADONIS.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Knex",
      tech_type: "Query-Builder",
      tech_field: JSON.stringify(["Back-end"]),
      tech_img: "KNEX.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Sequelize",
      tech_type: "ORM",
      tech_field: JSON.stringify(["Back-end"]),
      tech_img: "SEQUELIZE.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "SASS",
      tech_type: "Lenguaje",
      tech_field: JSON.stringify(["Front-end"]),
      tech_img: "SASS.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Tailwindcss",
      tech_type: "Framework",
      tech_field: JSON.stringify(["Front-end"]),
      tech_img: "TAILWIND.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Gatsbyjs",
      tech_type: "Framework",
      tech_field: JSON.stringify(["Front-end"]),
      tech_img: "GATSBY.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Nextjs",
      tech_type: "Framework",
      tech_field: JSON.stringify(["Back-end"]),
      tech_img: "NEXT.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "SQL",
      tech_type: "Lenguaje",
      tech_field: JSON.stringify(["Back-end"]),
      tech_img: "SQL.png",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "PostgresSQL",
      tech_type: "Base de Datos",
      tech_field: JSON.stringify(["Back-end"]),
      tech_img: "POSTGRES.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "MongoDB",
      tech_type: "Base de Datos",
      tech_field: JSON.stringify(["Back-end"]),
      tech_img: "MONGO.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Firebase - Firestore",
      tech_type: "Base de Datos",
      tech_field: JSON.stringify(["Cloud"]),
      tech_img: "FIREBASE.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "Moongose",
      tech_type: "ORM",
      tech_field: JSON.stringify(["Back-end"]),
      tech_img: "MOONGOSE.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tech_name: "GIT - GITHUB",
      tech_type: "Control de Versiones",
      tech_field: JSON.stringify(["Terminal"]),
      tech_img: "GIT.svg",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
