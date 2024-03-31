
/*
var user=prompt("Enter postive value")
document.write("user\n"+user+"<br>")
var round=Math.round(user)
document.write("round\n"+round +"<br>") 
var ceil=Math.ceil(user)
document.write("ceil\n"+ceil +"<br>")
var floor=Math.floor(user)
document.write("floor\n"+floor +"<br>")
*/

/*

var user=prompt("Enter negativww value")
document.write("user\n"+user+"<br>")
var round=Math.round(user)
document.write("round\n"+round +"<br>") 
var ceil=Math.ceil(user)
document.write("ceil\n"+ceil +"<br>")
var floor=Math.floor(user)
document.write("floor\n"+floor +"<br>")
*/


/*
var user= prompt("enter a number")
document.write("negative value is"+user+"<br>" )
var abs=Math.abs(user)
document.write("absolute value is"+abs+"<br>"  )
*/

/*
var dice=Math.random()*10
var length=dice.toFixed(0)
console.log('value of dice is:'+length)
var dice1=Math.random()*10
var length1=dice1.toFixed(0)
console.log('value of dice is:'+length1)
*/

/*
var head=Math.random()*2
var result=head.toFixed()
console.log(result)
if(result==='2'){
    console.log("head")
}
else if(result==='1'){
    console.log("tail")
}
else{
   console.log("nan") 
}
*/
/*
var random=Math.random()*100+0
var result=random.toFixed()
console.log("The random number between 1 and 100 is\n"+result)
*/


var random=Math.floor(Math.random()*10+0)
 var user=+prompt("Enter a number from 1 to 10")
if(!user){
    alert('invalid input')
}
while (random!=user) {
   user=+prompt('Wrong.guess the number again')
    if(user===random){
        console.log("congragulate")
    }
    break;
}
console.log(user,random)
    
 