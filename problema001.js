var sum=0; //Suma de calculat
var max=1000; //Pana unde vrem sa ajungem
for(var i=0; i<max; i++){
  if(i%3==0 || i%5==0){
    sum +=i;
  }
}
console.log(sum);
