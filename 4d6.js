var arrScore = [];

var scrNames = ['Strength','Dexterity','Constitution','Intelligence','Wisdom','Charisma'];

function rndSix() {
  return Math.floor(Math.random() * 6) +1;
}

function total() {
  return abScore.reduce(function(sum,value){return sum + value;},0);
}

for (i = 1;i < 7;i++) {

  var abScore = Array(4).fill(0).map(rndSix);
  /* console.log(abScore); */

  abScore.sort(function(a,b){return b-a;});
  /* console.log(abScore); */

  abScore.splice(-1,1);
  /* console.log(abScore); */

  ttlScore = total();

  arrScore.push(ttlScore);

}

/* console.log(arrScore); */

let fnlScores = [
  {
    ability: scrNames[0],
    score: arrScore[0]
  },
  {
    ability: scrNames[1],
    score: arrScore[1]
  },
  {
    ability: scrNames[2],
    score: arrScore[2]
  },
  {
    ability: scrNames[3],
    score: arrScore[3]
  },
  {
    ability: scrNames[4],
    score: arrScore[4]
  },
  {
    ability: scrNames[5],
    score: arrScore[5]
  }
];
  
for (j=0;j<fnlScores.length;j++) {
  for (let x in fnlScores[j]) {
    console.log(x + ": " + fnlScores[j][x]);
  }
  console.log("---------------");
}