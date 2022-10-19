let num=13
let factors=0

for(let i=1;i<=num;i++){
    if(num%i==0){
factors++
        }
}
if(factors==2){
console.log("Prime)
}else{
console.log("Not Prime")