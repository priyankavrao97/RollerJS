import {Roller} from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
});

describe("Roller tests", ()=> {
  test("Description", () => {
  });
});

test("Faces of die", () => {
  let roller: Roller = new Roller(-1);  
  expect(6).toBe(6);
});

test("Faces of die", () => {
  let roller: Roller = new Roller(4);  
  expect(4).toBe(4);
});

test("Faces of die", () => {
  let roller: Roller = new Roller(4);  
  expect(4).toBe(4);
});

test("Roll die", () => {
  let roller: Roller = new Roller(4); 
  let actual:number=roller.roll(2); 
  expect(actual).toBe(2);
});

test("Return last face of die1", () => {
  let roller: Roller = new Roller(4);
  let x1:number=roller.roll(2);  
  let actual:number=roller.last(); 
  expect(actual).toBe(2);
});
test("Return last face of die2", () => {
  let roller: Roller = new Roller(4);
  let x1:number=roller.roll(2);  
  let x2:number=roller.roll(3); 
  let actual:number=roller.last(); 
  expect(actual).toBe(3);
});
// test("Return last face of die2", () => {
//   let roller: Roller = new Roller(4);
//   let x1:number=roller.roll(2);  
//   let x2:number=roller.roll(5); 
//   let actual:number=roller.last(); 
//   expect(actual).toBe(3);
// });
test("Return last face of die3", () => {
  let roller: Roller = new Roller(4);
  let x1:number=roller.roll(6);  
  let actual:number=roller.last(); 
  expect(actual).toBe(0);
});
test("Return roll 1", () => {
  let roller: Roller = new Roller(4);
  let actual:number=roller.roll(6);     
  expect(actual).toBe(0);
});
test("Return roll 2", () => {
  let roller: Roller = new Roller(4);
  let actual:number=roller.roll(2);     
  expect(actual).toBe(2);
});
test("Return roll 2", () => {
  let roller: Roller = new Roller(4);
  let x1:number=roller.roll(2);
  let x2:number=roller.roll(2);
  let actual:number=roller.roll(3);     
  expect(actual).toBe(3);
});
test("Last test", () => {
  let roller: Roller = new Roller(5);
  let x1:number=roller.roll(2);  
  let x2:number=roller.roll(3); 
  let x3:number=roller.roll(3);     
  let actual:Map<number,number>=roller.distribution();
  let m1=actual.get(3);
  expect(m1).toBe(2);
});
