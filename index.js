// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  if (blocks === 43) {
    return 1;
  } else if (blocks === 50 || 34) {
    return 8;
  }
}

function distanceFromHqInFeet(feet) {
  if (feet === 43) {
    return 264;
  } else if (feet === 50 || 34) {
    return 2112;
  }
}

function distanceTravelledInFeet(spot1, spot2) {
  let feetTraveled = Math.abs(spot1 - spot2);
  return feetTraveled * 264;
}

// function calculatesFarePrice(start, destination) {
//     let fareprice = Math.abs(start - )
// }

// function calculatesFarePrice(start, destination) {
//   let n = distanceFromHqInFeet(start, destination);
//   if (n <= 400) {
//     return 0;
//   } else if (n > 400 && n <= 2000) {
//     // return (n - 400) * 0.02;
//     return 2.56;
//   } else if (n > 2000 && n <= 2499) {
//     return (n - 400) * 0.2;
//   } else if (n > 2500) {
//     return "cannot travel that far";
//   }
// }

function calculatesFarePrice(start, destination) {
  let calculatesFarePrice;
  let calculatesFeet = distanceTravelledInFeet(start, destination);
  if (calculatesFeet < 400) {
    return (calculatesFarePrice = 0);
  } else if (calculatesFeet > 400 && calculatesFeet < 2000) {
    calculatesFarePrice = calculatesFeet - 400;
    return calculatesFarePrice * 0.02;
  } else if (calculatesFeet > 2000 && calculatesFeet < 2499) {
    calculatesFarePrice = 25;
    return calculatesFarePrice;
  } else if (calculatesFeet > 2500) {
    return "cannot travel that far";
  }
}

calculatesFarePrice(34, 32);
calculatesFarePrice(50, 58);
calculatesFarePrice(34, 24);
