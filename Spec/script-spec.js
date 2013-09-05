describe("The Building constructor", function() {

  beforeEach(function(){
    building1 = new Building({
      squareFootPerStory: 1500, 
      stories: 17,
      people: 1500, 
      yearBuilt: 1983});

    building2 = new Building();
  });

  describe('returns an object that has', function(){
    it ('an initial squareFootPerStory value of 0', function(){
      expect(building2.squareFootPerStory).toBe(0);
    });

    it ('an initial stories value of 0', function(){
      expect(building2.stories).toBe(0);
    });

    it ('an initial people value of 0', function(){
      expect(building2.people).toBe(0);
    });

    it ('an initial yearBuilt value of 0', function(){
      expect(building2.yearBuilt).toBe(0);
    });

    it ('overridden defaults when given an options object', function(){
      expect(building1.squareFootPerStory).toBe(1500);
      expect(building1.stories).toBe(17);
      expect(building1.people).toBe(1500);
      expect(building1.yearBuilt).toBe(1983)
    });

  }) //end of 'returns an object that has...'

  describe ("returns an object that can", function() {
    it ("calculate a building's age", function (){
      var currentYear = 2013
      expect(currentYear - building1.yearBuilt).toEqual(30);
    });

    it ("determine if a building needs renovations", function (){
      expect(building1.renovationsNeeded()).toBe(true);
    });

    it ("return the building's capacity", function (){
      expect(building1.calcCapacity()).toEqual(1275);
    });

    it ("check to see if a building passes safety code", function () {
      expect(building1.fireSafetyCheck()).toBe(false);
    });

    it ("add more stories if the building is over capacity", function (){
      expect(building1.expand()).toEqual(3)
    });

  }) //end of 'returns an object that can...'

}) //end of building constructor

describe("The Contractor constructor", function() {
    beforeEach(function(){
      contractor1 = new Contractor({
      name: "General Building Contractor",
      experienceLevel: 8, 
      expertise: ["schools", "churches", "offices"],
      employees: 25 });

      contractor2 = new Contractor({
      name: "ABC Builders",
      experienceLevel: 5, 
      expertise: ["houses", "offices"],
      employees: 150 });

      contractor3 = new Contractor();
  });
  describe('returns an object that has', function(){
    it ('an initial experience level of 1', function (){
      expect(contractor3.experienceLevel).toEqual(1);
    });

  }); //end of 'returns an object that has...'

  describe('returns an object that can', function(){

    it ("hire more employees", function (){
      expect(contractor1.hire(10)).toEqual(35);
    });

    it ("calculate how many buildings the contractor can work on", function() {
      expect(contractor2.buildingsUnderConstruction()).toEqual(10);
    }); 

    it ("find the right contractor based on expertise", function() {
      expect(contractor1.findContractExpert()).toBe(true);
    });

    it ("determine the contractor with the most experience", function(){
      expect(contractor1.findMostExperience(contractor2)).toBe("General Building Contractor")
    });

    it ("calculate the number of buildings completed in a year", function(){
      var averageDays = 90
      var year = 365 
      expect(contractor2.annualBuildingsComplete()).toEqual(40);
    });
  }); //end of 'returns an object that can...'
}); //end of contractor constructor

//plane constructor tests 

describe("The Airplane constructor", function() {
    beforeEach(function(){
      airplane1 = new Airplane({
      name: "Boeing 747",
      maxCapacity: 600, 
      range: 9200,
      milesToDestination: 2500,
      fuelCapacity: 64000,
      employees: 15,
      speedMph: 700 });

      airplane2 = new Airplane({
      name: "Airbus A380",
      maxCapacity: 850, 
      range: 9800,
      milesToDestination: 2500,
      fuelCapacity: 85000,
      employees: 20,
      speedMph: 600 });

      airplane3 = new Airplane();
  });

  describe('returns an object that can', function(){

    it ("calculate miles per gallon", function (){
      expect(airplane1.fuelEffiency()).toEqual(0.14375);
    });

    it ("calculate price per passenger for given destination", function(){
      expect(airplane1.pricePerPassenger()).toEqual(116);
    });

    it ("finds operational costs", function(){
      expect(airplane1.airplaneCosts()).toEqual(99565)
    });

    it ("compare operational costs to other objects", function (){
      expect(airplane1.airplaneCostComparer(airplane2)).toBe("Airbus A380")
    });

    it("calculate how many hours it will take to fly to given destination", function (){
      expect(airplane1.flightTime()).toEqual(4)
    });

  }); //end of 'returns an object that can...'
}); //end of plane constructor

