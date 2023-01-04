/* Instructions
Have you heard the infamous song “99 Bottles of Beer?”
In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song.
Prompt the user for a number to begin counting down bottles.
In the song, everytime a bottle drops,
the subtracted number should go up by 1.
For example,
*/

function countBottlesOfBeer() {
  let userNumber = prompt(
    "Please give a number to begin counting down bottles"
  );
  console.log(`We start the song at ${userNumber} bottles`);
  let bottlesLess = userNumber;
  for (let i = 1; i <= userNumber; i++) {
    if (i==1){
        console.log(`Take ${i} down, pass it around`);
    }else{
        console.log(`Take ${i} down, pass them around`);
    }
    if (bottlesLess > 0) {
      bottlesLess = bottlesLess - i;
      console.log(`we have now ${bottlesLess} bottles`);
      if (bottlesLess < i) {
        console.log(`Take ${bottlesLess} down, pass them around`);
        console.log(`no bottle of beer on the wall`);
        break;
      }
    }else{
        break;
    }
  }
}

countBottlesOfBeer();
