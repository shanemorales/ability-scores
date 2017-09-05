function rndSix() {
  return Math.floor(Math.random() * 6) +1;
  /* .random returns random number 0.00 to 1.00
     * 6 multiplies to 0.00 to 5.99
     +1 makes random number 1.00 to 6.99, sets up .floor
     .floor cuts off decimal and returns whole integer from 1 to 6 */
}



for (i = 1;i < 7;i++) { /* loop runs 6 times */

  var abScore = Array(4).fill(0).map(rndSix);
  /* creates an array with 4 slots ???
     not sure how .fill works with .map
     .map(rndSix) calls function and adds result to abScore array 
     how does it run 4 times?
     */
  
  /* console.log(abScore); */

  abScore.sort(function(a,b){return b-a});
  /* .sort sorts array. Don't really how the rest actually sorts */

  /* console.log(abScore); */

  abScore.splice(-1,1);
  /* removes item in array; -1 = last item, 1 = remove 1 item */

  /* console.log(abScore); */

  var total = abScore.reduce(function(sum,value){return sum + value;},0);
  /* .reduce combines values from array
     not really sure how the rest works. */

  console.log(total); 
  /* here just to display numbers in console, doesn't really do anything */
}


