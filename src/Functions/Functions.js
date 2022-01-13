//Get three radnom numbers.
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//shuffle an array
function shuffle(array) {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

//create the random question
function createRandomQuestion(wrongList, rightList) {
  const wrongCollectionIndex = [];
  let i = 0;
  do {
    let currentValue = getRandomNumber(0, wrongList.length - 1);

    if (wrongCollectionIndex.includes(currentValue)) {
      continue;
    } else {
      wrongCollectionIndex.push(currentValue);
      i++;
    }
  } while (i < 3);

  //get those wrong answers in an array
  const question = wrongCollectionIndex.map((item) => {
    return wrongList[item];
  });

  //add that right answer to the question object
  question.push(rightList[getRandomNumber(0, rightList.length)]);

  //shuffle the array
  const newQuestion = shuffle(question);
  return newQuestion;
}

export { createRandomQuestion };
