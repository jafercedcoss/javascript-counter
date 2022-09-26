
    let count=0;

function abc (){
   var l= document.getElementById("countlable").innerHTML;
   console.log(l);   
    count+=1;
    document.getElementById("countlable").innerHTML = count;
}
function bcd(){
var l= document.getElementById("countlable").innerHTML;
if(l<=0)
{
    alert("value cant be negative");
}
else{
    console.log(l);   
    count-=1;
    document.getElementById("countlable").innerHTML = count;
}

}
