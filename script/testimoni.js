// import { reviewersProject} from "../data/reviews.js";

const reviewersProject =[
    {
        name:"Harry Edward",
    job:"Content Creator",
    stars:5,
    img:"./img/ratingpic/1.jpg",
    quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
     },
     {
        name:"Kit Connor",
    job:"Bussines Analyst",
    stars:4,
    img:"./img/ratingpic/2.jpg",
    quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
     },
     {
        name:"Liam Payne",
    job:"Software Engginer",
    stars:5,
    img:"./img/ratingpic/3.jpg",
    quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
     },
     {
        name:"Louis Thomlin",
    job:"Enterpreneur",
    stars:4,
    img:"./img/ratingpic/4.jpg",
    quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
     },
     {
        name:"Doja Cat",
    job:"Enterpreneur",
    stars:3,
    img:"./img/ratingpic/5.jpg",
    quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
     },
     {
        name:"Tom Holland",
    job:"CEO of Panin Bank",
    stars:5,
    img:"./img/ratingpic/6.jpg",
    quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
     },
     {
        name:"Cris Evan",
    job:"Content Creator",
    stars:3,
    img:"./img/ratingpic/7.jpg",
    quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
     },
     {
        name:"Mark Natama",
    job:"Data Analyst",
    stars:3,
    img:"./img/ratingpic/8.jpg",
    quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
     },
     {
        name:"Roni Parulian",
    job:"Content Creator",
    stars:2,
    img:"./img/ratingpic/9.jpg",
    quotes:"You are a great introduction to modern front-end web design. It takes a broad high level view, shows you major components used in modern web design and shows you how the pieces fit together.",
     },
    
];


renderAllPreviews();
renderStars();
// let showALL = document.querySelector(".button-select");
// showALL.addEventListener('click',()=>render());



// rendering stars
function renderStars (){
    let ratingHtml =`
    <div>
    <button class="button-select" onclick="renderAllPreviews()">
    <span">Show All</span>
    </button>
    </div>   `;


    for( let i=5 ; i > 0 ; i--){
        ratingHtml +=`
                <div>
                <button class="button-select button" onclick="filterDataByStars(${i})">
                <img src="./img/ratings/star-filter.png" width="18px">
                <span">${i}</span>
                </button>
                </div>  
       `;
    }
    document.querySelector(".checkbox-rating").innerHTML = ratingHtml;
}



function renderAllPreviews(){
let reviewHtml ="";
reviewersProject.forEach((item)=>{
    reviewHtml+=`
    <div class="costumer-section">
    <div class="container-cost-review">
                <img class="cost-profile-img" src="${item.img}" alt="profile-img">
                <div class="cost-profile-desc">
                <div class="cost-name">${item.name}</div>
                <div class="cost-job">${item.job}</div>
                <img class="cost-rating" src="./img/ratings/${item.stars}.png" alt="rating">
                <div class="cost-quotes-reviews">
                    <p><q>
                    ${item.quotes}
                    </q></p>
                </div>
                </div>
    </div>
    </div>
    
    `;

})

document.querySelector(".cost-review-section").innerHTML =reviewHtml;

}

// Fungsi Untuk Filter Data By stars

function filterDataByStars(stars){
    let resultFilterHtml ="";

    let filterReviews = reviewersProject.filter( (item) => item.stars === stars)

// console.log(filterReviews);

if(filterReviews.length === 0){
    resultFilterHtml+=`
        <div class="noresult-js">
        <h3>No Result</h3>
        </div>
    `;

} else{

    filterReviews.forEach((item)=>
  resultFilterHtml+=`
  
  <div class="costumer-section">
  <div class="container-cost-review">
              <img class="cost-profile-img" src="${item.img}" alt="profile-img">
              <div class="cost-profile-desc">
              <div class="cost-name">${item.name}</div>
              <div class="cost-job">${item.job}</div>
              <img class="cost-rating" src="./img/ratings/${item.stars}.png" alt="rating">
              <div class="cost-quotes-reviews">
                  <p><q>
                  ${item.quotes}
                  </q></p>
              </div>
              </div>
  </div>
  </div>
 
  
  
  
  `);}
document.querySelector(".cost-review-section").innerHTML =resultFilterHtml;
}





    









