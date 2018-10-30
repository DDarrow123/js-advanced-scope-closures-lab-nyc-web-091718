
function produceDrivingRange(distance) {
  return function blockRange(blk1, blk2){
    let blockSubstring1 = parseInt((blk1).substring(0,2))
    let blockSubstring2 = parseInt((blk2).substring(0,2))
    let blockDifference = Math.abs(blockSubstring1 - blockSubstring2)
    // console.log(Math.abs(blockSubstring1 - blockSubstring2));
    const range = distance - blockDifference
    if (range > 0){
      return `within range by ${range}`
    }
    const absRange = Math.abs(range)
    return `${absRange} blocks out of range`
  }
};

// string.substring(start, end)

function produceTipCalculator(percent) {
  return (function (total) {
    return total * percent
  });
}

function createDriver() {
  let driverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
