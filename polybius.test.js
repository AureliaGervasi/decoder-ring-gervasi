// Write your tests here!
const {polybius} = require("../src/polybius");
const {expect} = require("chai");

describe ("polybius() tests", () => {
    it("should be a string", () => {
        const actual = polybius("Aurelia");
        expect(actual).to.be.a("string");
    });

    it("should translate letters i and j to 42", () => {
        const actual = polybius("ij");
        const expected = "4242";
        expect(expected).to.equal(actual);
    });

    it("should translate 42 to (i/j)", () => {
        const actual = polybius("424222221351", false);
        const expected = "(i/j)(i/j)ggle";
        expect(expected).to.equal(actual);
    });

    it("should contain an even number of characters not including spaces", () => {
        const expected = "11542451134211 22512415113442";
        const actual = polybius("Aurelia Gervasi");
        expect(expected).to.equal(actual);
    });

    it("should maintain spaces throughout string", () => {
        const expected = "11542451134211 22512415113442";
        const actual = polybius("aurelia gervasi");
        expect(expected).to.equal(actual);
    });

    it("should ignore capital letters", () => {
        const expected = "11542451134211";
        const actual = polybius("Aurelia");
        expect(expected).to.equal(actual);
    });
});