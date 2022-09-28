// Load boards from file or manually

const easy = [
    //empty board
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    //Solution String
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];
const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];
const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
];

//Create Variables
var timer;
var timeRemaining;
var lives;
var selectedNum;
var selectedTile;
var disableSelect;

window.onload = function () {
    //Run startgame function when button is clicked
    id("start-btn").addEventListener("click", startGame);
    //add event listener to each number and number container
    for (let i = 0; i < id("number-container").children.length; i++) {
        id("number-container").children[i].addEventListener("click", function () {
            //if selecting is not disabled
            if (!disableSelect) {
                //If number is already selected
                if (this.classList.contains("selected")) {
                    //Then remove selection
                    this.classList.remove("selected");
                    selectedNum = null;
                }else //deselect all other numbers
                for (let i =0; i < 9; i++){
                    id("number-container").children[i].classList.remove("selected");
                }
                //select it and update selectedNum Variable
                this.classList.add("selected");
                selectedNum = this;
                updateMove();
            }
        });
    }
}

function startGame() {
    //Choose board difficulty
    let board;
    if (id("easy").checked) {
        board = easy[0]
    } else if (id("medium").checked) {
        board = medium[0];
    } else board = hard[0];
    //Set lives to three and enable selecting numbers and tiles
    lives = 3;
    disableSelect = false;
    id("lives").textContent = "Lives Remaining: " + lives;
    //Create board based on difficulty
    generateBoard(board);
    //start timer
    startTimer();
    //show number container
    id("number-container").classList.remove("hidden");
}

function generateBoard(board) {
    //Clear previous board
    clearPrevious();
    //Let used to increment tile ids
    let idCount = 0;
    //create 81 tiles
    for (let i = 0; i < 81; i++) {
        //Create a new paragraph element
        let tile = document.createElement("p");
        //if the tile is not supposed to be blank
        if (board.charAt(i) !== "-") {
            //Set tile text to correct number
            tile.textContent = board.charAt(i);
        } else {
            //add event listener
        }
        //Assign tile id
        tile.id = idCount;
        //Increment for next tile
        idCount++;
        //add tile class to all tiles
        tile.classList.add("tile");
        if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 && tile.id < 54)) {
            tile.classList.add("bottomBorder");
        }
        if ((tile.id + 1) % 9 === 6 || (tile.id + 1) % 9 === 3) {
            tile.classList.add("rightBorder")
        }
        //Add tiles to board
        id("board").appendChild(tile);
    }
}

function clearPrevious() {
    //Access all of the tiles
    let tiles = qsa(".tile");

    //Remove each tile
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].remove();
    }

    //if there is a timer clear it
    if (timer) clearTimeout(timer);
    //deselect any numbers
    for (let i = 0; i < id("number-container").children.length; i++) {
        id("number-container").children[i].classList.remove("selected");
    }

    //Clear selected variables
    selectedTile = null;
    selectedNum = null;
}

function startTimer() {
    //set time remaining based on input
    if (id("time-short").checked) timeRemaining = 180;
    else if (id("time-med").checked) timeRemaining = 300;
    else timeRemaining = 600;

    //sets timer for first second
    id("timer").textContent = timeConversion(timeRemaining);
    //sets timer to update every second
    timer = setInterval(function () {
        timeRemaining--;
        if (timeRemaining === 0) endGame();
        id("timer").textContent = timeConversion(timeRemaining);
    }, 1000)

}

function timeConversion(time) {
    // converts seconds to string of MM:SS format
    let minutes = Math.floor(time / 60);
    if (minutes < 10) minutes = "0" + minutes;
    let seconds = time % 60;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
}





//Helper functions
function qs(selector) {
    return document.querySelector(selector);
}

function qsa(selector) {
    return document.querySelectorAll(selector);
}

function id(id) {
    return document.getElementById(id);
}