  function theBeatlesPlay(musicians, instruments){
  
  var beatles = []; 
  
     for(var i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
    }return beatles;
  }
  
 const  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
 const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

  theBeatlesPlay(musicians,instruments)





const facts = [ "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"];
        
function johnLennonFacts(array) {
  var excitedFacts = [];
  var i = 0 
  while (i < array.length) {
    excitedFacts.push(array[i] + "!!!")
  i += 1;
  }
  
  return excitedFacts;
}


console.log (johnLennonFact(["He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice","foo", "bar"]));



<<<<<<< HEAD


function iLoveTheBeatles(n){
var strings=[];
do{
n++;
strings.push("I love the Beatles!")
}while (n < 15);
return strings;
}


iLoveTheBeatles(7)
=======
function iLoveTheBeatles(number){

  var emptyArray = [];
  var i = -1;
   do{
    emptyArray.push("I love the beatles!");
    i++;
    } 
    while (i < number);
    if (number < 15){
      return(emptyArray);
    }
    else {
    return (["I love the Beatles!"]);
  }
   
}

iLoveTheBeatles(7);
>>>>>>> 3a22d806f688146a5eb7d741eab5820ad69e68b7
