function produceDrivingRange(blocks) {
  let outOfRange = ' blocks out of range',
      inRange = 'within range by '
  return (firstBlock, secondBlock) => {
    const range = blocks - (parseInt(secondBlock, 10) - parseInt(firstBlock, 10));
    return range >= 0 ? inRange + range : -range + outOfRange;
  }
}

function produceTipCalculator(percent) {
  return (total) => total * percent;
}

function createDriver() {
  let driverId = 0;

  return class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }

}
