function bubbleSort(array){
  var swap;
  var x;
  var y;

  for (x = 0; x < array.length; x++) { 
    for (y = 0; y < array.length; y++) {
      if (array[y] > array[y+1]) {
        swap = array[y];
        array[y] = array[y+1];
        array[y+1] = swap;
      }
    }
  }
  console.log(array)
}
bubbleSort(["d", "b", "a", "c"]);
module.exports = bubbleSort
