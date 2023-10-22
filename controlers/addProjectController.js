// import sequalize tools

const { Sequelize, QueryTypes} = require("sequelize");
const config = require('../config/config.json');
const sequelize = new Sequelize(config.development);
const { dataproject } = require('../models');
const { types } = require("pg");
const { use } = require("../routes");


const addproject  = async (req, res)=> {
    try {
         const {name, content, startDate, endDate, tech} = req.body;
         const {idUser} = req.session;
         const img = req.file.filename;


       let nodejs = tech?.includes("nodejs");
       let reactjs =tech?.includes("reactjs");
       let nextjs = tech?.includes("nextjs");
       let typescript =tech?.includes("typescript");
      
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
       countDuration(startDate,endDate);
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
             
     
       function formatDate (date){
           const dateParts = date.split("-");
           const year = dateParts[0];
           const month = dateParts[1];
           const day = dateParts[2];
           return `${day}-${month}-${year}`;
       }
       let startDateId = formatDate(startDate);
       let endDateId = formatDate(endDate);

      
       
   const dataObj={
            title:name,
            content,
            startDate,
            endDate,
            startDateId,
            endDateId,
            duration,
            tech:JSON.stringify({
            nodejs,
            reactjs,
            nextjs,
            typescript,
            }),
            author:idUser,
             img
   }
   
//    const newData = await dataproject.create(dataObj);
   const query = `INSERT INTO dataprojects ( 
    title, 
    content, 
    "startDate", 
    "endDate", 
    "startDateId", 
    "endDateId", 
    duration, 
    tech, 
    author, 
    img, 
    "createdAt", 
    "updatedAt"
    ) VALUES ( 
        '${dataObj.title}', 
        '${dataObj.content}', 
        '${dataObj.startDate}',
        '${dataObj.endDate}', 
        '${dataObj.startDateId}', 
        '${dataObj.endDateId}', 
        '${dataObj.duration}', 
        '${dataObj.tech}',
        ${dataObj.author}, 
        '${dataObj.img}', 
        NOW(), 
        NOW()
        )`;

   const newData= await sequelize.query(query, {type:QueryTypes.INSERT});
   console.log(newData);
   res.redirect('/');

    } catch (error) {
        console.log(error,"<< cannot add data")
    }
   
}

const updateProject = async (req, res)=> {
    try {
    const {name, content, startDate, endDate, tech} = req.body;
    const {id} = req.params;
    const {idUser} = req.session;
    const selectedId = await dataproject.findByPk(id);
      // const query =`
    // SELECT * FROM dataprojects WHERE dataprojects.id =${id}`;
    // const selectedId = await sequelize.query(query,{type : QueryTypes.SELECT});
    // const newData = selectedId.map((data)=>({...data}));
    //     console.log(newData[0]);

     
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
    const newImg = req.file?.filename;
    const oldImg = selectedId.img;

    const img = !newImg? oldImg : newImg;
    console.log(img);

        const dataObject={
            title:name,
            content,
            startDateId:startDateIdFormat,
            endDateId:endDateIdFormat,
            startDate,
            endDate,
            duration,
            author:idUser,
            img,
            tech:{
                    nodejs,
                    reactjs,
                    nextjs,
                    typescript,
                        },
           }
           const data = await selectedId.update(dataObject);
           console.log(data);
           res.redirect('/');
   
    } catch (error) {
        console.log(error, '<<< cannot update data')  
    }
}

const contact =(req, res)=>{
    res.render("formcontact",
    {
        isLogin: req.session.isLogin,
            user: req.session.user
    });
 }
 const projectDetail  = async (req, res)=>{ 
    try {
        const {id} = req.params;
        console.log(id);
        // const selectedId = await dataproject.findByPk(id);
        const query =`SELECT 
        dataprojects.id, 
        title,
        content, 
        "startDate", 
        "endDate", 
        "startDateId", 
        "endDateId", 
        duration, 
        tech, 
        img, 
        dataprojects.
        "createdAt", 
        dataprojects."updatedAt", 
        users.name AS author 
        FROM dataprojects LEFT JOIN users ON dataprojects.author = users.id WHERE dataprojects.id =${id}`;

        const selectedId = await sequelize.query(query, {type : QueryTypes.SELECT});
        const newData = selectedId.map((data)=>({...data}))
        console.log(newData);
        res.render("01-project", {
            project : newData[0],
            isLogin: req.session.isLogin,
             user: req.session.user
        });
     }
        
     catch (error) {
        console.log(error, '<<< cannot find anydata')
    }
}
   
 const myproject=(req, res)=>{
    res.render("myproject",{
        isLogin: req.session.isLogin,
        user: req.session.user
    });
 }
 const testimoni = (req, res)=> {
    res.render("testimonial",
    {
        isLogin: req.session.isLogin,
            user: req.session.user}
          
    );
 }
 const home = async (req, res)=>{
    try {
        // const newData = await dataproject.findAll();
        const {isLogin, idUser } = req.session;                                       
        if (isLogin){
            const query = `SELECT 
            dataprojects.id, 
            title, 
            content, 
            "startDate", 
            "endDate", 
            "startDateId",                                                                          
            "endDateId", 
            duration, 
            tech, 
            img, 
            dataprojects.
            "createdAt", 
            dataprojects.
            "updatedAt", 
            users.name as author
            FROM dataprojects LEFT JOIN users ON dataprojects.author = users.id
            WHERE users.id =${idUser}  ORDER BY dataprojects.id DESC`;
            let newData = await sequelize.query(query,{type :QueryTypes.SELECT});
            const data  = newData.map((data)=>({
                ...data,
                isLogin : req.session.isLogin,
                user : req.session.user,
            }));
            res.render("index", { 
                myproject : data,
                isLogin: req.session.isLogin,
                 user: req.session.user
            });
        }else{
            const query = `SELECT 
            dataprojects.id, 
            title, 
            content, 
            "startDate", 
            "endDate", 
            "startDateId",                                                                          
            "endDateId", 
            duration, 
            tech, 
            img, 
            dataprojects.
            "createdAt", 
            dataprojects.
            "updatedAt", 
            users.name as author
            FROM dataprojects LEFT JOIN users ON dataprojects.author = users.id
            ORDER BY dataprojects.id DESC`;
    
            let newData = await sequelize.query(query,{type :QueryTypes.SELECT});
            const data  = newData.map((data)=>({
                ...data,
                isLogin : req.session.isLogin,
                user : req.session.user,
            }));

            res.render("index", { 
                myproject : data,
                isLogin: req.session.isLogin,
                 user: req.session.user
            });
        }
        
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
        const query =`SELECT 
        dataprojects.id, 
        title,
        content, 
        "startDate", 
        "endDate", 
        "startDateId", 
        "endDateId", 
        duration, 
        tech, 
        img, 
        dataprojects.
        "createdAt", 
        dataprojects."updatedAt", 
        users.name AS author 
        FROM dataprojects LEFT JOIN users ON dataprojects.author = users.id WHERE dataprojects.id =${id}`;
        
        const selectedId = await sequelize.query(query,{type : QueryTypes.SELECT});
        const newData = selectedId.map((data)=>({...data}));
        res.render("editprojectfixed",{
            edit : newData[0],
            isLogin: req.session.isLogin,
            user: req.session.user
        });

    } catch (error) {
        console.log(error, '<< cannot find any data')
    }
   
 }

 


 module.exports = {addproject, updateProject,contact,projectDetail,myproject,testimoni,home,deleteProject, editProject};
