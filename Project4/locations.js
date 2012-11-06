      function beach() {
          var message = "You are on the beach, at the site of the plane crash."+ "\n";
            updateDisplay(message);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
            
      function natives() {
          var message = "You aren't alone, since you just found a hunting party of the island's natives. They have spears, they're hungry, and they look angry."+ "\n";
            updateDisplay(message);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
          }
            
      function volcano() {
          var message = "You are at the mouth of an active volcano. It's extremely hot."+ "\n";
            updateDisplay(message);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
            
      function pool() {
          var message = "You found a clear pool with a waterfall flowing into it. It's teeming with fish. They are quite speedy." + "\n";
            updateDisplay(message);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
          
      function jungle() {
          var message = "You are in the island's dense jungle."+ "\n";
            updateDisplay(message);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
          if (!playerHasRope) {
            updateText("You see a rope made of vines hanging from a tree.")+ "\n";
          }
      }
       
      function cave() {
          var message = "You found a dark, spooky cave."+ "\n";
            updateDisplay(message);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
            
      function ruins() {
          var message = "You found the ruins where the natives live, and it's protected by guards. This is also the island's highest point."+ "\n";
            updateDisplay(message);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
          if (playerHasRope) {
            alert("You use the rope to climb to the top of the ruins. A passing helicopter spots you and carries you to safety.");
          }
      }
          
      function quicksand() {
          var message = "You have stumbled onto a large pit of quicksand. Act fast if you want to live!"+ "\n";
            updateDisplay(message);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
          
      function rocks() {
          var message = "You are at the base of some sharp, jagged rocks. There doesn't seem to be anything here."+ "\n";
            updateDisplay(message);
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      }
      
      function spikes() {
            alert("You fell into one of the native's spike traps and died. Please refresh the browser to continue.")+ "\n";
            score = score + 10;
            document.getElementById("score").innerHTML = score;
      } 