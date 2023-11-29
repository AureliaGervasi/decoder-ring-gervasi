// Write your tests here!
const {caesar} = require("../src/caesar");
const {expect} = require("chai");

describe("caesar() submission tests written by Aurelia Gervasi", () => {
    it("should return false if shift is not present", () => {
        const expected = false;
        const actual = caesar("aurelia");
        expect(expected).to.equal(actual);
    });

    it("should return false if shift is equal to 0", () => {
        const expected = false;
        const actual = caesar("aurelia", 0);
        expect(expected).to.equal(actual);
    });

    it("should return false if shift is less than -25", () => {
        const expected = false;
        const actual = caesar("aurelia", -26);
        expect(expected).to.equal(actual);
    });

    it("should return false if shift is greater than 25", () => {
        const expected = false;
        const actual = caesar("aurelia", 26);
        expect(expected).to.equal(actual);
    });

    it("should not contain capital letters", () => {
        const expected = "bvsfmjb";
        const actual = caesar("Aurelia", 1);
        expect(expected).to.equal(actual);
    });

    it("should maintain spaces and other non-alphabetic symbols", () => {
        const expected = "bvsfmjb hfswbtj";
        const actual = caesar("aurelia gervasi", 1);
        expect(expected).to.equal(actual);
    });

    it("should handle shifts that go past end of alphabet", () => {
        const expected = "ccc";
        const actual = caesar("zzz", 3);
        expect(expected).to.equal(actual);
    });
});