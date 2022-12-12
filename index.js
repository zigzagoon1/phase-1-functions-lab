// Code your solution in this file!

const pickup = 43;
const hq = 42;
function distanceFromHqInBlocks(pickupLocation) {
    //returns num blocks from pickupLocation value to hq on 42nd 
    return Math.abs(hq - pickupLocation);
}

function distanceFromHqInFeet(blocks) {
    //translates blocks to feet; each block is 264 feet
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    //return num feet travelled
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    //return fare for customer given same start and end blocks from previous test
    //first 400 feet free
    //between 400 and 2000, price is 2 cents per foot
    //over 2000 feet under 2500, flat fare
    //does not allow rides over 2500 feet, return 'cannot travel that far'
    const feet = distanceTravelledInFeet(start, destination);
    if (feet < 400) {
        return 0;
    }
    else if (feet  > 400 && feet < 2000) {
        return (feet - 400) * 0.02;
    }
    else if (feet  > 2000 && feet < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}

