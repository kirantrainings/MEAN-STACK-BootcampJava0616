var SizeEnum = {
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3,
  properties: {
    1: {name: "small", value: 1, code: "S"},
    2: {name: "medium", value: 2, code: "M"},
    3: {name: "large", value: 3, code: "L"}
  }
};

var mySize = SizeEnum.MEDIUM;
console.log(mySize);
var myCode = SizeEnum.properties[mySize].code; // myCode == "M"
console.log(myCode);