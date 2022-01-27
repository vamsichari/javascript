function leap(year)
{
    if(year%4==0 && year%400==0 && year%100){
        console.log("leap year");
    }else{
        console.log("not a leap year");
    }
}
leap(2000)