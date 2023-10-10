// import { reviewersProject} from "../data/reviews.js";

// const reviewersProject =[
//     {
//         name:"Harry Edward",
//     job:"Content Creator",
//     stars:5,
//     img:"https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg?w=826&t=st=1696926530~exp=1696927130~hmac=1b9c8192d3e6b4349abc44000cc06e45d88875dd4a51b9fd6ddee34a82489595",
//     quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
//      },
//      {
//         name:"Kit Connor",
//     job:"Bussines Analyst",
//     stars:4,
//     img:"https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?w=826&t=st=1696926575~exp=1696927175~hmac=7e034e4e38709d6e39b2ea9c45e78df123f8e49cc814629df4500c5b9be891e5",
//     quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
//      },
//      {
//         name:"Liam Payne",
//     job:"Software Engginer",
//     stars:5,
//     img:"https://img.freepik.com/premium-psd/3d-illustration-business-man-with-glasses_23-2149436193.jpg?w=826",
//     quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
//      },
//      {
//         name:"Louis Thomlin",
//     job:"Enterpreneur",
//     stars:4,
//     img:"https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436202.jpg?t=st=1696926342~exp=1696926942~hmac=9d2859bb406d0cd0eba04023299a1e3ea85944f547cf1df2ce0c7010899555bd",
//     quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
//      },
//      {
//         name:"Doja Cat",
//     job:"Enterpreneur",
//     stars:3,
//     img:"https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=826&t=st=1696926647~exp=1696927247~hmac=47d9397d74597ec6b14676c7497d03a977883847713f4e3ac62d1ae6850bd0ec",
//     quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
//      },
//      {
//         name:"Tom Holland",
//     job:"CEO of Panin Bank",
//     stars:5,
//     img:"https://img.freepik.com/premium-psd/3d-cartoon-character-isolated-3d-rendering_235528-535.jpg?w=826",
//     quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
//      },
//      {
//         name:"Sam",
//     job:"Content Creator",
//     stars:3,
//     img:"https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436181.jpg?t=st=1696926342~exp=1696926942~hmac=ce0d42f2496a9e04ab23850c0e1c41aa28f0ee3b4e3acbb265a391a7d89faaf4",
//     quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
//      },
//      {
//         name:"Mark Natama",
//     job:"Data Analyst",
//     stars:3,
//     img:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg",
//     quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
//      },
//      {
//         name:"Roni Parulian",
//     job:"Content Creator",
//     stars:2,
//     img:"https://img.freepik.com/premium-photo/3d-close-up-portrait-smiling-man_175690-201.jpg",
//     quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
//      },
    
// ];

// renderStars();
// renderAllPreviews();

// // let showALL = document.querySelector(".button-select");
// // showALL.addEventListener('click',()=>render());



// // rendering stars for filter button
// function renderStars (){
//     let ratingHtml =`
//     <div>
//     <button class="button-select" onclick="renderAllPreviews()">
//     <span">Show All</span>
//     </button>
//     </div>   `;


//     for( let i=5 ; i > 0 ; i--){
//         ratingHtml +=`
//                 <div>
//                 <button class="button-select button" onclick="filterDataByStars(${i})">
//                 <img src="./img/ratings/star-filter.png" width="18px">
//                 <span>${i}</span>
//                 </button>
//                 </div>  
//        `;
//     }
//     document.querySelector(".checkbox-rating").innerHTML = ratingHtml;
// }



// function renderAllPreviews(){
// let reviewHtml ="";
// reviewersProject.map((item)=>{
//     reviewHtml+=`
//     <div class="costumer-section">
//     <div class="container-cost-review">
//                 <img class="cost-profile-img" src="${item.img}" alt="profile-img">
//                 <div class="cost-profile-desc">
//                 <div class="cost-name">${item.name}</div>
//                 <div class="cost-job">${item.job}</div>
//                 <img class="cost-rating" src="./img/ratings/${item.stars}.png" alt="rating">
//                 <div class="cost-quotes-reviews">
//                     <p><q>
//                     ${item.quotes}
//                     </q></p>
//                 </div>
//                 </div>
//     </div>
//     </div>
    
//     `;

// })

// document.querySelector(".cost-review-section").innerHTML =reviewHtml;

// }

// //  Filter Data By stars

// function filterDataByStars(stars){
//     let resultFilterHtml ="";

//     let filterReviews = reviewersProject.filter( (item) => item.stars === stars)

// // console.log(filterReviews);

// if(filterReviews.length === 0){
//     resultFilterHtml+=`
//         <div class="noresult-js">
//         <h3>No Result</h3>
//         </div>
//     `;

// } else{

//     filterReviews.map((item)=>
//   resultFilterHtml+=`
  
//   <div class="costumer-section">
//   <div class="container-cost-review">
//               <img class="cost-profile-img" src="${item.img}" alt="profile-img">
//               <div class="cost-profile-desc">
//               <div class="cost-name">${item.name}</div>
//               <div class="cost-job">${item.job}</div>
//               <img class="cost-rating" src="./img/ratings/${item.stars}.png" alt="rating">
//               <div class="cost-quotes-reviews">
//                   <p><q>
//                   ${item.quotes}
//                   </q></p>
//               </div>
//               </div>
//   </div>
//   </div>
 
  
  
  
//   `);}
// document.querySelector(".cost-review-section").innerHTML =resultFilterHtml;
// }





    









