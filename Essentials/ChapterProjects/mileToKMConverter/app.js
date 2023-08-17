let mileDistance = prompt(`Please enter the distance in Miles that you wish to convert.`);

const convertToKM = 1.60934;

let KMDistance = mileDistance * convertToKM;

alert(`The distance of ${mileDistance} miles is ${KMDistance} Kilomters.`);