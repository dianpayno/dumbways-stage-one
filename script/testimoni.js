import { reviewersProject} from "../data/reviews.js"

// Ini Baru sementara lg dipelajari dulu saya simpan onclik di htmnya gajalan

renderAllPreviews();

// function renderStars (){
//     let ratingHtml =`
//     <div>
//     <button class="button-select" onclick="renderAllPreviews()">
//     <span">Show All</span>
//     </button>
//     </div>  

// `;
//     for( let i=5 ; i > 0 ; i--){
//         ratingHtml +=`
//                 <div>
//                 <button class="button-select button-choose-stars">
//                 <img src="./img/ratings/star-filter.png" width="18px">
//                 <span">${i}</span>
//                 </button>
//                 </div>  
//        `;
//     }
//     document.querySelector(".checkbox-rating").innerHTML = ratingHtml;
// };



function renderAllPreviews (){
let reviewHtml ="";
reviewersProject.forEach((item)=>{
    reviewHtml+=`
    <div class="costumer-section">
    <div class="container-cost-review">
                <img class="cost-profile-img" src="./img/profile-img-fixed.jpg" alt="profile-img">
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
        <h3 class="noresult-js">No Result</h3>
    `;

} else{

    filterReviews.forEach((item)=>
  resultFilterHtml+=`

  <div class="costumer-section">
  <div class="container-cost-review">
              <img class="cost-profile-img" src="./img/profile-img-fixed.jpg" alt="profile-img">
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





document.querySelector(".zero").addEventListener('click', () =>{
    renderAllPreviews()
    })
    document.querySelector(".satu").addEventListener('click', () =>{
        filterDataByStars(1);
        })

        document.querySelector(".dua").addEventListener('click', () =>{
            filterDataByStars(2);
            })

            document.querySelector(".tiga").addEventListener('click', () =>{
                filterDataByStars(3);
                })
                document.querySelector(".empat").addEventListener('click', () =>{
                    filterDataByStars(4);
                    })
            
                    document.querySelector(".lima").addEventListener('click', () =>{
                        filterDataByStars(5);
                        })

    










