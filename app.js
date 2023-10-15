
const { createSecretKey } = require("crypto");
const express = require("express");
const path = require("path");
const { start } = require("repl");
const app = express();
const PORT = 3000;
// const data = require ("./src/mocks/blog.json");
const data =[];






// setup hbs 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'))



// mengambil data dari form/body
 app.use(express.urlencoded({ extended: false }));

// perantara untuk ambil file static
app.use(express.static("src/asset"));




// routing
app.get('/', home);
app.get('/contact', contact);
app.get('/testimoni', testimoni);   
app.get('/myproject', myproject);
app.get('/project/:id', project);

app.post('/addproject', addproject);
app.get("/deleteproject/:id", deleteProject);

app.get("/editproject/:id", editProject)
app.post("/updateProject", updateProject)


app.listen(PORT, ()=>{
    console.log("server running on port 3000")
});



//function route

function addproject (req, res){
     const {name, content, startDate, endDate} = req.body;
        //ambil selected tech dalam checkbox
        const selectedTech = req.body.tech; 
        let nodejs = selectedTech?.includes("nodejs");
        let reactjs =selectedTech?.includes("reactjs");
        let nextjs = selectedTech?.includes("nextjs");
        let typescript =selectedTech?.includes("typescript");
       
        
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
        date:{
            startDateIdFormat,
            endDateIdFormat,
            startDate,
            endDate
            },
        duration,
        selectedTech:{
            nodejs,
            reactjs,
            nextjs,
            typescript,
                }
        
    }

    data.unshift(dataObject);
   
    console.log(data);
    res.redirect('/');
}

function home(req, res){
    res.render("index", {myproject:data});
    
}

function deleteProject(req, res){
    const id = req.params.id;

    data.splice(id, 1);
    res.redirect('/');

}

function editProject(req, res){
    const id = req.params.id;
    const selectedIndex = data[id];

    res.render("editproject",{editProject :selectedIndex} )


}
 function updateProject(req, res){
    const {name, content, startDate, endDate} = req.body;
    const selectedTech = req.body.tech;

    let nodejs = selectedTech?.includes("nodejs");
    let reactjs =selectedTech?.includes("reactjs");
    let nextjs = selectedTech?.includes("nextjs");
    let typescript =selectedTech?.includes("typescript");
       
        
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
        date:{
            startDateIdFormat,
            endDateIdFormat,
            startDate,
            endDate
            },
        duration,
        selectedTech:{
            nodejs,
            reactjs,
            nextjs,
            typescript,
                }

    
        
    }


    const id = req.params.id;
    console.log(id);
    data.splice(id ,1, dataObject);
   
    console.log(data);
    res.redirect('/');



 }

function contact(req, res){

    
    res.render("formcontact",);
}
function project(req, res){ 
    const id = req.params.id;
    const selectedIndex = data[id];
    console.log(selectedIndex);
    res.render("01-project", {project : selectedIndex})
}
function myproject(req, res){
    res.render("myproject");
}
function testimoni(req, res){
    res.render("testimonial");
}



// app.get('/tes', (req, res)=>{
//     res.send("halooo");
// })

// local server



