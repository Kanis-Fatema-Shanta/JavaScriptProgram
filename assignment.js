// converting feet to mile
function feetToMile (feet) {
    if (feet <= 0) {
        return "Please Enter the positive Value."
    }
    else {
        var mile = (feet / 5280); // 1 mile = 5280 feet 
        return mile.toFixed(6);
    }

}

var result= feetToMile(1);

console.log(result);


// woodCalculator
function woodCalculator (chair, table, bed) {
    if(chair >= 0 && table >=0 && bed >= 0)
    {
        var chairWood = (chair * 1);
        var tableWood = (table * 3);
        var bedWood = (bed * 5);

        var total = (chairWood + tableWood + bedWood);
        return total;

    }
    else
    {
        return "Please enter  a positive value ."
    }
}
    var woodOutput = woodCalculator(1,1,1);
    console.log(woodOutput);


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
  

// tinyFriend
function tinyFriend (nameArray) {
    var smallName = nameArray[0];
    for (var i = 0; i < nameArray.length; i++) {
        var element = nameArray[i];
        if (element.length < smallName.length) {
            smallName = element;
        }
    }
    return smallName;  
}

var friend = tinyFriend([ 'Shanta','Tonu','Peu','Monisha','Dristy']);

console.log(friend);