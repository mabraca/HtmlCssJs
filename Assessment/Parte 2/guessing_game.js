var target;             
var guess_input;
var random_number_integer;      
var finished = false;   
var guesses = 0;
var colors = ["red", "blue", "yellow", "grey", "green", "white", "black"];
var numbers = ["#ff0000", "#0000ff", "#ffff00", "#808080", "#00ff40", "  #ffffff", "#000000"];


function game() {
    var random_number = Math.random() * 7;
    random_number_integer = Math.floor(random_number);
    target = colors[random_number_integer];
    console.log(random_number_integer);

    while (!finished) {
        guess_input = prompt("I am thinking of a color "+
                             "in the range of red, blue, yellow, grey, green, white or black.\n\n"+
                             "What is the color?");
        guesses += 1;   
        finished = check_guess();
    }
}

function check_guess() {
    if (guess_input.localeCompare("")==0) {
        alert("You have not entered a color.\n\n" +
              "Please enter a number in the range of red, blue, yellow, grey, green, white or black.");
        return false;
    }
    if (is_there()==false) {
        alert("Sorry, I don't recognize your color. Please try again");
        return false;
    }
    if (guess_input.length > target.length) {
        alert("Your color is alphabetically higher than mine!");
        return false;
    }
    if (guess_input.length < target.length) {
        alert("your color is alphabetically lower than mine");
        return false;
    }
    if (guess_input.length == target.length && target.localeCompare(guess_input)!=0) {
        alert("Your color is alphabetically equal than mine but it's not the color!");
        return false;
    }
    change_color();
    alert("You got it! color was " + target + 
          ".\n\nIt took you " + guesses + 
          " guesses to get the color!");
    
    return true;   
}

function is_there(array){
    for (i = 0; i < colors.length; i++) { 
        if(guess_input.localeCompare(colors[i]) == 0){
            return true;
        } 
    }
    return false;
}

function change_color(){
    document.body.style.background = numbers[random_number_integer];
}