
function CheckIfEqual (a, b) {
  if(a === b ) {
return `${a} and ${b} are equal`;
  }
return `${a} and ${b} are not equal`;
}

function convertToCelsius(f) {
  if((typeof f) === "number") {
    return (f - 32 ) / 1.8;
  }
  {
    return false;
  }
}

function mathOperation(a, b, operator) {

 if(typeof(a) === "number" && typeof(b) === "number") {

 if(operator === "+" ) {
    return a + b;
  }

 else if(operator === "-" ) {
    return a - b;
  }

 else if(operator === "*" ) {
    return a * b;
  }

 else if(operator === "/" ) {
    return a / b;
  }
else if(operator != "-" || operator != "+" || operator != "*" || operator != "/"  ) {
  return false;
}
}
 else {
 return false;
 }
} ;