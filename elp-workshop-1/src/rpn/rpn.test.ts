import { rpn } from "./rpn";

describe("rpn()", () => {
    it("returs number when passed", () => {
      expect(rpn("2")).toBe(2);
    });


  it("correctly adds 2 numbers", //changed conditions
      ()=> {
        expect(rpn("1 3 +")).toBe(4);
      });


    it(`correctly adds 3 numbers`,  () => { //async
        expect(rpn("2 2 + 3 *")).toBe(12);
    });

    it("correctly divides  2  numbers", () => {
        expect(rpn("2 2 /")).toBe(1);
    });
});
