


const { JSON, json } = require('sequelize');
// const sequelize = new Sequelize(config.development);


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    return queryInterface.bulkInsert('dataprojects', [{
     title:"tokopedia",
     content:"ini adalah tokopedia",
     startDateId:"10-10-2023",
     endDateId:"30-10-2023",
     startDate:new Date(),
     endDate: new Date(),
     tech:JSON.stringify(
     {
      "nodejs": "true",
      "reactjs":"false",
     }),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);



  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('dataprojects', null, {});
  }
};
