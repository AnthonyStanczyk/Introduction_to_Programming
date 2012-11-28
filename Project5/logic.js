      //Starting location.
      var currentLocation = 0; 
      
      //Starting score.
      var score = 0; 

      function change(location) {
        switch(location) {
          case "0": _beach();     document.getElementById("location").innerHTML = currentLocation; break;
          case "1": _natives();   document.getElementById("location").innerHTML = currentLocation; break;
          case "2": _volcano();   document.getElementById("location").innerHTML = currentLocation; break;
          case "3": _pool();      document.getElementById("location").innerHTML = currentLocation; break;
          case "4": _jungle();    document.getElementById("location").innerHTML = currentLocation; break;
          case "5": _cave();      document.getElementById("location").innerHTML = currentLocation; break;
          case "6": _ruins();     document.getElementById("location").innerHTML = currentLocation; break;
          case "7": _quicksand(); document.getElementById("location").innerHTML = currentLocation; break;
          case "8": _rocks();     document.getElementById("location").innerHTML = currentLocation; break;
          case "9": _spikes();    document.getElementById("location").innerHTML = currentLocation; break;
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
        var message = "Your plane has just crashed somewhere over the Pacific Ocean, but you survived with minor injuries. You are at the site of the crash, and there are bits of the wreckage everywhere. Make your move.";
        updateText(message);
        locales[0] = new locale (0, "Beach", "You are on the beach, at the site of the plane crash.", "Lighter");
        locales[1] = new locale (1, "Natives", "You aren't alone, since you just found a hunting party of the island's natives. They have spears, they're hungry, and they look angry.", "None");
        locales[2] = new locale (2, "Volcano", "You are at the mouth of an active volcano. It's extremely hot.", "None");
        locales[3] = new locale (3, "Pool", "You found a clear pool with a waterfall flowing into it. It's teeming with fish. They are quite speedy.", "Fish");
        locales[4] = new locale (4, "Jungle", "You are in the island's dense jungle.", "Rope");
        locales[5] = new locale (5, "Cave", "You found a dark, spooky cave.", "Spear");
        locales[6] = new locale (6, "Ruins", "You found the ruins where the natives live, and it's protected by guards. This is also the island's highest point. A rope may be useful here.", "None");
        locales[7] = new locale (7, "Quicksand", "You have stumbled onto a large pit of quicksand. Act fast if you want to live!", "None");
        locales[8] = new locale (8, "Rocks", "You are at the base of some sharp, jagged rocks. There doesn't seem to be anything here.", "None");
        locales[9] = new locale (9, "Spikes", "You fell into one of the native's spike traps and died. Please refresh the browser to continue.", "None");
        items[0] = new makeItem (0, "Lighter", "You see a lighter amongst the wreckage.", false);
        items[1] = new makeItem (1, "Fish", "You found a tasty fish.", false);
        items[2] = new makeItem (2, "Rope", "You see a rope made of vines hanging from a tree.", false);
        items[3] = new makeItem (3, "Spear", "You found a spear left behind by one of the natives.", false);
      }
      
      function takeItem(){
        if (currentLocation === 4) {
          items[2].truth = true;
          updateText("Taken.");
        } else if (currentLocation === 0) {
          items[0].truth = true;
          updateText("Taken.");
        } else if (currentLocation === 3) {
          items[1].truth = true;
          updateText("Taken.");
        } else if (currentLocation === 5) {
          items[3].truth = true;
          updateText("Taken.");
        } else {
          updateText("There is nothing here.");
        }
      }
          
      function displayInventory(){
         if (items[0].truth === true) {
          updateText(items[0].name);
         } else if (items[1].truth === true) {
          updateText(items[1].name);
         } else if (items[2].truth === true) {
          updateText(items[2].name);
         } else if (items[3].truth === true) {   
          updateText(items[3].name);
         } else {
           updateText("You don't have anything.");
         }
      }

      function txtCommand_keypress(e){
        if (e.which === 13) {
          document.getElementById("btnGo").onclick();
        }
      }

      function btn_go_click() {
        var userInput = document.getElementById("txtCommand");
        var help = "It's dangerous to go alone! Take the rope! Valid Commands: N, S, E, W, n, s, e, w, North, north, South, south, East, east, West, west, help, take, map, inventory.***";
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