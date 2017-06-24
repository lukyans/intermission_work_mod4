var quantity = 15;
var sum = 0;
var sum1 = 1;
var sequence = [];

sequence.push(sum, sum1);

while(sequence.length < quantity){
sum2 = sum + sum1;
if (sequence.length === quantity) { break; }
sequence.push(sum2);
console.log(sum + " plus " + sum1 + " is " + "(" + sum2 + ")")

sum = sum1 + sum2;
if (sequence.length === quantity) { break; } 
sequence.push(sum);
console.log(sum1 + " plus " + sum2 + " is " + "(" + sum + ")")

sum1 = sum + sum2;
if (sequence.length === quantity) { break; }
sequence.push(sum1);
console.log(sum2 + " plus " + sum + " is " + "(" + sum1 + ")")
};

while (sequence.length){
console.log(sequence.splice(0, 5))
};