// let hamburgerToggleOn = false;

// const openHamburger = ()=>{
//     let hamburgerNav = document.getElementById("hamburger-toggle");

//     if(!hamburgerToggleOn){
//         hamburgerNav.style.display = "block";
//         hamburgerToggleOn=true;
//     } else{
//         hamburgerNav.style.display= "none";
//         hamburgerToggleOn=false;
//     }
// }

// Toggle Hamburger
const menuToggle = document.querySelector(".hamburger-toggle");
const nav = document.querySelector(".right-section ul");


menuToggle .addEventListener('click', ()=> {
    nav.classList.toggle("slide");
 
})


// Scroll Fixed
window.onscroll = function (){
    fixedNavbar()
};

let navbar = document.querySelector(".container-navbar");
let sticky = navbar.offsetTop;

function fixedNavbar(){
    if (window.pageYOffset > sticky){
        navbar.classList.add("fixed")
    } else{
        navbar.classList.remove("fixed");
    }
}
;

// let tgl = new Date ();

// let format = tgl.toLocaleDateString("en-Gb");

// console.log(format);
 let final ="";
function format (tgl){
    let result = tgl.toLocaleDateString("in-ID");
 final = result;
    
}

 format(new Date());
 console.log(final);


//  let selectedGender = [ "male", "female"]


//  let male = selectedGender?.includes("male");
//  let female= selectedGender?.includes("female");

//  const genderObject = {
//     male,
//     female
//  }

//  console.log(genderObject);

console.log("hallo")

