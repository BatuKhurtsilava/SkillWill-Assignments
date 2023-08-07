//1
const expo = function(a,b,fnc) {
if(b === 0) return 1;
return fnc(a, expo(a,b - 1,fnc), fnc)
}

const d = expo(5,3, (a, b) => {
 return a * b;

})
console.log(d);


//2

 async function fetchData() {
  try{
const request = await fetch('https://jsonplaceholder.typicode.com/posts');
const dataJson = await request.json();
dataJson.forEach(acc => {
  const html = `
  <div class="post-container">
  <div class="post">
    <div class="user-info">
      <span class="user-id">Account ${acc.userId}</span>
      <span class="post-id">Post N:${acc.id}</span>
    </div>
    <h2 class="post-title">${acc.title}</h2>
    <p class="post-content">${acc.body}</p>
  </div>
</div>
  `
  document.body.insertAdjacentHTML("beforeend", html);
})
  }
  catch(error) {
    console.log(error);
  }


};

fetchData();

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

const deepCopy = function(obj){
return  new Promise((resolve,reject) => {
if(typeof obj === 'object') {     
resolve(copyObj(obj));
} else {
  reject('There is  no object in input');
}
  })
};

console.log(deepCopy( {
  array : [1,2, {city : 'Tbilisi'}],
  primitive : 5,
  object: {
    primitive: 8,
    arr: [2,33],
  }
}));

console.log(deepCopy(5));