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
  while (currentIndex !== 0) {
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

function createCollection(list, num) {
  const collectionIndex = [];
  let i = 0;
  do {
    let currentValue = getRandomNumber(0, list.length - 1);

    if (collectionIndex.includes(currentValue)) {
      continue;
    } else {
      collectionIndex.push(currentValue);
      i++;
    }
  } while (i < num);

  //get those wrong answers in an array
  const collection = collectionIndex.map((item) => {
    return list[item];
  });
  return collection;
}

function joinCollections(wrong, right) {
  const questionStack = [];
  let a = 0;
  let b = 1;
  let c = 2;
  let i = 0;
  //build 10 questions
  while (i < 10) {
    //build wrong answers
    questionStack.push([wrong[a], wrong[b], wrong[c], right[i]]);
    shuffle(questionStack[i]);
    a = a + 3; //increase index by 1
    b = b + 3; //increase index by 1
    c = c + 3; //increase index by 1
    i++; //increase count by 1
  }
  return questionStack;
}

export { joinCollections, createCollection };
