const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// function totalBatteries(arr) {
  const totalBatteries = batteryBatches.reduce((previous, currentValue, index) => {
    return previous + currentValue

  })
  
//   return  totalBatteries
// }

// console.log(totalBatteries(batteryBatches));
console.log(totalBatteries);