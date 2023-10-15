let sliderHtml = "";
for (i=0; i<7; i++){
    sliderHtml+=`
    <a href="/project">
                 <div class="card-project-1">
                    <div class="container-card-project">
                        <div class="card-project-img">
                            <img src="img/tokopedia-clone.png">
                        </div>
                        <div class="card-project-title">Tokopedia Clone</div>
                        <div class="card-project-duration">Duration : 30 Days</div>
                        <div class="card-project-desc">
                            <p>
                                Belanja Apa Aja Pasti Hemat di Tokopedia! Selalu Ada, Selalu Bisa. Apapun Kebutuhanmu, Tokopedia Selalu Ada & Selalu Bisa Hemat. Bisa COD. Bebas Ongkir. Bisa Same Day Delivery.
                            </p>
                        </div>
                            <div class="card-project-tech">
                                <div class="tech-option">
                                    <img src="img/tech/nextjs.svg">
                                    <img src="img/tech/reactjs.svg">
                                    <img src="img/tech/nodejs.svg">
                                    <img src="img/tech/typescript.svg">
                                </div>
                            </div>
    
                            <div class="card-project-button">
                                <button class="edit-button">Edit</button>
                                <button class="delete-button">Delete</button>
                            </div>
                        
                    </div> 
                </div>
            </a>   
    `
}
document.querySelector(".container-content").innerHTML = sliderHtml;