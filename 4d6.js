var arrScore = [];

function rndSix() {
  return Math.floor(Math.random() * 6) +1;
}

function total() {
  return abScore.reduce(function(sum,value){return sum + value;},0);
}
for (i = 1;i < 7;i++) {

  var abScore = Array(4).fill(0).map(rndSix);
  /* console.log(abScore); */

  abScore.sort(function(a,b){return b-a});
  /* console.log(abScore); */

  abScore.splice(-1,1);
  /* console.log(abScore); */

  ttlScore = total();

  arrScore.push(ttlScore);

}

console.log(arrScore);


