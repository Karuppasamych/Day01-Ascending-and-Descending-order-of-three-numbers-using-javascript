let a = 10;
let b = 7;
let c = 5;


if(a >= b && a >= c){

    if(b>=c){
        console.log('Descending order number 1', a, b ,c);
        console.log('Ascending order number 1', c, b ,a);
        console.log("If HS");
    }
    else{
        alert("inside Else HS");
        console.log('Descending order number 2', a, c ,b);
        console.log('Ascending order number 2', b, c ,a);

    }
   
}