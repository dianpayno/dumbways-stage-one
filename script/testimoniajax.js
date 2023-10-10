const testimoni = new Promise ((resolve, reject)=>{
    const xhr = new XMLHttpRequest ();

    xhr.open("GET", "https://api.npoint.io/caa9bb34da6bcfcf36c2", true);
    xhr.onload = ()=>{
        if (xhr.status == 200){
            resolve(JSON.parse(xhr.response))
        } else{
            reject("Error Loading Data")
        }
    }     
    xhr.onerror =()=>{
        reject("Network error")
    }

    xhr.send();
});

renderStars();
renderAllPreviews();

// render Stars
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
                <span>${i}</span>
                </button>
                </div>  
       `;
    }
    document.querySelector(".checkbox-rating").innerHTML = ratingHtml;
}

async function renderAllPreviews(){

    try {
        const response = await testimoni;
        let reviewHtml ="";
        response.map((item)=>{
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

    } catch(error){
        console.log(error);
    }
   
    
    }
    
    //  Filter Data By stars
    
    async function filterDataByStars(stars){
        try{
            const response = await testimoni;
            let resultFilterHtml ="";
    
        let filterReviews = response.filter( (item) => item.stars === stars)
    
    // console.log(filterReviews);
    
    if(filterReviews.length === 0){
        resultFilterHtml+=`
            <div class="noresult-js">
            <h3>No Result</h3>
            </div>
        `;
    
    } else{
    
        filterReviews.map((item)=>
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
        } catch (error){

            console.log(error);
        }
        
    }
    