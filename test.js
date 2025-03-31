const { sum } = require('./app.js');

test('7 and 3 should return 10', () => {
    let result = sum(7,3);
    expect(result).toBe(10);
})

test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');


    const dollars = fromEuroToDollar(3.5);

   
    const expected = 3.5 * 1.07;


    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be 167,455 yen", function() {
 
    const { fromDollarToYen } = require('./app.js');

  
    const yen = fromDollarToYen(2);

   
    const expected = 2 * 167.455;

    
    expect(fromDollarToYen(2)).toBe(334.91); 
})
test("One Yen should be 136.155 yen", function() {
  
    const { formYenToPound } = require('./app.js');

   
    const pound = formYenToPound(2);

    
    const expected = 2 * 136.155;

    expect(formYenToPound(2)).toBe(272.31); 
})