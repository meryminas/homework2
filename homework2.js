 const a = 50;
 const b = 14;
 const c = 2;
 const age = 18;
 const firstName = "Mery"
 const lastName = "Minasyan"
 
setTimeout(function(){
	alert("by the way, I am Mery " + "(" +(a-b)/c + " years old)")
}, 1000);
setTimeout(function(){  
    alert("I've spent almost " + (10-4) + " hours on writing this code, and I know it is a huge amount of time for this " + ":'("  )
}, 1000);
  
 if(age !== 18 && firstName !== "Mery" && lastName !== "Minasyan") {
    console.log("This is not Mery's code");
  } else if( age === (a + 4)/3 && firstName === "Mery" && lastName === "Minasyan") {
      console.log("This is Mery's code"); 
  } else {
      console.log ("something went wrong!")
  }
  if( a >= 10 || (!!!(b === c * 7)) ){
    console.log("yeaah");
  } else {
    console.log("try again :'( ");  
  }
   console.log("good luck to me, I hope I wrote my homework properly.")
  
  
