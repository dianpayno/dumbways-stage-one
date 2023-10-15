 const myProject = [];

 
// let submit = document.querySelector(".submit-button");
// submit.addEventListener('click', (event) =>{
//     addMyProject(event);
// });


// Count Project duration
let days="";
let months="";
function durationCount (start, end){

    let dateStart = new Date (start);
    let dateEnd = new Date (end);
    let oneDay = (1000 * 3600 * 24);

    let selisih = dateEnd.getTime() - dateStart.getTime();
    let daysTotal = selisih/oneDay;
    let inAmonth = Math.floor(daysTotal/30);
        daysTotal = daysTotal % 30;

    days = daysTotal;
    months = inAmonth;

    // console.log(selisih);
    // console.log(daysTotal);
    // console.log(inAmonth);
   
}



function addMyProject(event){
    event.preventDefault();
    
    
    let projectName = document.getElementById("nama-project").value;
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let descProject = document.getElementById("desc-project").value;

    // Ambil Value Checkbox yang Checked.
    let checkbox = document.getElementsByName("tech");
    let tech=[];
      for (let i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked){
          let techOption = checkbox[i].value;
            // console.log(techoption);
            tech.push(techOption);   
        }  
      };

      

     let imgProject = document.getElementById("input-blog-image").files;
    // script untuk mengubah file img jadi url
     imgProject = URL.createObjectURL(imgProject[0]);

    // console.log(imgProject)

    //Hitung durasi pengerjaan
    durationCount(startDate,endDate);

    
   

const myProjectObject = {
    projectName,
    days,
    months,
    techProject:tech,
    descProject,
    imgProject
}

    myProject.push(myProjectObject);
    //  console.log(myProject);
    renderMyProject ();

};





 function renderMyProject (){
    let myProjectHTML = "";

    for(let i=0; i< myProject.length; i++){
        let project = myProject[i];

        // looping menampilkan img of tech
        let techProject="";
            for (let i =0; i < project.techProject.length; i++ ){
                techProject += `
                <img src="./img/tech/${project.techProject[i]}.svg"></img>
                `;
            };
            
        // kondisi untuk menampilkan format durasi
        let duration="";
            if(project.months === 0){
                duration +=`
                ${project.days} Days
                `
                    } 
                else if (project.months === 1 && project.days === 1){
                    duration += `
                    ${project.months} Month ${project.days} Day
                    `
                } else if (project.months === 1){
                duration += `
                ${project.months} Month ${project.days} Days
                `
                } else{
                    duration += `
                    ${project.months} Months ${project.days} Days
                    `
                }
                    

        myProjectHTML += `
                    <a href="\project">
                    <div class="card-project-1">
                    <div class="container-card-project">
                        <div class="card-project-img">
                            <img src="${project.imgProject}">
                        </div>
                        <div class="card-project-title">${project.projectName}</div>
                        <div class="card-project-duration">
                            <div>
                            Duration :${duration}
                            </div>
                        </div>
                        <div class="card-project-desc">
                            <p>
                               ${project.descProject}
                            </p>
                        </div>

                        <div class="card-project-tech">
                        <div class="tech-option">
                        ${techProject}
                        </div>
                        </div>
                         
                        <div class="card-project-button">
                        <button class="edit-button">Edit</button>
                        <button class="delete-button">Delete</button>
                        </div>
                           
                    </div>
                </div></a> `;
       
    };

    document.querySelector(".container-content").innerHTML = myProjectHTML;
   
};




