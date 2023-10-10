const isVip = true;

let checkingVip = new Promise((resolve, reject)=>{
if (isVip){
   resolve("You are VIP");
} else {
   reject("You are not VIP");
}
})

checkingVip
.then((respone => console.log(`Yes ${respone}`)))
.catch((respone => console.log(`Sorry ${respone}`)));