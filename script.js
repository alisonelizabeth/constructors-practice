// buildings constructor
function Building (squareFootPerStory, stories, people, yearBuilt) {
    this.squareFootPerStory = squareFootPerStory;
    this.stories = stories;
    this.people = people;
    this.yearBuilt = yearBuilt; 
    this.calcAge = function () {
    	var currentYear = 2013
    	return currentYear - this.yearBuilt;
    }
    this.skyscraper = function () {
    	if (this.stories > 10 ) {
    		console.log("This building is a skyscraper.")
    		return true 
    	} else {
    		console.log("This building is not a skyscraper.")
    		return false 
    	}
    }
    this.renovationsNeeded = function () {
    	if (this.calcAge() > 25) {
    		console.log("This building is in need of renovations.")
    		return true
    	} else {
    		console.log("This building is in good shape.")
    		return false
    	}
    }

    this.capacity = function () {
    	var people = (this.squareFootPerStory * this.stories) / 20
    	return people
    }

    this.fireSafetyCheck = function () {
    	var occupants = this.people 
    	if (occupants < this.capacity()) {
    		console.log ("This building passes the safety code.")
    		return true 
    	} else {
    		console.log ("This building is in violation of the safety code.")
    		return false 
    	}
    }

  
// var oneLibertySquare = new Building(248563, 17, "55 Beattie Place", 1983)
// var projectOne = new Building (200000, 11, "130 S. Main St.", 2012)
// var landmark = new Building (130000, 22, "301 N. Main St.", 1966)

} 


  



 



