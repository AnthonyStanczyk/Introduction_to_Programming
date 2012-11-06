      //Starting location.
      var currentLocation = 0; 
      
      //Starting score.
      var score = 0; 
      
      //Item handling.
      var playerHasLighter = false;
      var playerHasMap = false;
      var playerHasRope = false;
      var playerHasSpear = false;

      function change(location) {
        switch(location) {
          case "0": beach(); document.getElementById("location").innerHTML = currentLocation; break;
          case "1": natives(); document.getElementById("location").innerHTML = currentLocation; break;
          case "2": volcano(); document.getElementById("location").innerHTML = currentLocation; break;
          case "3": pool(); document.getElementById("location").innerHTML = currentLocation; break;
          case "4": jungle(); document.getElementById("location").innerHTML = currentLocation; break;
          case "5": cave(); document.getElementById("location").innerHTML = currentLocation; break;
          case "6": ruins(); document.getElementById("location").innerHTML = currentLocation; break;
          case "7": quicksand(); document.getElementById("location").innerHTML = currentLocation; break;
          case "8": rocks(); document.getElementById("location").innerHTML = currentLocation; break;
          case "9": spikes(); document.getElementById("location").innerHTML = currentLocation; break;
        }
      }
    
      function goNorth() {
        if (currentLocation === 0) {
            currentLocation = 1;
            change("1");
            btnNorth.disabled = true;
            btnSouth.disabled = false;
            btnEast.disabled = true;
            btnWest.disabled = false;
         } else if (currentLocation === 5) {
            currentLocation = 3;
            change("3");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = true;
            btnWest.disabled = false;
         } else if (currentLocation === 3) {
            currentLocation = 0;
            change("0");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = false;
         } else if (currentLocation === 4) {
            currentLocation = 6;
            change("6");
            btnNorth.disabled = true;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = true;
         } else if (currentLocation === 7) {
            currentLocation = 4;
            change("4");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = true;
         }  
      }
       
      function goSouth() {
        if (currentLocation === 1) {
            currentLocation = 0;
            change("0");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = false;
         } else if (currentLocation === 0) {
            currentLocation = 3;
            change("3");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = true;
            btnWest.disabled = false;
         } else if (currentLocation === 3) {
            currentLocation = 5;
            change("5");
            btnNorth.disabled = false;
            btnSouth.disabled = true;
            btnEast.disabled = true;
            btnWest.disabled = true;
         } else if (currentLocation === 6) {
            currentLocation = 4;
            change("4");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = true;
         } else if (currentLocation === 4) {
            currentLocation = 7;
            change("7");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = true;
         } else if (currentLocation === 7) {
            currentLocation = 9;
            change("9");
            btnNorth.disabled = true;
            btnSouth.disabled = true;
            btnEast.disabled = true;
            btnWest.disabled = true;
         }
      }
      
      function goEast() {
        if (currentLocation === 0) {
            currentLocation = 2;
            change("2");
            btnNorth.disabled = true;
            btnSouth.disabled = true;
            btnEast.disabled = false;
            btnWest.disabled = false;
         } else if (currentLocation === 4) {
            currentLocation = 0;
            change("0");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = false;
         } else if (currentLocation === 6) {
            currentLocation = 1;
            change("1");
            btnNorth.disabled = true;
            btnSouth.disabled = false;
            btnEast.disabled = true;
            btnWest.disabled = false;
         } else if (currentLocation === 2) {
            currentLocation = 8;
            change("8");
            btnNorth.disabled = true;
            btnSouth.disabled = true;
            btnEast.disabled = true;
            btnWest.disabled = false;
         } else if (currentLocation === 7) {
            currentLocation = 3;
            change("3");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = true;
            btnWest.disabled = false;
         }
      }
      
      function goWest() {
        if (currentLocation === 0) {
            currentLocation = 4;
            change("4");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = true;
         } else if (currentLocation === 2) {
            currentLocation = 0;
            change("0");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = false;
         } else if (currentLocation === 1) {
            currentLocation = 6;
            change("6");
            btnNorth.disabled = true;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = true;  
         } else if (currentLocation === 8) {
            currentLocation = 2;
            change("2");
            btnNorth.disabled = true;
            btnSouth.disabled = true;
            btnEast.disabled = false;
            btnWest.disabled = false; 
         } else if (currentLocation === 3) {
            currentLocation = 7;
            change("7");
            btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = true;   
         } 
      }
           
      function score_btn_onclick() {
        var scoreDisplay = score;
        updateText(scoreDisplay);
      }
      
      function updateDisplay(message) {
        message = message +" [" + currentLocation + "]";
        var ta = document.getElementById("taGame");
        ta.value = message + "\n" + ta.value;
      }
      
      function updateText(message) {
        var ta = document.getElementById("taGame");
        ta.value = message + "\n" + ta.value;
      }
      
      function init() {
        var message = "Your plane has just crashed somewhere over the Pacific Ocean, but you survived with minor injuries. You are at the site of the crash, and there are bits of the wreckage everywhere. Are you alone?";
        updateText(message);
      }
      
      function takeItem() {
        if (currentLocation === 4) {
          playerHasRope = true;
          updateText("Taken.");
        } else {
          updateText("There is nothing here.");
        }
      }
          
      function displayInventory () {
        var message = "Inventory: ";
        if (playerHasRope) {
          message = message + "Rope ";
          updateText(message);
        } 
      }

      function btn_go_click() {
        var userInput = document.getElementById("txtCommand");
        var help = "It's dangerous to go alone! Take the spear! Valid Commands: N, S, E, W, n, s, e, w, North, north, South, south, East, east, West, west, help, take, map, inventory.***";
        var invalidCommand = "***Invalid Command!***"; 
         
        switch(userInput.value) {  
          case "n":
          case "N":
          case "north":
          case "North":
            goNorth();
            break;
          
          case "s":
          case "S":
          case "south":
          case "South":
            goSouth();
            break;
            
          case "e":
          case "E":
          case "east":
          case "East":
            goEast();
            break;
            
          case "w":
          case "W":
          case "west":
          case "West":
            goWest();
            break;
            
          case "help": updateText(help); break;
          
          case "take": takeItem(); break;
            
          case "inventory": displayInventory(); break;
          
          default: updateText(invalidCommand); break;
         }
      }