console.log('ping');

const testArray = [1,2,3,4]

const addAll = (...numbers: number[]) => {
  const result = numbers.reduce((curr, next) => {return curr + next}, 0)
  console.log(result);
  
}

addAll(...testArray)