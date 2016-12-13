var cards = [];

function zipadeedoodah(thingy) { // hope nobody reads this
  thing=thingy.slice();
  for (z=0; z<thing.length; z++) {
    switch(thing[z].slice(0,2)) {
      case '14':
        thing[z]='A'+thing[z].charAt(2);
        break;
      case '13':
        thing[z]='K'+thing[z].charAt(2);
        break;
      case '12':
        thing[z]='Q'+thing[z].charAt(2);
        break;
      case '11':
        thing[z]='J'+thing[z].charAt(2);
        break;
      case '10':
        break;
      default:
        thing[z]=thing[z].substring(1);
        break;
    }
  }
  return thing;
}


function zebra(blah) {
  var x = document.getElementById(blah);
  var toilet = cards.indexOf(blah);
  if (toilet == -1) {
    cards.push(blah);
  }
  else {
    cards.splice(toilet,1);
  }
  document.getElementById("something").innerHTML=zipadeedoodah(cards);
}

function bleurgh() {
  cards = [];
  document.getElementById("something").innerHTML='';
  document.getElementById("stuff").innerHTML='';
}


function emma_watson_is_cool(thingy) {
  thingy.sort();
  thingy.reverse();
  if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[1].slice(0,2) == thingy[2].slice(0,2)) {
    return [3,+(thingy[0].slice(0,2))] // trips
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) || thingy[1].slice(0,2) == thingy[2].slice(0,2)) {
    return [1,+(thingy[1].slice(0,2)),+(thingy[0].slice(0,2))+ +(thingy[2].slice(0,2))- +(thingy[1].slice(0,2))] // pair
   }
  else {
    return [0,+(thingy[0].slice(0,2)),+(thingy[1].slice(0,2)),+(thingy[2].slice(0,2))]
  }
}


function eddie_redmayne_is_awesome(thingy) {
  thingy.sort();
  thingy.reverse();
  if (thingy[0].slice(0,2) == '14' && thingy[1].slice(0,2) == '13' && thingy[2].slice(0,2) == '12' && thingy[3].slice(0,2) == '11' && thingy[4].slice(0,2) == '10' && thingy[0].charAt(2) == thingy[1].charAt(2) && thingy[1].charAt(2) == thingy[2].charAt(2) && thingy[2].charAt(2) == thingy[3].charAt(2) && thingy[3].charAt(2) == thingy[4].charAt(2)) {
    return [9] // Royal flush
  }
  else if (+(thingy[0].slice(0,2)) - +(thingy[1].slice(0,2)) == 1 && +(thingy[1].slice(0,2)) - +(thingy[2].slice(0,2)) == 1 && +(thingy[2].slice(0,2)) - +(thingy[3].slice(0,2)) == 1 && +(thingy[3].slice(0,2)) - +(thingy[4].slice(0,2)) == 1 && thingy[0].charAt(2) == thingy[1].charAt(2) && thingy[1].charAt(2) == thingy[2].charAt(2) && thingy[2].charAt(2) == thingy[3].charAt(2) && thingy[3].charAt(2) == thingy[4].charAt(2)) {
    return [8, +(thingy[0].slice(0,2))] // straight flush
  }
  else if (thingy[0].slice(0,2) == '14' && thingy[1].slice(0,2) == '05' && thingy[2].slice(0,2)== '04' && thingy[3].slice(0,2) == '03' && thingy[4].slice(0,2) == '02' && thingy[0].charAt(2) == thingy[1].charAt(2) && thingy[1].charAt(2) == thingy[2].charAt(2) && thingy[2].charAt(2) == thingy[3].charAt(2) && thingy[3].charAt(2) == thingy[4].charAt(2)) {
    return [8, 5] // wheel straight flush
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[1].slice(0,2) == thingy[2].slice(0,2) && thingy[2].slice(0,2) == thingy[3].slice(0,2)) {
    return [7, +(thingy[0].slice(0,2)), +(thingy[4].slice(0,2))] // quads
  }
  else if (thingy[1].slice(0,2) == thingy[2].slice(0,2) && thingy[2].slice(0,2) == thingy[3].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [7, +(thingy[1].slice(0,2)), +(thingy[0].slice(0,2))] // quads
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[1].slice(0,2) == thingy[2].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [6, +(thingy[0].slice(0,2)), +(thingy[3].slice(0,2))] // full
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[2].slice(0,2) == thingy[3].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [6, +(thingy[2].slice(0,2)), +(thingy[0].slice(0,2))] // full
  }
  else if (thingy[0].charAt(2) == thingy[1].charAt(2) && thingy[1].charAt(2) == thingy[2].charAt(2) && thingy[2].charAt(2) == thingy[3].charAt(2) && thingy[3].charAt(2) == thingy[4].charAt(2)) {
    return [5, +(thingy[0].slice(0,2)), +(thingy[1].slice(0,2)), +(thingy[2].slice(0,2)), +(thingy[3].slice(0,2)), +(thingy[4].slice(0,2))] // flush
  }
  else if (+(thingy[0].slice(0,2)) - +(thingy[1].slice(0,2)) == 1 && +(thingy[1].slice(0,2)) - +(thingy[2].slice(0,2)) == 1 && +(thingy[2].slice(0,2)) - +(thingy[3].slice(0,2)) == 1 && +(thingy[3].slice(0,2)) - +(thingy[4].slice(0,2)) == 1) {
    return [4, +(thingy[0].slice(0,2))] // straight
  }
  else if (thingy[0].slice(0,2) == '14' && thingy[1].slice(0,2) == '05' && thingy[2].slice(0,2)== '04' && thingy[3].slice(0,2) == '03' && thingy[4].slice(0,2) == '02') {
    return [4, 5] // wheel straight
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[1].slice(0,2) == thingy[2].slice(0,2)) {
    return [3, +(thingy[0].slice(0,2)), +(thingy[3].slice(0,2)), +(thingy[4].slice(0,2))] // trips
  }
  else if (thingy[1].slice(0,2) == thingy[2].slice(0,2) && thingy[2].slice(0,2) == thingy[3].slice(0,2)) {
    return [3, +(thingy[1].slice(0,2)), +(thingy[0].slice(0,2)), +(thingy[4].slice(0,2))] // trips
  }
  else if (thingy[2].slice(0,2) == thingy[3].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [3, +(thingy[2].slice(0,2)), +(thingy[0].slice(0,2)), +(thingy[1].slice(0,2))] // trips
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[2].slice(0,2) == thingy[3].slice(0,2)) {
    return [2, +(thingy[0].slice(0,2)), +(thingy[2].slice(0,2)), +(thingy[4].slice(0,2))] // twopair
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [2, +(thingy[0].slice(0,2)), +(thingy[3].slice(0,2)), +(thingy[2].slice(0,2))] // twopair
  }
  else if (thingy[1].slice(0,2) == thingy[2].slice(0,2) && thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [2, +(thingy[1].slice(0,2)), +(thingy[3].slice(0,2)), +(thingy[0].slice(0,2))] // twopair
  }
  else if (thingy[0].slice(0,2) == thingy[1].slice(0,2)) {
    return [1, +(thingy[0].slice(0,2)), +(thingy[2].slice(0,2)), +(thingy[3].slice(0,2)), +(thingy[4].slice(0,2))] // pair
  }
  else if (thingy[1].slice(0,2) == thingy[2].slice(0,2)) {
    return [1, +(thingy[1].slice(0,2)), +(thingy[0].slice(0,2)), +(thingy[3].slice(0,2)), +(thingy[4].slice(0,2))] // pair
  }
  else if (thingy[2].slice(0,2) == thingy[3].slice(0,2)) {
    return [1, +(thingy[2].slice(0,2)), +(thingy[0].slice(0,2)), +(thingy[1].slice(0,2)), +(thingy[4].slice(0,2))] // pair
  }
  else if (thingy[3].slice(0,2) == thingy[4].slice(0,2)) {
    return [1, +(thingy[3].slice(0,2)), +(thingy[0].slice(0,2)), +(thingy[1].slice(0,2)), +(thingy[2].slice(0,2))] // pair
  }
  else {
    return [0, +(thingy[0].slice(0,2)), +(thingy[1].slice(0,2)), +(thingy[2].slice(0,2)), +(thingy[3].slice(0,2)), +(thingy[4].slice(0,2))] // high card
  }
};


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

function toproyalty(thingy) {
  var toilet = emma_watson_is_cool(thingy);
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
  var broccoli = eddie_redmayne_is_awesome(thingy);
  return midroyaltytable[broccoli[0]];
}

function bottomroyalty(thingy) {
  var carrot = eddie_redmayne_is_awesome(thingy);
  return bottomroyaltytable[carrot[0]];
}


// here we go

var answer = -1;
var benedict_cumberbatch_is_amazing = ['','',''];

// i can't believe i'm about to do this

// no seriously

// i know this is horribly ghastly

function omfg(cards) { // 13 of them, takes like a second
  for (a=0; a<11; a++) { // top
    for (b=a+1; b<12; b++) {
      for (c=b+1; c<13; c++) {
        for (d=0; d<6; d++) { // middle
          for (e=d+1; e<7; e++) {
            for (f=e+1; f<8; f++) {
              for (g=f+1; g<9; g++) {
                for (h=g+1; h<10; h++) {
                  // for (i=0; i<6; i++) { // discard
                    var thingything = cards.slice();
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
                    var chocolate = eddie_redmayne_is_awesome(mid);
                    if (whatchamacallit(chocolate, emma_watson_is_cool(top)) && whatchamacallit(eddie_redmayne_is_awesome(bottom), chocolate)) {
                      var royalty = toproyalty(top) + midroyalty(mid) + bottomroyalty(bottom);
                      if (royalty>answer) {
                        answer = royalty;
                        benedict_cumberbatch_is_amazing = [top, mid, bottom];
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
}

function omfg14(cards) { // 14 of them, takes like 15-20 seconds
  for (a=0; a<12; a++) { // top
    for (b=a+1; b<13; b++) {
      for (c=b+1; c<14; c++) {
        for (d=0; d<7; d++) { // middle
          for (e=d+1; e<8; e++) {
            for (f=e+1; f<9; f++) {
              for (g=f+1; g<10; g++) {
                for (h=g+1; h<11; h++) {
                  for (i=0; i<6; i++) { // discard
                    var thingything = cards.slice();
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
                    thingything.splice(i, 1); // discard
                    var bottom = thingything.slice();
                    if (whatchamacallit(eddie_redmayne_is_awesome(mid), emma_watson_is_cool(top)) && whatchamacallit(eddie_redmayne_is_awesome(bottom), eddie_redmayne_is_awesome(mid))) {
                      var royalty = toproyalty(top) + midroyalty(mid) + bottomroyalty(bottom);
                      if (royalty>answer) {
                        answer = royalty;
                        benedict_cumberbatch_is_amazing = [top, mid, bottom];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// you can speed this up by a decent amount if you do the discard after checking that the middle row doesn't foul the top. will do that later.


function thingything(thing) {
  if ((thing.length != 13) && (thing.length != 14)) {
    document.getElementById("stuff").innerHTML='needs to be 13 cards for standard ofc or 14 for pineapple';
  }
  else if (thing.length == 13) {
    omfg(cards);
    document.getElementById("stuff").innerHTML='top '+zipadeedoodah(benedict_cumberbatch_is_amazing[0])+'<br>'+'mid '+zipadeedoodah(benedict_cumberbatch_is_amazing[1]) +'<br>'+'bottom '+zipadeedoodah(benedict_cumberbatch_is_amazing[2])+'<br>'+'total royalty is '+answer;
  }
  else {
    omfg14(cards);
    document.getElementById("stuff").innerHTML='top '+zipadeedoodah(benedict_cumberbatch_is_amazing[0])+'<br>'+'mid '+zipadeedoodah(benedict_cumberbatch_is_amazing[1]) +'<br>'+'bottom '+zipadeedoodah(benedict_cumberbatch_is_amazing[2])+'<br>'+'total royalty is '+answer;
  }
  cards=[];
  answer = -1;
  benedict_cumberbatch_is_amazing = ['','',''];
}

// glitch from swcpoker tells me that even though bots aren't allowed to play on swc, he'll make an exception for this one because fantasylands are easily human-solvable anyway, and most often in less than 15-20 seconds.

// so i think it's best to leave it like this, even though some trivial optimisations are possible, i may not be allowed to actually use it if i improve it!
