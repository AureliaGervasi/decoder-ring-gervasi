// Write your tests here!
const {substitution} = require("../src/substitution");
const {expect} = require("chai");

describe("substitution", () => {
    it("should retain special characters and spaces", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(expected).to.equal(actual);
    });

    it("should ignore capital letters", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(expected).to.equal(actual);
    });

    it("should contain an alphabet string of exactly 26 characters, otherwise return false", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(expected).to.equal(actual);
    });

    it("should check that all alphabet characters are unique", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(expected).to.equal(actual);
    });
});