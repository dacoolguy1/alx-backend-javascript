// export default function appendToEachArrayValue(array, appendString) {
//   for (var idx in array) {
//     var value = array[idx];
//     array[idx] = appendString + value;
//   }

//   return array;
// }

export default function appendToEachArrayValue(array, appendString) {
  const res = [];
  for (const element of array) {
    res.push(`${appendString}${element}`);
  }
  return res;
}
