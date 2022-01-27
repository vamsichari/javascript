let x= ['krishna','vamsi','hemanth','bhargav','rajesh'];
x.toString().split("");
let y="";
for(let i=0;i<=x.length-1;i++){
let h=x[i];
for(let j=h.length-1;j>=0;j--){
    y+=h[j];
}
y+=" ";
}
console.log(y);