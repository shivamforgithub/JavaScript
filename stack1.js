var letters = [];  // stack 
var word = "racecar";
var rword = "";
var i = 0;
for(i = 0 ; i < word.length; i++){
    letters.push(word[i]);
}
for(i = 0 ; i < word.length; i++){
    rword += letters.pop();
}

if (rword == word){
    console.log("given word is pallindrome\n");
}
