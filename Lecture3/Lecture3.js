//1
const func = function(n1,n2,...numbers) {

  if ( numbers.every(el => typeof el === 'number')) {
  if(typeof n1 === 'number' && typeof n2 === 'number') {
  const sumOfn1n2 = n1 + n2;
  let sum = 1;
  const multnumbers = function() {
    for(num of numbers) {
      sum *= num;
      
    }
    return sum;
  }
  const arr1 = [sumOfn1n2, multnumbers()];
  return arr1;
}}};

//Test
console.log(func(1,2,3,4));


//2

const reader = function name(user) {
const{ banks} = user;
const{address : {city}} = banks[2]
return city;
};

//Test

console.log(reader({
  banks: [1,2, {address :{city: 'tbilisi'}}],
}));



//3
const copyObj = (obj => {
  const result = {};
  for(fn in obj ) {
    if(typeof obj[fn] !== 'object' || obj[fn] === null) {
    result[fn] = obj[fn];
    } else{
      if(Array.isArray(obj[fn])) {
    result[fn] = obj[fn].map(o => copyObj(o));  
      } {
    result[fn] = copyObj(obj[fn]);    
      }
    }

  }
  return result;
});

//Test
console.log(copyObj( {
  array : [1,2, {city : 'Tbilisi'}],
  primitive : 5,
  object: {
    primitive: 8,
    arr: [2,33],
  }
}));
