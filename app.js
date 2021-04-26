
//Display Insturctions
function instructions() {
var x = document.getElementById("instruc");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}


// Code To For Player & Computer To Place Ships

var userEmpty = ["1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H", "1I", "1J",
"2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H", "2I", "2J",
"3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H", "3I", "3J",
"4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J",
"5A", "5B", "5C", "5D", "5E", "5F", "5G", "5H", "5I", "5J",
"6A", "6B", "6C", "6D", "6E", "6F", "6G", "6H", "6I", "6J",
"7A", "7B", "7C", "7D", "7E", "7F", "7G", "7H", "7I", "7J",
"8A", "8B", "8C", "8D", "8E", "8F", "8G", "8H", "8I", "8J",
"9A", "9B", "9C", "9D", "9E", "9F", "9G", "9H", "9I", "9J",
"10A", "10B", "10C", "10D", "10E", "10F", "10G", "10H", "10I", "10J"];

var allSquares = ["1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H", "1I", "1J",
"2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H", "2I", "2J",
"3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H", "3I", "3J",
"4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J",
"5A", "5B", "5C", "5D", "5E", "5F", "5G", "5H", "5I", "5J",
"6A", "6B", "6C", "6D", "6E", "6F", "6G", "6H", "6I", "6J",
"7A", "7B", "7C", "7D", "7E", "7F", "7G", "7H", "7I", "7J",
"8A", "8B", "8C", "8D", "8E", "8F", "8G", "8H", "8I", "8J",
"9A", "9B", "9C", "9D", "9E", "9F", "9G", "9H", "9I", "9J",
"10A", "10B", "10C", "10D", "10E", "10F", "10G", "10H", "10I", "10J"];

var userFiller = [];


var instruction = document.getElementById("currentInstruction");


document.getElementById("start").onclick = function placeCruiser(){



//Placing Crusier
  instruction.innerHTML = "Please place your Cruiser, you can do this using the form under your board";

  var form = document.getElementById("cruiserPlacement");
  form.style.display = "block";

  var placeShip = document.getElementById("placeShip");

  placeShip.onclick = function() {
      form.style.display = "none";
    var square = form.elements[0].value;

    var direction = document.querySelector('input[name = "place"]:checked').value;


    var cruiser1 = document.getElementById(square);

  cruiser1.innerHTML += '<img class="inGrid" src="images/005-yacht.png" alt="Cruiser">';
  var choiceLength = square.length;

  if (choiceLength == 3) {
     var num = "10";

  } else {
  var num = square.charAt(0);
}

if (num == "10") {
  var letter = square.charAt(2);
} else {
  var letter = square.charAt(1);
}
  var nextSquare;

  if (direction == "vertical") {
    nextLetter(letter);

    nextSquare = num+letter1;
    //placing crusiser square 2
    var cruiser2 = document.getElementById(nextSquare);
    cruiser2.innerHTML += '<img class="inGrid" src="images/005-yacht.png" alt="Cruiser">';

  } else if (direction == "horizontal") {
    num = parseInt(num);
    if (num == 10) {
      nextSquare = 9+letter;
    } else {
    nextSquare = (num+1)+ letter;
  }
    //placing crusiser square 2
    var cruiser3 = document.getElementById(nextSquare);
    cruiser3.innerHTML += '<img class="inGrid" src="images/005-yacht.png" alt="Cruiser">';

  }
  boatPlaced(square);
  boatPlaced(nextSquare);
  var nextBoat = document.getElementById("nextBoat");
  nextBoat.style.display = "inline-block";

  document.getElementById("start").style.display= "none";
};

};


document.getElementById("nextBoat").onclick = function placeCarrier(){

//placing Carrier
instruction.innerHTML = "Please place your Carrier, you can do this using the form under your board";

var form1 = document.getElementById("carrierPlacement");
form1.style.display = "block";

var placeCarrier = document.getElementById("placeCarrier");

placeCarrier.onclick = function() {
  // Get Infomation From Form
  var square = form1.elements[0].value;
  var direction2 = document.querySelector('input[name = "placeCarrier"]:checked').value;

  if (square.length == 3) {
     var num = "10";
  } else {
  var num = square.charAt(0);
}

if (num == "10") {
  var letter = square.charAt(2);
} else {
  var letter = square.charAt(1);
}

var nextSquare1;
var nextSquare2;

if (direction2 == "vertical") {

  if (letter == "J") {
    nextSquare1 = num+ "I";
    nextSquare2 = num+ "H";
  } else if (letter == "I") {
    nextSquare1 = num+ "J";
    nextSquare1 = num+ "H";
  } else {
    nextLetter(letter);
    nextSquare1 = num+letter1;
    nextLetter(letter1);
    nextSquare2 = num+letter1;
}

} else if (direction2 == "horizontal") {
  num = parseInt(num);
  if (num == 10) {
    nextSquare1 = "9"+ letter;
    nextSquare2 = "8"+ letter;
  } else if (num == 9) {
    nextSquare1 = "10"+ letter;
    nextSquare2 = "8"+ letter;
  } else {
    nextSquare1 = (num+1)+ letter;
    nextSquare2 = (num+2)+ letter;
  }
}

//Check if Square is already used
var found1 = userFiller.includes(square);
var found2 = userFiller.includes(nextSquare1);
var found3 = userFiller.includes(nextSquare2);

if (found1 == true) {
  window.alert("This Sqaure already has a boat in, please choose another.");
} else if (found2 == true) {
    window.alert("This Sqaure already has a boat in, please choose another.");
} else if (found3 == true) {
    window.alert("This Sqaure already has a boat in, please choose another.");
} else {

//Place ship Image into choicen square
var carrier1 = document.getElementById(square);
carrier1.innerHTML += '<img class="inGrid" src="images/003-ship.png" alt="Carrier">';
var choiceLength = square.length;
//placing carrier square 2
var carrier2 = document.getElementById(nextSquare1);
carrier2.innerHTML += '<img class="inGrid" src="images/003-ship.png" alt="Cruiser">';
//placing carrier square 3
var carrier3 = document.getElementById(nextSquare2);
carrier3.innerHTML += '<img class="inGrid" src="images/003-ship.png" alt="Cruiser">';

boatPlaced(square);
boatPlaced(nextSquare1);
boatPlaced(nextSquare2);

  form1.style.display = "none";
  var nextBoat = document.getElementById("nextBoat");
  nextBoat.style.display = "none";
  var submarine = document.getElementById("submarine");
  submarine.style.display = "inline-block";
}
}
}


document.getElementById("submarine").onclick = function placeSubmarine(){

  //placing Submarine
  instruction.innerHTML = "Please place your Submarine, you can do this using the form under your board";

  var form2 = document.getElementById("submarinePlacement");
  form2.style.display = "block";

  var placeSubmarine = document.getElementById("placeSubmarine");

  placeSubmarine.onclick = function() {
    // Get Infomation From Form
    var square = form2.elements[0].value;
    var direction2 = document.querySelector('input[name = "placeSubmarine"]:checked').value;

    if (square.length == 3) {
       var num = "10";
    } else {
    var num = square.charAt(0);
  }

  if (num == "10") {
    var letter = square.charAt(2);
  } else {
    var letter = square.charAt(1);
  }

  var nextSquare1;
  var nextSquare2;

  if (direction2 == "vertical") {

    if (letter == "J") {
      nextSquare1 = num+ "I";
      nextSquare2 = num+ "H";
    } else if (letter == "I") {
      nextSquare1 = num+ "J";
      nextSquare2 = num+ "H";
    } else {
      nextLetter(letter);
      nextSquare1 = num+letter1;
      nextLetter(letter1);
      nextSquare2 = num+letter1;
  }

  } else if (direction2 == "horizontal") {
    num = parseInt(num);

    if (num == 10) {
      nextSquare1 = "9"+ letter;
      nextSquare2 = "8"+ letter;
    } else if (num == 9) {
      nextSquare1 = "10"+ letter;
      nextSquare2 = "8"+ letter;
    } else {
      nextSquare1 = (num+1)+ letter;
      nextSquare2 = (num+2)+ letter;
    }
  }

  //Check if Square is already used
  var found1 = userFiller.includes(square);
  var found2 = userFiller.includes(nextSquare1);
  var found3 = userFiller.includes(nextSquare2);

  if (found1 == true) {
    window.alert("This Sqaure already has a boat in, please choose another.");
  } else if (found2 == true) {
      window.alert("This Sqaure already has a boat in, please choose another.");
  } else if (found3 == true) {
      window.alert("This Sqaure already has a boat in, please choose another.");
  } else {

  //Place ship Image into choicen square
  var submarine1 = document.getElementById(square);
  submarine1.innerHTML += '<img class="inGrid" src="images/002-vehicle.png" alt="submarine">';
  var choiceLength = square.length;
  //placing submarine square 2
  var submarine2 = document.getElementById(nextSquare1);
  submarine2.innerHTML += '<img class="inGrid" src="images/002-vehicle.png" alt="submarine">';
  //placing submarine square 3
  var submarine3 = document.getElementById(nextSquare2);
  submarine3.innerHTML += '<img class="inGrid" src="images/002-vehicle.png" alt="submarine">';

  boatPlaced(square);
  boatPlaced(nextSquare1);
  boatPlaced(nextSquare2);

    form2.style.display = "none";
    var submarine = document.getElementById("submarine");
    submarine.style.display = "none";
    var destroyer = document.getElementById("destroyer");
    destroyer.style.display = "inline-block";
  }
  }
}

document.getElementById("destroyer").onclick = function placeDestroyer(){

  //placing Submarine
  instruction.innerHTML = "Please place your Destroyer, you can do this using the form under your board";

  var form3 = document.getElementById("destroyerPlacement");
  form3.style.display = "block";

  var placeDestroyer = document.getElementById("placeDestroyer");

  placeDestroyer.onclick = function() {
    // Get Infomation From Form
    var square = form3.elements[0].value;
    var direction2 = document.querySelector('input[name = "placeDestroyer"]:checked').value;

    if (square.length == 3) {
       var num = "10";
    } else {
    var num = square.charAt(0);
  }

  if (num == "10") {
    var letter = square.charAt(2);
  } else {
    var letter = square.charAt(1);
  }

  var nextSquare1;
  var nextSquare2;
  var nextSquare3;

  if (direction2 == "vertical") {

    if (letter == "J") {
      nextSquare1 = num+ "I";
      nextSquare2 = num+ "H";
      nextSquare3 = num+ "G";
    } else if (letter == "I") {
      nextSquare1 = num+ "J";
      nextSquare2 = num+ "H";
      nextSquare3 = num+ "G";
    } else if (letter == "H"){
      nextSquare1 = num+ "J";
      nextSquare2 = num+ "I";
      nextSquare3 = num+ "G";
    } else {
      nextLetter(letter);
      nextSquare1 = num+letter1;
      nextLetter(letter1);
      nextSquare2 = num+letter1;
      nextLetter(letter1);
      nextSquare3 = num+letter1;
  }

  } else if (direction2 == "horizontal") {
    num = parseInt(num);

    if (num == 10) {
      nextSquare1 = "9"+ letter;
      nextSquare2 = "8"+ letter;
      nextSquare3 = "7"+ letter;
    } else if (num == 9) {
      nextSquare1 = "10"+ letter;
      nextSquare2 = "8"+ letter;
      nextSquare3 = "7"+ letter;
    } else if (num == 8) {
      nextSquare1 = "9"+ letter;
      nextSquare2 = "10"+ letter;
      nextSquare3 = "7"+ letter;
    } else {
      nextSquare1 = (num+1)+ letter;
      nextSquare2 = (num+2)+ letter;
      nextSquare3 = (num+3)+ letter;
    }
  }

  //Check if Square is already used
  var found1 = userFiller.includes(square);
  var found2 = userFiller.includes(nextSquare1);
  var found3 = userFiller.includes(nextSquare2);
  var found4 = userFiller.includes(nextSquare3);

  if (found1 == true) {
    window.alert("This Sqaure already has a boat in, please choose another.");
  } else if (found2 == true) {
      window.alert("This Sqaure already has a boat in, please choose another.");
  } else if (found3 == true) {
      window.alert("This Sqaure already has a boat in, please choose another.");
  } else if (found4 == true) {
      window.alert("This Sqaure already has a boat in, please choose another.");
  } else {

  //Place ship Image into choicen square
  var destroyer1 = document.getElementById(square);
  destroyer1.innerHTML += '<img class="inGrid" src="images/004-pirates.png" alt="destroyer">';
  var choiceLength = square.length;
  //placing destroyer square 2
  var destroyer2 = document.getElementById(nextSquare1);
  destroyer2.innerHTML += '<img class="inGrid" src="images/004-pirates.png" alt="destroyer">';
  //placing destroyer square 3
  var destroyer3 = document.getElementById(nextSquare2);
  destroyer3.innerHTML += '<img class="inGrid" src="images/004-pirates.png" alt="destroyer">';
  //placing destroyer square 4
  var destroyer4 = document.getElementById(nextSquare3);
  destroyer4.innerHTML += '<img class="inGrid" src="images/004-pirates.png" alt="destroyer">';

  boatPlaced(square);
  boatPlaced(nextSquare1);
  boatPlaced(nextSquare2);
  boatPlaced(nextSquare3);

    form3.style.display = "none";
    var destroyer = document.getElementById("destroyer");
    destroyer.style.display = "none";
    var airCarrier = document.getElementById("airCarrier");
    airCarrier.style.display = "inline-block";
  }
  }
}

document.getElementById("airCarrier").onclick = function placeAirCarrier(){

  //placing Air Carrier
  instruction.innerHTML = "Please place your Air Carrier, you can do this using the form under your board";

  var form4 = document.getElementById("airCarrierPlacement");
  form4.style.display = "block";

  var placeAirCarrier = document.getElementById("placeAirCarrier");

  placeAirCarrier.onclick = function() {
    // Get Infomation From Form
    var square = form4.elements[0].value;
    var direction2 = document.querySelector('input[name = "placeAirCarrier"]:checked').value;

    if (square.length == 3) {
       var num = "10";
    } else {
    var num = square.charAt(0);
  }

  if (num == "10") {
    var letter = square.charAt(2);
  } else {
    var letter = square.charAt(1);
  }

  var nextSquare1;
  var nextSquare2;
  var nextSquare3;
  var nextSquare4;

  if (direction2 == "vertical") {

    if (letter == "J") {
      nextSquare1 = num+ "I";
      nextSquare2 = num+ "H";
      nextSquare3 = num+ "G";
      nextSquare4 = num+ "F";
    } else if (letter == "I") {
      nextSquare1 = num+ "J";
      nextSquare2 = num+ "H";
      nextSquare3 = num+ "G";
      nextSquare4 = num+ "F";
    } else if (letter == "H"){
      nextSquare1 = num+ "J";
      nextSquare2 = num+ "I";
      nextSquare3 = num+ "G";
      nextSquare4 = num+ "F";
    } else if (letter == "F"){
      nextSquare1 = num+ "J";
      nextSquare2 = num+ "I";
      nextSquare3 = num+ "G";
      nextSquare4 = num+ "H";
    } else {
      nextLetter(letter);
      nextSquare1 = num+letter1;
      nextLetter(letter1);
      nextSquare2 = num+letter1;
      nextLetter(letter1);
      nextSquare3 = num+letter1;
      nextLetter(letter1);
      nextSquare4 = num+letter1;
  }

  } else if (direction2 == "horizontal") {
    num = parseInt(num);

    if (num == 10) {
      nextSquare1 = "9"+ letter;
      nextSquare2 = "8"+ letter;
      nextSquare3 = "7"+ letter;
      nextSquare4 = "6"+ letter;
    } else if (num == 9) {
      nextSquare1 = "10"+ letter;
      nextSquare2 = "8"+ letter;
      nextSquare3 = "7"+ letter;
      nextSquare4 = "6"+ letter;
    } else if (num == 8) {
      nextSquare1 = "9"+ letter;
      nextSquare2 = "10"+ letter;
      nextSquare3 = "7"+ letter;
      nextSquare4 = "6"+ letter;
    } else if (num == 6) {
      nextSquare1 = "9"+ letter;
      nextSquare2 = "10"+ letter;
      nextSquare3 = "7"+ letter;
      nextSquare4 = "8"+ letter;
    } else {
      nextSquare1 = (num+1)+ letter;
      nextSquare2 = (num+2)+ letter;
      nextSquare3 = (num+3)+ letter;
      nextSquare4 = (num+4)+ letter;
    }
  }

  //Check if Square is already used
  var found1 = userFiller.includes(square);
  var found2 = userFiller.includes(nextSquare1);
  var found3 = userFiller.includes(nextSquare2);
  var found4 = userFiller.includes(nextSquare3);
  var found5 = userFiller.includes(nextSquare4);


  if (found1 == true) {
    window.alert("This Sqaure already has a boat in, please choose another.");
  } else if (found2 == true) {
      window.alert("This Sqaure already has a boat in, please choose another.");
  } else if (found3 == true) {
      window.alert("This Sqaure already has a boat in, please choose another.");
  } else if (found4 == true) {
      window.alert("This Sqaure already has a boat in, please choose another.");
    } else if (found5 == true) {
        window.alert("This Sqaure already has a boat in, please choose another.");
  } else {

  //Place ship Image into choicen square
  var airCarrier1 = document.getElementById(square);
  airCarrier1.innerHTML += '<img class="inGrid" src="images/001-plane.png" alt="Air Carrier">';
  var choiceLength = square.length;
  //placing destroyer square 2
  var airCarrier2 = document.getElementById(nextSquare1);
  airCarrier2.innerHTML += '<img class="inGrid" src="images/001-plane.png" alt="Air Carrier">';
  //placing destroyer square 3
  var airCarrier3 = document.getElementById(nextSquare2);
  airCarrier3.innerHTML += '<img class="inGrid" src="images/001-plane.png" alt="Air Carrier">';
  //placing destroyer square 4
  var airCarrier4 = document.getElementById(nextSquare3);
  airCarrier4.innerHTML += '<img class="inGrid" src="images/001-plane.png" alt="Air Carrier">';
  //placing airCarrier square 4
  var airCarrier5 = document.getElementById(nextSquare4);
  airCarrier5.innerHTML += '<img class="inGrid" src="images/001-plane.png" alt="Air Carrier">';

  boatPlaced(square);
  boatPlaced(nextSquare1);
  boatPlaced(nextSquare2);
  boatPlaced(nextSquare3);
  boatPlaced(nextSquare4);


    form4.style.display = "none";
    var airCarrier = document.getElementById("airCarrier");
    airCarrier.style.display = "none";

    document.getElementById("beginGame").style.display= "inline-block";

  }
  }
}

//Computer Boat Placement
var compEmpty = ["1A", "1B", "1C", "1D", "1E", "1F", "1G", "1H", "1I", "1J",
"2A", "2B", "2C", "2D", "2E", "2F", "2G", "2H", "2I", "2J",
"3A", "3B", "3C", "3D", "3E", "3F", "3G", "3H", "3I", "3J",
"4A", "4B", "4C", "4D", "4E", "4F", "4G", "4H", "4I", "4J",
"5A", "5B", "5C", "5D", "5E", "5F", "5G", "5H", "5I", "5J",
"6A", "6B", "6C", "6D", "6E", "6F", "6G", "6H", "6I", "6J",
"7A", "7B", "7C", "7D", "7E", "7F", "7G", "7H", "7I", "7J",
"8A", "8B", "8C", "8D", "8E", "8F", "8G", "8H", "8I", "8J",
"9A", "9B", "9C", "9D", "9E", "9F", "9G", "9H", "9I", "9J",
"10A", "10B", "10C", "10D", "10E", "10F", "10G", "10H", "10I", "10J"];
var compFilled = [];
var compNum;
var comLetter;

function compShips() {
  //Placing Computer Crusier
  // Return random number between 0-100
  var num1 = Math.floor(Math.random()*101);
  var comp1 = compEmpty[num1];
  compEmpty.splice(num1, 1);
  compFilled.push(comp1);


  if (comp1.length == 3) {
     var compNum = "10";
  } else {
  var compNum = comp1.charAt(0);
}

if (compNum == "10") {
  var compLetter = comp1.charAt(2);
} else {
  var compLetter = comp1.charAt(1);
}

var compDirec = compDirection();
var compNextSquare;

  if (compDirec == "vertical") {
    var compLetter1 = nextLetter(compLetter);
    compNextSquare = compNum+compLetter1;
  } else if (compDirec == "horizontal") {
    compNum = parseInt(compNum);
    if (compNum == 10) {
    compNextSquare = 9+compLetter;
    } else {
    compNextSquare = (compNum+1)+ compLetter;
  }
}

compBoatPlaced(compNextSquare);

var carrier = compCarrier();

//Check if Square is already used
var compFound1 = compFilled.includes(carrier.compNextSquare2);
var compFound2 = compFilled.includes(carrier.compThirdSquare2);


//Not Fully Effective Fail Safe, needs Improvement
if (compFound1 == true) {
  var carrier = compCarrier();
} else if (compFound2 == true) {
  var carrier = compCarrier();
}

//Place Carrier
compEmpty.splice(carrier.num2, 1);
compFilled.push(carrier.comp2);


compBoatPlaced(carrier.compNextSquare2);
compBoatPlaced(carrier.compThirdSquare2);

var submarine = compSubmarine();

//Check if Square is already used
var compFound1 = compFilled.includes(submarine.compNextSquare3);
var compFound2 = compFilled.includes(submarine.compThirdSquare3);

if (compFound1 == true) {
  var submarine = compSubmarine();
} else if (compFound2 == true) {
  var submarine = compSubmarine();
}



//Placing Submarine
compEmpty.splice(submarine.num3, 1);
compFilled.push(submarine.comp3);

compBoatPlaced(submarine.compNextSquare3);
compBoatPlaced(submarine.compThirdSquare3);


var destroyer = compDestoyer();

//Check if Square is already used
var compFound1 = compFilled.includes(destroyer.compNextSquare4);
var compFound2 = compFilled.includes(destroyer.compThirdSquare4);
var compFound3 = compFilled.includes(destroyer.compFourthSquare4);




if (compFound1 == true) {
  var destroyer = compDestoyer();
} else if (compFound2 == true) {
  var destroyer = compDestoyer();
} else if (compFound3 == true) {
 var destroyer = compDestoyer();
}

compEmpty.splice(destroyer.num4, 1);
compFilled.push(destroyer.comp4);


compBoatPlaced(destroyer.compNextSquare4);
compBoatPlaced(destroyer.compThirdSquare4);
compBoatPlaced(destroyer.compFourthSquare4);


var aircarftCarrier = compAircraftCarrier();


//Check if Square is already used
var compFound1 = compFilled.includes(aircarftCarrier.compNextSquare5);
var compFound2 = compFilled.includes(aircarftCarrier.compThirdSquare5);
var compFound3 = compFilled.includes(aircarftCarrier.compFourthSquare5);
var compFound4 = compFilled.includes(aircarftCarrier.compFifthSquare5);



if (compFound1 == true) {
  var aircarftCarrier = compAircraftCarrier();
} else if (compFound2 == true) {
  var aircarftCarrier = compAircraftCarrier();
} else if (compFound3 == true) {
  var aircarftCarrier = compAircraftCarrier();
} else if (compFound4 == true) {
  var aircarftCarrier = compAircraftCarrier();
}

compEmpty.splice(aircarftCarrier.num5, 1);
compFilled.push(aircarftCarrier.comp5);

compBoatPlaced(aircarftCarrier.compNextSquare5);
compBoatPlaced(aircarftCarrier.compThirdSquare5);
compBoatPlaced(aircarftCarrier.compFourthSquare5);
compBoatPlaced(aircarftCarrier.compFifthSquare5);

console.log(compFilled);

}

function compCarrier() {
//Placing Computer Carrier
var num2 = Math.floor(Math.random()*99);
var comp2 = compEmpty[num2];


if (comp2.length == 3) {
   var compNum2 = "10";
} else {
  var compNum2 = comp2.charAt(0);
}

if (compNum2 == "10") {
  var compLetter2 = comp2.charAt(2);
} else {
  var compLetter2 = comp2.charAt(1);
}

var compDirec = compDirection();
var compNextSquare2;
var compThirdSquare2;

if (compDirec == "vertical") {
  if (compLetter2 == "J"){
    var compLetter2 = nextLetter(compLetter2);
    compNextSquare2 = compNum2+compLetter2;
    compThirdSquare2 = compNum2+"H";
  } else if (compLetter2 == "I") {
    var compLetter2 = nextLetter(compLetter2);
    compNextSquare2 = compNum2+compLetter2;
    compThirdSquare2 = compNum2+"H";
  } else {
    var compLetter2 = nextLetter(compLetter2);
    compNextSquare2 = compNum2+compLetter2;
    var compThirdLetter2 = nextLetter(compLetter2);
    compThirdSquare2 = compNum2+compThirdLetter2;
  }
} else if (compDirec == "horizontal") {
  compNum2 = parseInt(compNum2);
  if (compNum2 == 10) {
    compNextSquare2 = 9+compLetter2;
    compThirdSquare2 = 8+compLetter2;
} else if (compNum2 == 9) {
    compNextSquare2 = 10+compLetter2;
    compThirdSquare2 = 8+compLetter2;
} else {
    compNextSquare2 = (compNum2+1)+ compLetter2;
    compThirdSquare2 = (compNum2+2)+ compLetter2;
}
}

return {
  num2: num2,
  comp2: comp2,
  compNextSquare2: compNextSquare2,
  compThirdSquare2: compThirdSquare2
}

}


function compSubmarine(){
//Placing Computer Submarine
var num3 = Math.floor(Math.random()*96);
var comp3 = compEmpty[num3];


if (comp3.length == 3) {
   var compNum3 = "10";
} else {
  var compNum3 = comp3.charAt(0);
}

if (compNum3 == "10") {
  var compLetter3 = comp3.charAt(2);
} else {
  var compLetter3 = comp3.charAt(1);
}

var compDirec = compDirection();
var compNextSquare3;
var compThirdSquare3;

if (compDirec == "vertical") {
  if (compLetter3 == "J"){
    var compLetter3 = nextLetter(compLetter3);
    compNextSquare3 = compNum3+compLetter3;
    compThirdSquare3 = compNum3+"H";
  } else if (compLetter3 == "I") {
    var compLetter3 = nextLetter(compLetter3);
    compNextSquare3 = compNum3+compLetter3;
    compThirdSquare3 = compNum3+"H";
  } else {
    var compLetter3 = nextLetter(compLetter3);
    compNextSquare3 = compNum3+compLetter3;
    var compThirdLetter3 = nextLetter(compLetter3);
    compThirdSquare3 = compNum3+compThirdLetter3;
  }
} else if (compDirec == "horizontal") {
  compNum3 = parseInt(compNum3);
  if (compNum3 == 10) {
    compNextSquare3 = 9+compLetter3;
    compThirdSquare3 = 8+compLetter3;
} else if (compNum3 == 9) {
    compNextSquare3 = 10+compLetter3;
    compThirdSquare3 = 8+compLetter3;
} else {
    compNextSquare3 = (compNum3+1)+ compLetter3;
    compThirdSquare3 = (compNum3+2)+ compLetter3;
}
}

return {
  num3: num3,
  comp3: comp3,
  compNextSquare3: compNextSquare3,
  compThirdSquare3: compThirdSquare3
}

}

function compDestoyer(){
//Placing Computer Destroyer
var num4 = Math.floor(Math.random()*93);
var comp4 = compEmpty[num4];


if (comp4.length == 3) {
   var compNum4 = "10";
} else {
  var compNum4 = comp4.charAt(0);
}

if (compNum4 == "10") {
  var compLetter4 = comp4.charAt(2);
} else {
  var compLetter4 = comp4.charAt(1);
}

var compDirec = compDirection();
var compNextSquare4;
var compThirdSquare4;
var compFourthSquare4;

if (compDirec == "vertical") {
  if (compLetter4 == "J"){
    var compLetter4 = nextLetter(compLetter4);
    compNextSquare4 = compNum4+compLetter4;
    compThirdSquare4 = compNum4+"H";
    compFourthSquare4 = compNum4+"G";
  } else if (compLetter4 == "I") {
    var compLetter4 = nextLetter(compLetter4);
    compNextSquare4 = compNum4+compLetter4;
    compThirdSquare4 = compNum4+"H";
    compFourthSquare4 = compNum4+"G";
  } else if (compLetter4 == "H") {
    var compLetter4 = nextLetter(compLetter4);
    compNextSquare4 = compNum4+compLetter4;
    compThirdSquare4 = compNum4+"J";
    compFourthSquare4 = compNum4+"G";
  } else {
    var compLetter4 = nextLetter(compLetter4);
    compNextSquare4 = compNum4+compLetter4;
    var compThirdLetter4 = nextLetter(compLetter4);
    compThirdSquare4 = compNum4+compThirdLetter4;
    var compFourthLetter4 = nextLetter(compThirdLetter4);
    compFourthSquare4 = compNum4+compFourthLetter4;
  }
} else if (compDirec == "horizontal") {
  compNum4 = parseInt(compNum4);
  if (compNum4 == 10) {
    compNextSquare4 = 9+compLetter4;
    compThirdSquare4 = 8+compLetter4;
    compFourthSquare4 = 7+compLetter4;
} else if (compNum4 == 9) {
    compNextSquare4 = 10+compLetter4;
    compThirdSquare4 = 8+compLetter4;
    compFourthSquare4 = 7+compLetter4;
} else if (compNum4 == 8) {
    compNextSquare4 = 10+compLetter4;
    compThirdSquare4 = 9+compLetter4;
    compFourthSquare4 = 7+compLetter4;
} else {
    compNextSquare4 = (compNum4+1)+ compLetter4;
    compThirdSquare4 = (compNum4+2)+ compLetter4;
    compFourthSquare4 = (compNum4+3)+ compLetter4;
}
}

return {
  num4: num4,
  comp4: comp4,
  compNextSquare4: compNextSquare4,
  compThirdSquare4: compThirdSquare4,
  compFourthSquare4: compFourthSquare4
}
}

function compAircraftCarrier() {
//Placing Computer Aircarft Carrier
var num5 = Math.floor(Math.random()*89);
var comp5 = compEmpty[num5];


if (comp5.length == 3) {
   var compNum5 = "10";
} else {
  var compNum5 = comp5.charAt(0);
}

if (compNum5 == "10") {
  var compLetter5 = comp5.charAt(2);
} else {
  var compLetter5 = comp5.charAt(1);
}

var compDirec = compDirection();
var compNextSquare5;
var compThirdSquare5;
var compFourthSquare5;
var compFifthSquare5;

if (compDirec == "vertical") {
  if (compLetter5 == "J"){
    var compLetter5 = nextLetter(compLetter5);
    compNextSquare5 = compNum5+compLetter5;
    compThirdSquare5 = compNum5+"H";
    compFourthSquare5 = compNum5+"G";
    compFifthSquare5 = compNum5+"F";
  } else if (compLetter5 == "I") {
    var compLetter5 = nextLetter(compLetter5);
    compNextSquare5 = compNum5+compLetter5;
    compThirdSquare5 = compNum5+"H";
    compFourthSquare5 = compNum5+"G";
    compFifthSquare5 = compNum5+"F";
  } else if (compLetter5 == "H") {
    var compLetter5 = nextLetter(compLetter5);
    compNextSquare5 = compNum5+compLetter5;
    compThirdSquare5 = compNum5+"J";
    compFourthSquare5 = compNum5+"G";
    compFifthSquare5 = compNum5+"F";
  } else if (compLetter5 == "G") {
    var compLetter5 = nextLetter(compLetter5);
    compNextSquare5 = compNum5+compLetter5;
    compThirdSquare5 = compNum5+"J";
    compFourthSquare5 = compNum5+"I";
    compFifthSquare5 = compNum5+"F";
  } else {
    var compSecondLetter5 = nextLetter(compLetter5);
    compNextSquare5 = compNum5+compSecondLetter5;
    var compThirdLetter5 = nextLetter(compSecondLetter5);
    compThirdSquare5 = compNum5+compThirdLetter5;
    var compFourthLetter5 = nextLetter(compThirdLetter5);
    compFourthSquare5 = compNum5+compFourthLetter5;
    var compFifthLetter5 = nextLetter(compFourthLetter5);
    compFifthSquare5 = compNum5+compFifthLetter5;
  }
} else if (compDirec == "horizontal") {
  compNum5 = parseInt(compNum5);
  if (compNum5 == 10) {
    compNextSquare5 = 9+compLetter5;
    compThirdSquare5 = 8+compLetter5;
    compFourthSquare5 = 7+compLetter5;
    compFifthSquare5 = 6+compLetter5;
} else if (compNum5 == 9) {
    compNextSquare5 = 10+compLetter5;
    compThirdSquare5 = 8+compLetter5;
    compFourthSquare5 = 7+compLetter5;
    compFifthSquare5 = 6+compLetter5;
} else if (compNum5 == 8) {
    compNextSquare5 = 10+compLetter5;
    compThirdSquare5 = 9+compLetter5;
    compFourthSquare5 = 7+compLetter5;
    compFifthSquare5 = 6+compLetter5;
} else if (compNum5 == 7) {
    compNextSquare5 = 10+compLetter5;
    compThirdSquare5 = 9+compLetter5;
    compFourthSquare5 = 8+compLetter5;
    compFifthSquare5 = 6+compLetter5;
} else {
    compNextSquare5 = (compNum5+1)+ compLetter5;
    compThirdSquare5 = (compNum5+2)+ compLetter5;
    compFourthSquare5 = (compNum5+3)+ compLetter5;
    compFifthSquare5 = (compNum5+4)+ compLetter5;
}
}


return {
  num5: num5,
  comp5: comp5,
  compNextSquare5: compNextSquare5,
  compThirdSquare5: compThirdSquare5,
  compFourthSquare5: compFourthSquare5,
  compFifthSquare5: compFifthSquare5
}
}



// Function for computer direction
function compDirection() {
  var num = Math.random();
  var compDirec = "";
  if (num < 0.5) {
    compDirec = "vertical";
  } else {
    compDirec = "horizontal";
  }
  return compDirec;
}



// function to find next letter
function nextLetter(y){
  switch (y) {
    case "A":
     letter1 = "B";
     break;
    case "B":
      letter1 = "C";
      break;
    case "C":
        letter1 = "D";
        break;
    case "D":
          letter1 = "E";
          break;
    case "E":
          letter1 = "F";
          break;
    case "F":
          letter1 = "G";
         break;
    case "G":
          letter1 = "H";
          break;
    case "H":
          letter1 = "I";
          break;
    case "I":
          letter1 = "J";
          break;
    case "J":
          letter1 = "I";
          break;
}
return letter1;
}

// function to remove the choicen square from array
function boatPlaced(x){
  var index = userEmpty.indexOf(x);
 if (index > -1) {
   userEmpty.splice(index, 1);
 }
 userFiller.push(x);
}

function compBoatPlaced(x) {
  compFilled.push(x);
  var index = compEmpty.indexOf(x);
  if (index > -1) {
   compEmpty.splice(index, 1);
  }
}


// Code To Play The Game

var compNumberSquares = document.querySelectorAll(".comp").length;

document.getElementById("beginGame").onclick = function startGame(){
  //run fuction for compuer to place ship
  compShips();

  document.getElementById("beginGame").style.display= "none";
  instruction.innerHTML =  "Please click the square on the computer board you would like to attack";

  addEvent();


}


function addEvent(){
  for (var i=0; i<compNumberSquares; i++) {
  document.querySelectorAll(".comp")[i].addEventListener("click", function attack() {
   var square = this.id;
   squareClicked(square);
 }, {once:true}
)}
}

// function to check if all players ships have been hit
function playerShips() {
  if (userFiller.length == 0) {
    //game over
    alert("You Lost, please refresh page to start again");
  } else {
    return;
  }
}

// function to check if all computer ships have been hit
function compShip() {
  if (compFilled.length == 0) {
    //game over
    alert("You Won, please refresh page to start again");
  } else {
    return;
  }
}


function squareClicked(square) {
  switch (square) {
  case "A1":
    checkIfFilled("1A", "A1");
    break;
  case "A2":
    checkIfFilled("2A", "A2");
    break;
  case "A3":
    checkIfFilled("3A", "A3");
    break;
  case "A4":
    checkIfFilled("4A", "A4");
    break;
  case "A5":
    checkIfFilled("5A", "A5");
    break;
  case "A6":
    checkIfFilled("6A", "A6");
    break;
  case "A7":
    checkIfFilled("7A", "A7");
    break;
  case "A8":
    checkIfFilled("8A", "A8");
    break;
  case "A9":
    checkIfFilled("9A", "A9");
    break;
  case "A10":
    checkIfFilled("10A", "A10");
    break;
  case "B1":
    checkIfFilled("1B", "B1");
    break;
  case "B2":
    checkIfFilled("2B", "B2");
    break;
  case "B3":
    checkIfFilled("3B", "B3");
    break;
  case "B4":
    checkIfFilled("4B", "B4");
    break;
  case "B5":
    checkIfFilled("5B", "B5");
    break;
  case "B6":
    checkIfFilled("6B", "B6");
    break;
  case "B7":
    checkIfFilled("7B", "B7");
    break;
  case "B8":
    checkIfFilled("8B", "B8");
    break;
  case "B9":
    checkIfFilled("9B", "B9");
    break;
  case "B10":
    checkIfFilled("10B", "B10");
    break;
  case "C1":
    checkIfFilled("1C", "C1");
    break;
  case "C2":
    checkIfFilled("2C", "C2");
    break;
  case "C3":
    checkIfFilled("3C", "C3");
    break;
  case "C4":
    checkIfFilled("4C", "C4");
    break;
  case "C5":
    checkIfFilled("5C", "C5");
    break;
  case "C6":
    checkIfFilled("6C", "C6");
    break;
  case "C7":
    checkIfFilled("7C", "C7");
    break;
  case "C8":
    checkIfFilled("8C", "C8");
    break;
  case "C9":
    checkIfFilled("9C", "C9");
    break;
  case "C10":
    checkIfFilled("10C", "C10");
    break;
  case "D1":
    checkIfFilled("1D", "D1");
    break;
  case "D2":
    checkIfFilled("2D", "D2");
    break;
  case "D3":
    checkIfFilled("3D", "D3");
    break;
  case "D4":
    checkIfFilled("4D", "D4");
    break;
  case "D5":
    checkIfFilled("5D", "D5");
    break;
  case "D6":
    checkIfFilled("6D", "D6");
    break;
  case "D7":
    checkIfFilled("7D", "D7");
    break;
  case "D8":
    checkIfFilled("8D", "D8");
    break;
  case "D9":
    checkIfFilled("9D", "D9");
    break;
  case "D10":
    checkIfFilled("10D", "D10");
    break;
  case "E1":
    checkIfFilled("1E", "E1");
    break;
  case "E2":
    checkIfFilled("2E", "E2");
    break;
  case "E3":
    checkIfFilled("3E", "E3");
    break;
  case "E4":
    checkIfFilled("4E", "E4");
    break;
  case "E5":
    checkIfFilled("5E", "E5");
    break;
  case "E6":
    checkIfFilled("6E", "E6");
    break;
  case "E7":
    checkIfFilled("7E", "E7");
    break;
  case "E8":
    checkIfFilled("8E", "E8");
    break;
  case "E9":
    checkIfFilled("9E", "E9");
    break;
  case "E10":
      checkIfFilled("10E", "E10");
      break;
    case "F1":
      checkIfFilled("1F", "F1");
      break;
    case "F2":
      checkIfFilled("2F", "F2");
      break;
    case "F3":
      checkIfFilled("3F", "F3");
      break;
    case "F4":
      checkIfFilled("4F", "F4");
      break;
    case "F5":
      checkIfFilled("5F", "F5");
      break;
    case "F6":
      checkIfFilled("6F", "F6");
      break;
    case "F7":
      checkIfFilled("7F", "F7");
      break;
    case "F8":
      checkIfFilled("8F", "F8");
      break;
    case "F9":
      checkIfFilled("9F", "F9");
      break;
    case "F10":
      checkIfFilled("10F", "F10");
      break;
    case "G1":
      checkIfFilled("1G", "G1");
      break;
    case "G2":
      checkIfFilled("2G", "G2");
      break;
    case "G3":
      checkIfFilled("3G", "G3");
      break;
    case "G4":
      checkIfFilled("4G", "G4");
      break;
    case "G5":
      checkIfFilled("5G", "G5");
      break;
    case "G6":
      checkIfFilled("6G", "G6");
      break;
    case "G7":
      checkIfFilled("7G", "G7");
      break;
    case "G8":
      checkIfFilled("8G", "G8");
      break;
    case "G9":
      checkIfFilled("9G", "G9");
      break;
    case "G10":
      checkIfFilled("10G", "G10");
      break;
    case "H1":
      checkIfFilled("1H", "H1");
      break;
    case "H2":
      checkIfFilled("2H", "H2");
      break;
    case "H3":
      checkIfFilled("3H", "H3");
      break;
    case "H4":
      checkIfFilled("4H", "H4");
      break;
    case "H5":
      checkIfFilled("5H", "H5");
      break;
    case "H6":
      checkIfFilled("6H", "H6");
      break;
    case "H7":
      checkIfFilled("7H", "H7");
      break;
    case "H8":
      checkIfFilled("8H", "H8");
      break;
    case "H9":
      checkIfFilled("9H", "H9");
      break;
    case "H10":
      checkIfFilled("10H", "H10");
      break;
      case "I1":
      checkIfFilled("1I", "I1");
        break;
      case "I2":
        checkIfFilled("2I", "I2");
        break;
      case "I3":
        checkIfFilled("3I", "I3");
        break;
      case "I4":
        checkIfFilled("4I", "I4");
        break;
      case "I5":
        checkIfFilled("5I", "I5");
        break;
      case "I6":
        checkIfFilled("6I", "I6");
        break;
      case "I7":
        checkIfFilled("7I", "I7");
        break;
      case "I8":
        checkIfFilled("8I", "I8");
        break;
      case "I9":
        checkIfFilled("9I", "I9");
        break;
      case "I10":
        checkIfFilled("10I", "I10");
        break;
      case "J1":
        checkIfFilled("1J", "J1");
        break;
      case "J2":
        checkIfFilled("2J", "J2");
        break;
      case "J3":
        checkIfFilled("3J", "J3");
        break;
      case "J4":
        checkIfFilled("4J", "J4");
        break;
      case "J5":
        checkIfFilled("5J", "J5");
        break;
      case "J6":
        checkIfFilled("6J", "J6");
        break;
      case "J7":
        checkIfFilled("7J", "J7");
        break;
      case "J8":
        checkIfFilled("8J", "J8");
        break;
      case "J9":
        checkIfFilled("9J", "J9");
        break;
      case "J10":
        checkIfFilled("10J", "J10");
        break;

  default:
}}

//Function To See If Computer Square Has Ship In It
// x= square id with number first to check array
// y= squares actal id, number second
function checkIfFilled(x, y){
  var filled = compFilled.includes(x);
  if (filled == true) {
    let a = compFilled.indexOf(x);
    compFilled.splice(a, 1)
    //apply class .hit
    document.getElementById(y).classList.add("hit");
    compShip();
    compAttack();
  } else if (filled == false){
    //apply class .miss
    document.getElementById(y).classList.add("miss");
    compAttack();
  }

}

//Function for the compter to choice a square
function compAttack(){
  var size = allSquares.length;
  var attackNumber = Math.floor(Math.random()*(size));
  var attackSquare = allSquares[attackNumber];
  allSquares.splice(attackNumber, 1);
  var filled2 = userFiller.includes(attackSquare);
  var hitSqaure = document.getElementById(attackSquare)
  if (filled2 == true) {
    var attcked = userFiller.indexOf(attackSquare);
    userFiller.splice(attcked, 1);
    hitSqaure.removeChild(hitSqaure.firstChild)
    hitSqaure.innerHTML += '<img class="inGrid" src="images/blast.png" alt="Sqaure has been hit">';
  } else if (filled2 == false){
    //document.getElementById(attackSquare)
    hitSqaure.innerHTML += '<img class="inGrid" src="images/wave.png" alt="Sqaure has been hit">';
  }
  playerShips();
}
