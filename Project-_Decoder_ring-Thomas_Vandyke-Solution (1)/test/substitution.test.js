// Write your tests here!
const { expect } = require("chai")
const { substitution } = require("../src/substitution")

describe("substitution tests written by Tom", () => {
    it("should return false when the alphabet is not exactly 26 characters long", () => {
      const actual = substitution("test, abcd")
      
      expect(actual).to.be.false
    })
  it("should correctly translate the phrase based off the given alphabet", () => {
    const actual = substitution("test", "cbeafpdghikljsmonqruzxwtyv")
    const expected = "ufru"
    
    expect(actual).to.equal(expected)
  })
  it("should return false if there are any duplicate letters in the alphabet", () => {
    const actual = substitution("test", "aaaafpdghikljsmonqruzxwtyv")
    
    expect(actual).to.be.false
  })
  it("should maintain spaces before and after encoding", () => {
    const actual = substitution("test passed", "cbeafpdghikljsmonqruzxwtyv")
    const expected = "ufru ocrrfa"
    
    expect(actual).to.equal(expected)
  })
  it("should maintain spaces before and after decoding", () => {
    const actual = substitution("ufru ocrrfa", "cbeafpdghikljsmonqruzxwtyv", false)
    const expected = "test passed"
    
    expect(actual).to.equal(expected)
  })
  it("should ignore capital letters", () => {
    const actual = substitution("TEST", "cbeafpdghikljsmonqruzxwtyv")
    const expected = "ufru"
    
    expect(actual).to.equal(expected)
  })
})