// card format: 14=A 13=K 12=Q 11=J 10=10 09=9 etc
// suits s,h,d,c eg. 14s ace of spades

// e.g. emily_smells_bad('09s','09h','13s') = [2,9,13]

function emily_smells_bad(thingy) {
  thingy.sort();
  thingy.reverse();
  if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[1].slice(0,2) == thingy[2].slice(0,2)) {
    return [3,parseInt(thingy[0].slice(0,2))] // trips
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) || thingy[1].slice(0,2) == thingy[2].slice(0,2)) {
    return [1,parseInt(thingy[1].slice(0,2)),parseInt(thingy[0].slice(0,2))+parseInt(thingy[2].slice(0,2))-parseInt(thingy[1].slice(0,2))] // pair
   }
  else {
    return [0,parseInt(thingy[0].slice(0,2)),parseInt(thingy[1].slice(0,2)),parseInt(thingy[2].slice(0,2))]
  }
};

function emily_stinks(thingy) {
  thingy.sort();
  thingy.reverse();
  if (thingy[0].slice(0,2) == '14' && thingy[1].slice(0,2) == '13' && thingy[2].slice(0,2)== '12' && thingy[3].slice(0,2) == '11' && thingy[4].slice(0,2) == '10' && thingy[0].charAt(2) == thingy[1].charAt(2) && thingy[1].charAt(2) == thingy[2].charAt(2) && thingy[2].charAt(2) == thingy[3].charAt(2) && thingy[3].charAt(2) == thingy[4].charAt(2)) {
    return [9] // Royal flush
  }
  else if (parseInt(thingy[0].slice(0,2)) - parseInt(thingy[1].slice(0,2)) == 1 && parseInt(thingy[1].slice(0,2)) - parseInt(thingy[2].slice(0,2)) == 1 && parseInt(thingy[2].slice(0,2)) - parseInt(thingy[3].slice(0,2)) == 1 && parseInt(thingy[3].slice(0,2)) - parseInt(thingy[4].slice(0,2)) == 1 && thingy[0].charAt(2) == thingy[1].charAt(2) && thingy[1].charAt(2) == thingy[2].charAt(2) && thingy[2].charAt(2) == thingy[3].charAt(2) && thingy[3].charAt(2) == thingy[4].charAt(2)) {
    return [8, parseInt(thingy[0].slice(0,2))] // straight flush
  }
  else if (thingy[0].slice(0,2) == '14' && thingy[1].slice(0,2) == '05' && thingy[2].slice(0,2)== '04' && thingy[3].slice(0,2) == '03' && thingy[4].slice(0,2) == '02' && thingy[0].charAt(2) == thingy[1].charAt(2) && thingy[1].charAt(2) == thingy[2].charAt(2) && thingy[2].charAt(2) == thingy[3].charAt(2) && thingy[3].charAt(2) == thingy[4].charAt(2)) {
    return [8, 5] // wheel straight flush
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[1].slice(0,2) == thingy[2].slice(0,2) && thingy[2].slice(0,2) == thingy[3].slice(0,2)) {
    return [7, parseInt(thingy[0].slice(0,2)), parseInt(thingy[4].slice(0,2))] // quads
  }
  else if (thingy[1].slice(0,2) == thingy[2].slice(0,2) && thingy[2].slice(0,2) == thingy[3].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [7, parseInt(thingy[1].slice(0,2)), parseInt(thingy[0].slice(0,2))] // quads
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[1].slice(0,2) == thingy[2].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [6, parseInt(thingy[0].slice(0,2)), parseInt(thingy[3].slice(0,2))] // full
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[2].slice(0,2) == thingy[3].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [6, parseInt(thingy[2].slice(0,2)), parseInt(thingy[0].slice(0,2))] // full
  }
  else if (thingy[0].charAt(2) == thingy[1].charAt(2) && thingy[1].charAt(2) == thingy[2].charAt(2) && thingy[2].charAt(2) == thingy[3].charAt(2) && thingy[3].charAt(2) == thingy[4].charAt(2)) {
    return [5, parseInt(thingy[0].slice(0,2)), parseInt(thingy[1].slice(0,2)), parseInt(thingy[2].slice(0,2)), parseInt(thingy[3].slice(0,2)), parseInt(thingy[4].slice(0,2))] // flush
  }
  else if (parseInt(thingy[0].slice(0,2)) - parseInt(thingy[1].slice(0,2)) == 1 && parseInt(thingy[1].slice(0,2)) - parseInt(thingy[2].slice(0,2)) == 1 && parseInt(thingy[2].slice(0,2)) - parseInt(thingy[3].slice(0,2)) == 1 && parseInt(thingy[3].slice(0,2)) - parseInt(thingy[4].slice(0,2)) == 1) {
    return [4, parseInt(thingy[0].slice(0,2))] // straight
  }
  else if (thingy[0].slice(0,2) == '14' && thingy[1].slice(0,2) == '05' && thingy[2].slice(0,2)== '04' && thingy[3].slice(0,2) == '03' && thingy[4].slice(0,2) == '02') {
    return [4, 5] // wheel straight
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[1].slice(0,2) == thingy[2].slice(0,2)) {
    return [3, parseInt(thingy[0].slice(0,2)), parseInt(thingy[3].slice(0,2)), parseInt(thingy[4].slice(0,2))] // trips
  }
  else if (thingy[1].slice(0,2) == thingy[2].slice(0,2) && thingy[2].slice(0,2) == thingy[3].slice(0,2)) {
    return [3, parseInt(thingy[1].slice(0,2)), parseInt(thingy[0].slice(0,2)), parseInt(thingy[4].slice(0,2))] // trips
  }
  else if (thingy[2].slice(0,2) == thingy[3].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [3, parseInt(thingy[2].slice(0,2)), parseInt(thingy[0].slice(0,2)), parseInt(thingy[1].slice(0,2))] // trips
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[2].slice(0,2) == thingy[3].slice(0,2)) {
    return [2, parseInt(thingy[0].slice(0,2)), parseInt(thingy[2].slice(0,2)), parseInt(thingy[4].slice(0,2))] // twopair
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [2, parseInt(thingy[0].slice(0,2)), parseInt(thingy[3].slice(0,2)), parseInt(thingy[2].slice(0,2))] // twopair
  }
  else if (thingy[1].slice(0,2) == thingy[2].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [2, parseInt(thingy[1].slice(0,2)), parseInt(thingy[3].slice(0,2)), parseInt(thingy[0].slice(0,2))] // twopair
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2)) {
    return [1, parseInt(thingy[0].slice(0,2)), parseInt(thingy[2].slice(0,2)), parseInt(thingy[3].slice(0,2)), parseInt(thingy[4].slice(0,2))] // pair
  }
  else if (thingy[1].slice(0,2) == thingy[2].slice(0,2)) {
    return [1, parseInt(thingy[1].slice(0,2)), parseInt(thingy[0].slice(0,2)), parseInt(thingy[3].slice(0,2)), parseInt(thingy[4].slice(0,2))] // pair
  }
  else if (thingy[2].slice(0,2) == thingy[3].slice(0,2)) {
    return [1, parseInt(thingy[2].slice(0,2)), parseInt(thingy[0].slice(0,2)), parseInt(thingy[1].slice(0,2)), parseInt(thingy[4].slice(0,2))] // pair
  }
  else if (thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [1, parseInt(thingy[3].slice(0,2)), parseInt(thingy[0].slice(0,2)), parseInt(thingy[1].slice(0,2)), parseInt(thingy[2].slice(0,2))] // pair
  }
  else {
    return [0, parseInt(thingy[0].slice(0,2)), parseInt(thingy[1].slice(0,2)), parseInt(thingy[2].slice(0,2)), parseInt(thingy[3].slice(0,2)), parseInt(thingy[4].slice(0,2))] // high card
  }
};

document.getElementById("thing").innerHTML = emily_smells_bad(['04c', '05c', '05h']);

function whatchamacallit(hippo, platypus) {
  var goldfish = Math.min(hippo.length, platypus.length);
  for (baboon=0; baboon<goldfish; baboon++) {
    if (hippo[baboon]<platypus[baboon]) {
      return false;
    }
    else if (hippo[baboon]>platypus[baboon]) {
      return true;
    }
  }
  return true;
};

var hand = ['10s', '10h', '10c', '12h', '05h']
var foot = ['10c', '10s', '10d']

function toproyalty(thingy) {
  var toilet = emily_smells_bad(thingy);
  if (toilet[0] == 3) {
    return 8 + toilet[1];
  }
  else if (toilet[0] == 1 && toilet[1]>=6) {
    return toilet[1] - 5;
  }
  else {
    return 0;
  }
}

var midroyaltytable = [0,0,0,2,4,8,12,20,30,50];
var bottomroyaltytable = [0,0,0,0,2,4,6,10,15,25];

function midroyalty(thingy) {
  var broccoli = emily_stinks(thingy);
  return midroyaltytable[broccoli[0]];
}

function bottomroyalty(thingy) {
  var carrot = emily_stinks(thingy);
  return bottomroyaltytable[carrot[0]];
}

var cardlist = ['08s', '07d', '14s', '07h', '05c', '09d', '10c', '12s', '07c', '14h', '03h', '11h', '05h'] // 13 cards for classic ofc, do 14 later

// here we go

var answer = -1;
var emily_smells_terrible = ['','',''];
var numbers = [];

// i can't believe i'm about to do this

// no seriously

for (a=0; a<11; a++) { // top
  for (b=a+1; b<12; b++) {
    for (c=b+1; c<13; c++) {
      for (d=0; d<6; d++) { // middle
        for (e=d+1; e<7; e++) {
          for (f=e+1; f<8; f++) {
            for (g=f+1; g<9; g++) {
              for (h=g+1; h<10; h++) {
                // for (i=0; i<6; i++) { // discard
                  var thingything = cardlist.slice();
                  var top = [thingything[a], thingything[b], thingything[c]];
                  thingything.splice(c, 1);
                  thingything.splice(b, 1);
                  thingything.splice(a, 1);
                  var mid = [thingything[d], thingything[e], thingything[f], thingything[g], thingything[h]];
                  thingything.splice(h, 1);
                  thingything.splice(g, 1);
                  thingything.splice(f, 1);
                  thingything.splice(e, 1);
                  thingything.splice(d, 1);
                  // thingything.splice(i, 1); // discard
                  var bottom = thingything.slice();
                  if (whatchamacallit(emily_stinks(mid), emily_smells_bad(top)) && whatchamacallit(emily_stinks(bottom), emily_stinks(mid))) {
                    var royalty = toproyalty(top) + midroyalty(mid) + bottomroyalty(bottom);
                    if (royalty>answer) {
                      answer = royalty;
                      emily_smells_terrible = [top, mid, bottom];
                      numbers = [a,b,c,d,e,f,g,h];
                    }
                  // }
                }
              }
            }
          }
        }
      }
    }
  }
}

console.log(emily_smells_terrible)
console.log(answer)
console.log(numbers)
