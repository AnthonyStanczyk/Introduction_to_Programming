      //Item prototype.
      function makeItem(_id, _name, _desc, _truth) {
        this.id       = _id;
        this.name     = _name;
        this.desc     = _desc;
        this.truth    = _truth;
        this.toString = function() {
          var retVal = "";
          retVal = "[makeItem]" + "\n" +
                   "id:"    + this.id   +"\n" +
                   "name:"  + this.name +"\n" +
                   "desc:"  + this.desc +"\n" +
                   "truth:" + this.truth +"\n";
          return retVal;
        }
      }
      
      //Item prototype global array.
      var items = new Array();
        
      //Location prototype.
      function locale(_id, _name, _desc, _item) {
        this.id       = _id;
        this.name     = _name;
        this.desc     = _desc;
        this.item     = _item;
        this.toString = function() {
          var retVal = "";
          retVal = "[locale]" + "\n" +
                   "id:"   + this.id   +"\n" +
                   "name:" + this.name +"\n" +
                   "desc:" + this.desc +"\n" +
                   "item:" + this.item +"\n";
          return retVal;
        }
      }  
       
      //Location prototype global array.
      var locales =  new Array();
      
	  //Two-dimensional navagation array.
						
	  var nav = new Array ( [1,   3,  2,    4],
			                [-1,  0,  -1,   6], 
				            [-1, -1,   8,   0],
			                [0,   5,  -1,   7],
				            [6,   7,   0,  -1],
				            [3,  -1,  -1,  -1],
			                [-1,  4,   1,  -1],
			                [4,   9,   3,  -1],
				            [-1, -1,  -1,   2],
				            [7,  -1,  -1,  -1] 
						  );
	  
      function _beach() {
          score = score + 10;
          document.getElementById("score").innerHTML = score;
		  btnNorth.disabled = false;
          btnSouth.disabled = false;
          btnEast.disabled = false;
          btnWest.disabled = false;
        if (!items[0].truth) {
          updateText(items[0].desc);
        }
      }
            
      function _natives() {
           score = score + 10;
           document.getElementById("score").innerHTML = score;
		   btnNorth.disabled = true;
           btnSouth.disabled = false;
           btnEast.disabled = true;
           btnWest.disabled = false;
      }
            
      function _volcano() {
            score = score + 10;
            document.getElementById("score").innerHTML = score;
			btnNorth.disabled = true;
            btnSouth.disabled = true;
            btnEast.disabled = false;
            btnWest.disabled = false;
      }
            
      function _pool() {
            score = score + 10;
            document.getElementById("score").innerHTML = score;
			btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = true;
            btnWest.disabled = false;
          if (!items[1].truth) {
            updateText(items[1].desc);
          }
      }
          
      function _jungle() {
            score = score + 10;
            document.getElementById("score").innerHTML = score;
			btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = true;
          if (!items[2].truth) {
            updateText(items[2].desc);
          }
      }
       
      function _cave() {
            score = score + 10;
            document.getElementById("score").innerHTML = score;
			btnNorth.disabled = false;
            btnSouth.disabled = true;
            btnEast.disabled = true;
            btnWest.disabled = true;
          if (!items[3].truth) {
            updateText(items[3].desc);
          }
      }
            
      function _ruins() {
            score = score + 10;
            document.getElementById("score").innerHTML = score;
			btnNorth.disabled = true;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = true;
          if (items[2].truth) {
            updateText("You use the rope to climb to the top of the ruins. A passing helicopter spots you and carries you to safety.");
          }
      }
          
      function _quicksand() {
            score = score + 10;
            document.getElementById("score").innerHTML = score;
			btnNorth.disabled = false;
            btnSouth.disabled = false;
            btnEast.disabled = false;
            btnWest.disabled = true;
      }
          
      function _rocks() {
            score = score + 10;
            document.getElementById("score").innerHTML = score;
			btnNorth.disabled = true;
            btnSouth.disabled = true;
            btnEast.disabled = true;
            btnWest.disabled = false;
      }
      
      function _spikes() {
            score = score + 10;
            document.getElementById("score").innerHTML = score;
			btnNorth.disabled = true;
            btnSouth.disabled = true;
            btnEast.disabled = true;
            btnWest.disabled = true;
      } 