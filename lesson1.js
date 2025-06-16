// let a = 100;
// console.log(a);
let a=102;
if(a>90 && a<=100){
  console.log("Grade A");
}
else if(a>80 && a<=90){
  console.log("Grade B");
}
else if(a>70 && a<=80){
  console.log("Grade C");
}
else if(a<70){
  console.log("Grade D");
}
else{
  console.log("Invalid Mark");
}

let input = 20;
if(input==1){
  console.log(0);
}
else if(input==2){
  console.log(0);
  console.log(1);
}
else{
  console.log(0);
  console.log(1);
  let num1=0;
  let num2=1;
  for(i=1;i<input-1;i++){
    let num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    console.log(num3);
  }
}