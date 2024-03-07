let nickName = ("Debugnator");  
let myLevel = 10500;

if(myLevel <= 1000) { 
 myLevel = "Ferro"
} 
else if ((myLevel >= 1001) && (myLevel <= 2000)) { 
 myLevel = "Bronze"  
} 
else if ((myLevel >= 2001) && (myLevel <= 5000)) { 
  myLevel = "Prata" 
} 
else if ((myLevel >= 5001) && (myLevel <= 7000)) { 
  myLevel = "ouro"  
} 
else if ((myLevel >= 7001) && (myLevel <= 8000)) { 
  myLevel = "Platina" 
} 
else if ((myLevel >= 8001) && (myLevel <= 9000)) { 
  myLevel = "kratos"
} 
else if ((myLevel >= 9001) && (myLevel <= 10000)) { 
  myLevel = "Keano Rives"
} 
else (myLevel = "ChuckNoris") 

console.log("O heroi " + nickName + " está no nivel " + myLevel)
