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

test("Roll die", () => {
  let roller: Roller = new Roller(4); 
  let actual:number=roller.roll(2); 
  expect(actual).toBe(2);
});

test("Return last face of die", () => {
  let roller: Roller = new Roller(4); 
  let actual:number=roller.last(); 
  expect(actual).toBe(0);
});

