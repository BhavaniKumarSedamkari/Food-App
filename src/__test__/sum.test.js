// import sum from '../components/sum.js';

// it("should test the sum of two numbers",()=>{
    
//     //quering
//     const add=sum(2,3);

//     //assertion
//     expect(add).toBe(5);
// });

const sum = require('../components/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});