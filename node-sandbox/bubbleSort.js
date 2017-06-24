function bubbleSort(numbers){
  var swap;
  var x;
  var y;
  var array = numbers;

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
bubbleSort([5, 0, 1, 3, 4, 2, 7, 10, 3, 1, 5]);
module.exports = bubbleSort
