
// membuat agar form pas di submit bisa kirim email
// Coba pakai addEventlistener instead of masukin fungsi dihtml nya
 
 let submit = document.querySelector(".submit-button");
submit.addEventListener('click',() =>{
     submitForm();
 })


function submitForm (){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let country =document.getElementById("country").value;
    let message =document.getElementById("message").value;

    if (name === ""){
       return alert("Input Your Name");
    } else if( email ===""){
        return alert(" Input Your Email");
    } else if( phone === ""){
       return alert("Input Your Phone Number")
    } else if (subject===""){
        return alert("Choose a Subject");
    } else if(country===""){
        return alert("Choose Your Country");
    }else if(message===""){
       return alert("Message cannot be empty")
    }

     let formItem = {
        name :name,
        email:email,
        phone:phone,
        subject:subject,
        country:country,
        message:message
    };

    console.log(formItem);

    let emailReciever = "dianpayno@gmail.com";

    let a = document.createElement("a");
    a.href=`mailto:${emailReciever}?subject= ${subject} &body=Hi dian, My name is ${name} from ${country}, Here is my email ${email} and my phone number ${phone}, would you mind to contact me back. ${message}`;
     a.click();
    //  ini cara kalo pake gmail
    // .a.href=`https://mail.google.com/mail/?view=cm&fs=1&to=${emailReciever}&su=${subject}&body=Halo dian, My name is ${name} from ${country}, ${message}.
    //  Here is my email ${email} and my phone number ${phone} Thank you`;
    // a.click();
    
    

};

