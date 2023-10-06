import { reviewersProject} from "../data/reviews.js"

renderStars();

function renderStars (){

    let ratingHtml =`
    <div>
    <button class="button-select">
    <span">Show All</span>
    </button>
    </div>  

`;
    for( let i=5 ; i > 0 ; i--){
        ratingHtml +=`
        <div>
            <button class="button-select">
            <img src="./img/ratings/star-filter.png" width="18px">
            <span">${i}</span>
            </button>
            </div>  
        `;
    }
    document.querySelector(".checkbox-rating").innerHTML = ratingHtml;
}

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