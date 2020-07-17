// brickCalculator
function brickCalculator (building) {
  var feetBricks = 1000;
  if (building >= 0 && building <= 10) {
      var totalFeet = (building * 15);
      var totalBricks = (totalFeet * feetBricks); 
      return totalBricks;
  }
  else if (building >= 0 && building <= 20) {
      var downTenBuildingBricks = 150000; 
      totalFeet = (building - 10) * 12;
      totalBricks = ((totalFeet * feetBricks) + downTenBuildingBricks);
      return totalBricks;
  }    
  else if (building >= 0 && building >= 21) {
      downTenBuildingBricks = 150000;
      var downTenToTwenty = 120000;
      totalFeet = (building - 20) * 10;
      var extraTotalBricks = (downTenBuildingBricks + downTenToTwenty);
      totalBricks = ((totalFeet * feetBricks) + extraTotalBricks);
      return totalBricks;
  }
  else {
      return "Please enter the positive value."
  }
}

var bricksNumbers = brickCalculator(23);
console.log(bricksNumbers);