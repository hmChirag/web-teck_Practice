const favmovie="kgf";
let guess=prompt("guess my fav movie");

while((guess!=favmovie)&&(guess!="quit")){
    console.log("you guessed it wrong");
    guess=prompt("guess again");
}

if(guess==favmovie){
    console.log("congratulations");
}else{
    console.log("u exited the game");
}


