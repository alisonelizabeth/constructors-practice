// buildings constructor
function Building (options) {
    options = options || {};

    this.squareFootPerStory = options.squareFootPerStory || 0;
    this.stories = options.stories || 0;
    this.people = options.people || 0;
    this.yearBuilt = options.yearBuilt || 0;

    this.calcAge = function () {
    	var currentYear = 2013;
    	return currentYear - this.yearBuilt;
    };

    this.renovationsNeeded = function () {
    	if (this.calcAge() > 25) {
    		console.log("This building is in need of renovations.")
    		return true
    	} else {
    		console.log("This building is in good shape.")
    		return false
    	}
    }

    this.calcCapacity = function () {
    	var capacity = Math.round((this.squareFootPerStory * this.stories) / 20)
    	return capacity
    }

    this.fireSafetyCheck = function () {
    	var occupants = this.people 
    	if (occupants < this.calcCapacity()) {
    		console.log ("This building passes the safety code.")
    		return true 
    	} else {
    		console.log ("This building is in violation of the safety code.")
    		return false 
    	}
    }

    this.expand = function () {
        var difference = this.people - this.calcCapacity();
        var spaceNeeded = difference * 20;
        var floorsNeeded = Math.round(spaceNeeded / this.squareFootPerStory)

        if (this.fireSafetyCheck() === false ) {
            return floorsNeeded }; 
    }  
} //end of buildings constructor 

// beginning of contractor constructor  
function Contractor (options) {
    options = options || {};

    this.name = options.name || "contractor"
    this.experienceLevel = options.experienceLevel || 1;
    this.expertise = options.expertise || [];
    this.employees = options.employees || [];

    this.hire = function (num) {
        var total = this.employees + num
        return total 
    };

    this.buildingsUnderConstruction = function () {
        //need 15 employees to work on a building 
        var employeesNeeded = 15 
        return Math.floor(this.employees / employeesNeeded)
    };

    this.findContractExpert = function () {
        if (this.expertise.indexOf('schools') > -1) {
            return true 
        }  else {
            return false 
        }  
    };
   
   this.findMostExperience = function (competitor) {
    if (this.experienceLevel > competitor.experienceLevel) {
        return this.name 
    } else {
        return competitor.name 
    } 
   };

   this.annualBuildingsComplete = function (){
    // average number of days to build a building
    var averageDays = 90
    var year = 365 
    var total = Math.floor((year/averageDays) * this.buildingsUnderConstruction()) 
    return total 
   }
} //end of contractor constructor 

//beginning of airplane constructor
function Airplane (options) {
    options = options || {};

    this.name = options.name || "airplane";
    this.maxCapacity = options.maxCapacity || 500;
    this.range = options.range || 5000;
    this.milesToDestination = options.milesToDestination || 500;
    this.fuelCapacity = options.fuelCapacity || 50000;
    this.employees = options.employees || 10;
    this.speedMph = options.speedMph || 600;  

    this.fuelEffiency = function() {
        var number = this.range / this.fuelCapacity
        return number;
    };

    this.pricePerPassenger = function(){
        var kerosenePrice = 4;
        var answer = (((this.milesToDestination / this.fuelEffiency()) * kerosenePrice) / this.maxCapacity );      
        return Math.round(answer);
    };

    this.airplaneCosts = function (){
        var kerosenePrice = 4;
        var averageEmployeeWage = 2000; 
        var employeeCosts = averageEmployeeWage * this.employees;
        var gasCosts = ((this.milesToDestination / this.fuelEffiency()) * kerosenePrice);
        var total = employeeCosts + gasCosts
        return Math.round(total);
    };

    this.airplaneCostComparer = function (competitor) {
        if (this.airplaneCosts() > competitor.airplaneCosts()) {
            return this.name 
        } else {
            return competitor.name;
        }
    };

    this.flightTime = function () {
        return Math.round(this.milesToDestination / this.speedMph);
    }

} //end of airplane constructor 

 



