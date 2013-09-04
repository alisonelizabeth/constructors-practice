  beforeEach(function(){
    oneLibertySquare = new Building(1500, 17, 1300, 1983)
  	projectOne = new Building (1400, 11, 700, 2012)
	landmark = new Building (1250, 22, 1200, 1966)

  });

describe("building constructor", function() {

  it("should create a new object that has defined characteristics", function() {
    expect(oneLibertySquare.squareFootPerStory).toEqual(1500);
    expect(oneLibertySquare.stories).toEqual(17);
    expect(oneLibertySquare.people).toEqual(1300);
    expect(oneLibertySquare.yearBuilt).toEqual(1983);

  });
  
  it ("should have a function that calculates a building's age", function (){
  	var currentYear = 2013
  	expect(currentYear - oneLibertySquare.yearBuilt).toEqual(30);
  });

  it ("should have a function that determines if a building is a skyscraper", function (){
  	expect(oneLibertySquare.skyscraper()).toBe(true);
  });

  it ("should have a function that determines if a building needs renovations", function (){
  	expect(oneLibertySquare.renovationsNeeded()).toBe(true);
  });

  it ("should have a function that returns the building's capacity", function (){
  	expect(oneLibertySquare.capacity()).toEqual(1275);
  })

  it ("should have a function that checks to see if a building passes safety code", function () {
  	expect(oneLibertySquare.fireSafetyCheck()).toBe(false);
  })


  // it ("should find the largest building", function () {
  // 	expect(largestBuilding()).toContain(landmark)
  // })








  // it ("should test the oldest building", function (){
  // 	expect(oldestBuilding()).toEqual(oneLibertySquare.age);
  // });
}) //end of buildings constructor describer




// describe ("buildings constructor", function (){
// 	it ("should return a new Building object", function () {
// 		expect(new Building).toContain();
// 	})
// })



// // function Muppet(age, hobby) {
// //   this.age = age;
// //   this.hobby = hobby;

// //   this.answerNanny = function(){
// // 	return "Everything's cool!";
// //   }
// // }

// // function SwedishChef(age, hobby, mood) {
// //   Muppet.call(this, age, hobby);
// //   this.mood = mood;

// //   this.cook = function() {
// //     return "Mmmm soup!";
// //   }
// // }

// // SwedishChef.prototype = new Muppet();

// describe("About inheritance", function() {
//   beforeEach(function(){
//     this.muppet = new Muppet(2, "coding");
// 	this.swedishChef = new SwedishChef(2, "cooking", "chillin");
//   });

//   it("should be able to call a method on the derived object", function() {
//     expect(this.swedishChef.cook()).toEqual('Mmmm soup!');
//   });

//   it("should be able to call a method on the base object", function() {
//     expect(this.swedishChef.answerNanny()).toEqual("Everything's cool!");
//   });

//   it("should set constructor parameters on the base object", function() {
//     expect(this.swedishChef.age).toEqual(2);
//     expect(this.swedishChef.hobby).toEqual('cooking');
//   });

//   it("should set constructor parameters on the derived object", function() {
//     expect(this.swedishChef.mood).toEqual('chillin');
//   });
// });