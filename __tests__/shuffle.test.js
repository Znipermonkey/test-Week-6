const shuffle = require("../src/shuffle");

let testArr = [4,2,3,5,6,1]

describe("shuffle should...", () => {
  test('checks to see if return is an shuffled ', () => {
    const shuffled = shuffle(testArr)
    expect(shuffled).not.toEqual(testArr)
  })
  test('check to see if the return has the same length', () => {
    const shuffled = shuffle(testArr)
    const length = shuffled.length
    expect(length).toEqual(testArr.length)
  })
});
