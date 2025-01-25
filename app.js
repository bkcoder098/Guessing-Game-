 const max = prompt("enter your max number ");

 const random = Math.floor(Math.random()*max)+1;

 let guess = prompt("guess your number ");

 while(true){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }

    if(guess == random){
        console.log(" Congrats! your guess is right..");
        break;
    }

    else if(guess<random){
        guess = prompt("your guess is to small , please try again ");
    }

    else if (guess > random) {
        guess = prompt("your guess to large! please try again")
    }
 }