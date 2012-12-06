      //Starting location.
      var currentLocation = 0; 
	  
      //Starting score.
      var score = 0; 
	  
	  //Inventory.
	  var descInventory = " ";
	  var trackInventory = 0;
	  
	  
	  //Directions.
	  var NORTH  = 0;
	  var SOUTH  = 1;
	  var EAST   = 2;
	  var WEST   = 3;

	  function move(direction) {
	    newLocation = nav[currentLocation][direction];
		if (newLocation >= 0) {
			currentLocation = newLocation;
			updateDisplay(locales[currentLocation].desc);
			whichDirection();
		} else {
			updateText("You can't go that way.");
		}
	  }
	  
	  function whichDirection() {
		if (currentLocation === 0) {
			_beach();
		} else if (currentLocation === 1) {
			_natives();
		} else if (currentLocation === 2) {
			_volcano();
		} else if (currentLocation === 3) {
			_pool();	
		} else if (currentLocation === 4) {
			_jungle();	
		} else if (currentLocation === 5) {
			_cave();	
		} else if (currentLocation === 6) {
			_ruins();	
		} else if (currentLocation === 7) {
			_quicksand();	
		} else if (currentLocation === 8) {
			_rocks();	
		} else if (currentLocation === 9) {
			_spikes();	
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
		  trackInventory = trackInventory + 1;
		  descInventory = descInventory + " " + "Rope, ";
        } else if (currentLocation === 0) {
          items[0].truth = true;
          updateText("Taken.");
		  trackInventory = trackInventory + 1;
		  descInventory = descInventory + " " + "Lighter, ";
        } else if (currentLocation === 3) {
          items[1].truth = true;
          updateText("Taken.");
		  trackInventory = trackInventory + 1;
		  descInventory = descInventory + " " + "Fish, ";
        } else if (currentLocation === 5) {
          items[3].truth = true;
          updateText("Taken.");
		  trackInventory = trackInventory + 1;
		  descInventory = descInventory + " " + "Spear, ";
        } else {
          updateText("There is nothing here.");
        }
      }
          
      function displayInventory(){
         if (trackInventory === 0) {
			updateText("You don't have anything.");
		} else {
			updateText("Inventory:" + descInventory);
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
            move(NORTH);
            break;
          
          case "s":
          case "S":
          case "south":
          case "South":
            move(SOUTH);
            break;
            
          case "e":
          case "E":
          case "east":
          case "East":
            move(EAST);
            break;
            
          case "w":
          case "W":
          case "west":
          case "West":
           move(WEST);
            break;
            
          case "help": updateText(help); break;
          
          case "take": takeItem(); break;
            
          case "inventory": displayInventory(); break;
          
          default: updateText(invalidCommand); break;
         }
      }