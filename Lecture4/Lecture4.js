
const rep = function(string, valueToReplace, valueToReplaceWith) {
return  string.split("").map(o => {
    if(o === valueToReplace) {
   return valueToReplaceWith;
    } {
      return o;
    }}).join("");
};

//Test
console.log(rep('nina',"n","g"));

//2
const upperCase = function(string) {
return string.trim().split(" ").map(el=> {
el = el[0].toUpperCase() + el.slice(1)
return el;
}).join(" ");
};

//Test
console.log(upperCase("hello world"));


//3
const sorterByAge = function(users) {
return users.sort((a, b) => a.age - b.age)
};

// Test
console.log(sorterByAge([{name : 
"Lasha", age : 30}, {name: "Saba", age: 20}]));