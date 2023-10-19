// import sequalize tools

const { Sequelize, QueryTypes } = require("sequelize");
const config = require('../config/config.json');
const sequelize = new Sequelize(config.development);
const { dataproject } = require('../models');



const addproject  = async (req, res)=> {
    try {
         const {name, content, startDate, endDate, tech} = req.body;
       
       let nodejs = tech?.includes("nodejs");
       let reactjs =tech?.includes("reactjs");
       let nextjs = tech?.includes("nextjs");
       let typescript =tech?.includes("typescript");
      
       // fungsi hitung durasi pengerjaan
      
       let days="";
       let months="";  
       function countDuration (start, end){
           let dateStart = new Date (start);
           let dateEnd = new Date (end);
           let oneDay = (1000 * 3600 * 24);
       
           let selisih = dateEnd.getTime() - dateStart.getTime();
           let daysTotal = selisih/oneDay;
           let inAmonth = Math.floor(daysTotal/30);
               daysTotal = daysTotal % 30;
       
           days = daysTotal;
           months = inAmonth;
       }
     
       
       function formatDate (date){
           const dateParts = date.split("-");
           const year = dateParts[0];
           const month = dateParts[1];
           const day = dateParts[2];
           return `${day}-${month}-${year}`;
       }
       countDuration(startDate,endDate);
       let startDateIdFormat = formatDate(startDate);
       let endDateIdFormat = formatDate(endDate);
       
      
           
       
       let duration="";
           if(months === 0){
               duration +=`
               ${days} Days
               `
                   } 
               else if (months === 1 && days === 1){
                   duration += `
                   ${months} Month ${days} Day
                   `
               } else if (months === 1){
               duration += `
               ${months} Month ${days} Days
               `
               } else{
                   duration += `
                   ${months} Months ${days} Days
                   `
               };
             
      
   const dataObject={
       
            title:name,
            content,
            startDateId:startDateIdFormat,
            endDateId:endDateIdFormat,
            startDate,
            endDate,
            duration,
            tech:{
                    nodejs,
                    reactjs,
                    nextjs,
                    typescript,
                        }
       
   }
   
   const data = await dataproject.create(dataObject);
   console.log(data);

   res.redirect('/');

    } catch (error) {
        console.log(error,"<< cannot add data")
    }
   
}

const updateProject = async (req, res)=> {
    try {
    const {name, content, startDate, endDate, tech} = req.body;
   const {id} = req.params;
  const selectedId = await dataproject.findByPk(id);

   let nodejs = tech?.includes("nodejs");
   let reactjs =tech?.includes("reactjs");
   let nextjs = tech?.includes("nextjs");
   let typescript =tech?.includes("typescript");
      
       
       // fungsi hitung durasi pengerjaan
      
       let days="";
       let months="";  
       function countDuration (start, end){
           let dateStart = new Date (start);
           let dateEnd = new Date (end);
           let oneDay = (1000 * 3600 * 24);
       
           let selisih = dateEnd.getTime() - dateStart.getTime();
           let daysTotal = selisih/oneDay;
           let inAmonth = Math.floor(daysTotal/30);
               daysTotal = daysTotal % 30;
       
           days = daysTotal;
           months = inAmonth;
       }

       function formatDate (date){
           const dateParts = date.split("-");
           const year = dateParts[0];
           const month = dateParts[1];
           const day = dateParts[2];
           return `${day}-${month}-${year}`;
       }
       countDuration(startDate,endDate);
       let startDateIdFormat = formatDate(startDate);
       let endDateIdFormat = formatDate(endDate);
       
       let duration="";
           if(months === 0){
               duration +=`
               ${days} Days
               `
                   } 
               else if (months === 1 && days === 1){
                   duration += `
                   ${months} Month ${days} Day
                   `
               } else if (months === 1){
               duration += `
               ${months} Month ${days} Days
               `
               } else{
                   duration += `
                   ${months} Months ${days} Days
                   `
               };
   
   const dataObject={
    title:name,
    content,
    startDateId:startDateIdFormat,
    endDateId:endDateIdFormat,
    startDate,
    endDate,
    duration,
    tech:{
            nodejs,
            reactjs,
            nextjs,
            typescript,
                }
   }

  
   const data = await selectedId.update(dataObject);
   console.log(data);
   res.redirect('/');



    } catch (error) {
        console.log(error, '<<< cannot update data')  
    }
}

const contact =(req, res)=>{

   
    res.render("formcontact",);
 }
 const projectDetail  = async (req, res)=>{ 
    try {
        const {id} = req.params;
        const selectedId = await dataproject.findByPk(id);
        res.render("01-project", {project : selectedId});
     }
        
     catch (error) {
        console.log(error, '<<< cannot find anydata')
    }
}
   
 const myproject=(req, res)=>{
    res.render("myproject");
 }
 const testimoni = (req, res)=> {
    res.render("testimonial");
 }
 const home = async (req, res)=>{
    try {
        const newData = await dataproject.findAll();
        const dataPerseToObject = newData.map((data)=>({...data.toJSON()}));
        console.log(dataPerseToObject);
        res.render("index", { myproject : dataPerseToObject});
    } catch (error) {
        console.log(error, '<<< project tidak ditemukan')
    }
  
 }
 const deleteProject =  async(req, res)=>{
    try {
        const {id} = req.params
        const selectedId = await dataproject.findByPk(id);
        selectedId.destroy();
        res.redirect('/');

    } catch (error) {
        console.log(error, '<<< cannot delete data' )
    }
 }

 const editProject = async (req, res)=>{
    try {
        const {id} = req.params;
        const selectedId = await dataproject.findByPk(id);
        res.render("editproject",{editProject : selectedId});

    } catch (error) {
        console.log(error, '<< cannot find any data')
    }
   
 }


 module.exports = {addproject, updateProject,contact,projectDetail,myproject,testimoni,home,deleteProject, editProject};