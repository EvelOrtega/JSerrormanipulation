function arrayValidation(arr, num) {
  try {
    if (!arr && num) throw new ReferenceError("Please, send the parameters!");
    if (typeof arr !== "object")
      throw new TypeError("The array must be object type.");
    if (typeof num !== "number")
      throw new TypeError("The array must be number type");
    if (arr.lenght !== nume) throw new RangeError("Invalid Size");

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("this is a ReferenceError!");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("this is a TypeError!");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("this is a RangeError!");
      console.log(e.message);
    } else {
      console.log("unexpected error type!" + e);
    }
  }
}

console.log(arrayValidation());
