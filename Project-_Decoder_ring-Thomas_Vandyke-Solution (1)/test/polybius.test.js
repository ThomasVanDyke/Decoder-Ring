// Write your tests here!
const { expect } = require("chai")
const { polybius } = require("../src/polybius")

describe("polybius tests written by Tom", () => {
    it("should translate both 'i' and 'j' to 42 when encoding", () => {
      const message = "jingle"
      const actual = polybius(message)
      const expected = "424233221351"
      
      expect(actual).to.equal(expected)
    })
    it("should translate 42 to both 'i' and 'j' when decoding", () => {
      const message = "424233221351"
      const actual = polybius(message, false)
      
      expect(actual).to.include("i")
      expect(actual).to.include("j")
    })
    it("should ignore capital letters", () => {
      const message = "JINGLE"
      const actual = polybius(message)
      const expected = "424233221351"
      
      expect(actual).to.equal(expected)
    })
    it("should maintain spaces when encoding", () => {
      const message = "please work"
      const actual = polybius(message)
      const expected = "531351113451 25432452"
      
      expect(actual).to.equal(expected)
    })
    it("should maintain spaces when decoding", () => {
      const message = "531351113451 25432452"
      const actual = polybius(message, false)
      const expected = "please work"
      
      expect(actual).to.equal(expected)
  })
})
