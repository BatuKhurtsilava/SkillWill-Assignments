function mySetTime(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec * 1000);
  });
}
  
  async function makeToys() {
   await mySetTime(3);
    console.log('Toy is assembled');
    if(Math.random() > 0.1) {
      return 'Undefected'
    } else {
      return 'Defected';
    }}
    
   
  
   async function deliverToys(status) {
    await mySetTime(2);
    if(status === 'Undefected') {
      if(Math.random() > 0.0001) {
        return 'delievered';
      } else {
        return 'not delievered'
      }
  } else{
    return 'toy was defected';
  
  }
   }
  
  
      
  
  
  async function sellToys(deliverStatus) {
    await mySetTime(1);
    if(deliverStatus === 'delievered') {
      if(Math.random() > 0.7) {
        return 'Toy has been sold';
      } else {
        return 'Toy was not sold'
      }
  } else{
    return 'toy was not delievered';
  
  }
  }
  
  
  async function promisify() {
    try {
      const status = await makeToys();
      const deliverStatus = await deliverToys(status);
      const result = await sellToys(deliverStatus);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  
  promisify();
  
  