
const arr = [1,2,3,4,5,6];
 arr.forEach( (item)=>{
    console.log(item);
 });


 const arr2 = [1,2,3,4,5,6]
 const double = arr2.map((x)=>{
    return x*2
 })


console.log(double);


const arr4 = [1,2,3,4,5,6];
const sum = arr4.reduce((total, item)=>{
    console.log(total);
    // console.log(item);
    return total + item;

},0);

console.log(sum);
