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
    var woodOutput = woodCalculator(-1,2,0);
    console.log(woodOutput);