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
    it("correctly substract 2 numbers push to the stack, correctly add two numbers and push to the stack and finally multiple 2 numbers from stack", () => {
        expect(rpn("3 1 - 2 2 + *")).toBe(8);
    });
    it("correctly add 2 last numbers from stack,add another two numbers from stack, multiple last number,add two lat numbers from stack and finally add two last numbers form stack", () => {
        expect(rpn("4 3 4 + 5 1 + 2 * + +")).toBe(23);
    });
    test("Return `Invalid Expresion when inputString is emptyString or has abc word` ", () => {
        expect(()=>{
            rpn("")}).toThrow('Invalid Expression')
    });
});
