{
    //Type Assertion / Type Narrowing 
    var anything = void 0;
    anything = "next level web development";
    anything = 222;
    anything;
    var kgToGm_1 = function (value) {
        if (typeof value === "string") {
            var convertedValue = parseFloat(value);
            return "The converted value ".concat(convertedValue);
        }
        if (typeof value === "number") {
            return value * 1000;
        }
        var result1 = kgToGm_1(101);
        console.log(result1);
        var result2 = kgToGm_1("1000");
        console.log(result2);
    };
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
