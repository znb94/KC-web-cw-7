

function bmi (weight,height){
let result = weight / (height * height)
return result;

}

consolr.log(bmi(70,1.7));


function status (bmi) { 
if(bmi < 18.5 ) {
    return"لديك نقص في الوزن"
    

}else if (bmi >= 18.5 && bmi < 25){
    return "وزنك صحي "


} else {
    return "لديك زيادة في الوزن"


}
}


function calculate (){
let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

let bmi = bmi (weight,height);

let desc = status(bmi);



let div = document.getElementById("result");

div.innerText = bmi + " == " + desc ;



}


function math (x = 5,y = 3) {
console.log(x + Y)



}
 
math(50,30)


function math (x = 5,y = 3) {
    console.log(x + Y)
    
    
    
    }
     
    math(50,30)
