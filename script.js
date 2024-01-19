// // The .reduce() method takes an array and applies a callback function to condense the array into a single value.
// const getMean = (array) =>
//   array.reduce((acc, el) => acc + el, 0) / array.length;

// const getMedian = (array) => {
//   const sorted = array.slice().sort((a, b) => a - b); // by adding slice method we are creating a shoallow copy of the array and sorting it, this is done to avoid mutating the original array

//   const median =
//     array.length % 2 === 0
//       ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
//       : sorted[Math.floor(array.length / 2)];
//   return median;
// };

// const getMode = (array) => {
//   const counts = {}; // object to store the counts of each number
//   array.forEach((el) => {
//     counts[el] = (counts[el] || 0) + 1; // the or operation is performed to check if the key exists in the object, if it does not exist, it returns 0 and adds 1 to it, if it exists, it returns the value of the key and adds 1 to it
//   });
//   if (new Set(Object.values(counts)).size === 1) {
//     return null;
//   }
//   // the above check is performed to handle the edge case where all the numbers in the array are the same i.e the mode does not exist
//   const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];

//   const mode = Object.keys(counts).filter(
//     (el) => counts[el] === counts[highest]
//   );

//   return mode.join(", ");
// };

// const getRange = (array) => Math.max(...array) - Math.min(...array);

// const getVariance = (array) => {
//   const mean = getMean(array);
//   // const differences = array.map((el) => el - mean);
//   // const squaredDifferences = differences.map((el) => el ** 2);
//   // const sumSquaredDifferences = squaredDifferences.reduce((acc,el) => acc + el,0);

//   // A better way to do the above is to use the reduce method to perform all the operations in one go

//   const variance =
//     array.reduce((acc, el) => {
//       const difference = el - mean;
//       const squared = difference ** 2;
//       return acc + squared;
//     }, 0) / array.length;
//   return variance;
// };

// const getStandardDeviation = (array) => Math.sqrt(getVariance(array));

// const calculate = () => {
//   const value = document.querySelector("#numbers").value;
//   const array = value.split(/,\s*/g);
//   // this will split the string into an array of strings using the comma and any number of spaces as the separator
//   const numbers = array
//     .map((el) => {
//       Number(el);
//     })
//     .filter((el) => !isNaN(el));
//   const mean = getMean(numbers);
//   const median = getMedian(numbers);
//   const mode = getMode(numbers);
//   const range = getRange(numbers);
//   const variance = getVariance(numbers);
//   const standardDeviation = getStandardDeviation(numbers);
//   document.querySelector("#mean").textContent = mean;
//   document.querySelector("#median").textContent = median;
//   document.querySelector("#mode").textContent = mode;
//   document.querySelector("#range").textContent = range;
//   document.querySelector("#variance").textContent = variance;
//   document.querySelector("#standardDeviation").textContent = standardDeviation;
// };







// The .reduce() method takes an array and applies a callback function to condense the array into a single value.
const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
  const sorted = array.slice().sort((a, b) => a - b); // Create a shallow copy of the array to avoid mutation
  const median =
    array.length % 2 === 0
      ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
      : sorted[Math.floor(array.length / 2)];
  return median;
};

const getMode = (array) => {
  const counts = {}; // Object to store the counts of each number
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1; // Check if the key exists; if not, initialize it to 0 and add 1
  });
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }

  // Check for the mode by finding the key with the highest count
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]
  );

  return mode.join(", ");
};

const getRange = (array) => Math.max(...array) - Math.min(...array);

const getVariance = (array) => {
  const mean = getMean(array);

  // Use reduce to perform all operations in one go
  const variance =
    array.reduce((acc, el) => {
      const difference = el - mean;
      const squared = difference ** 2;
      return acc + squared;
    }, 0) / array.length;
  return variance;
};

const getStandardDeviation = (array) => Math.sqrt(getVariance(array));

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);

  // Map the array elements to numbers and filter out non-numeric values
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  // Update the HTML elements with the calculated values
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
  document.querySelector("#variance").textContent = variance;
  document.querySelector("#standardDeviation").textContent = standardDeviation;
};






