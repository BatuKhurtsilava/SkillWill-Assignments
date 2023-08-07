const mySetTime = function(sec){ 
  return new Promise((resolve) =>{
  setTimeout(() => {
    resolve();
  }, sec * 1000);
  });
  }


  const makeToys = function () {
  return new Promise((resolve,reject) => {
    mySetTime(3).then(() => {console.log('Toy is assembled');
     if(Math.random() > 0.1) {
       resolve('Undefected')
     } else {
       reject('Defected');
     }
    })
  });
}
  
  
     
    
   
    const deliverToys = function(status) {
      return new Promise((resolve, reject) =>{
      mySetTime(2).then(() => {  
     if(status === 'Undefected') {
       if(Math.random() > 0.0001) {
         resolve('delievered');
       } else {
         resolve('not delievered')
       }
   } else{
     reject('toy was defected')
   
   }
    })
  })
}
   
   
       
   
   
    function sellToys(deliverStatus) {
      return new Promise((resolve, reject) => { 
     mySetTime(1);
     if(deliverStatus === 'delievered') {
       if(Math.random() > 0.7) {
         resolve('Toy has been sold');
       } else {
        resolve('Toy was not sold');
       }
   } else{
     resolve('toy was not delievered');
   
   }
   })
  }
   
   
   const promisify = function() {
     return new Promise((resolve, reject) => {
      makeToys()
      .then((res) => {
        return deliverToys(res);
      })
      .then((res) => {
        return sellToys(res)
      })
      .then((res) => {
        console.log(res);
        resolve(res);
        
      })
      .catch((error) => {
       console.log(error);
       reject(error);
     });
   });
  };
   
promisify();