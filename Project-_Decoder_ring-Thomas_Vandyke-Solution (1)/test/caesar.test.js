// Write your tests here!
const { expect } = require("chai")
const { caesar } = require("../src/caesar.js")

describe("caesar tests written by Tom", () => {
    it("should return false if the shift value is 0", () => {
        const message = "test"
        const shift = 0
        const actual = caesar(message, shift)
  
        expect(actual).to.be.false
    })
    it("should return false if the shift value is less than -25", () => {
        const message = "test"
        const shift = -27
        const actual = caesar(message, shift)
  
        expect(actual).to.be.false
    })
    it("should return false if the shift value is greater than 25", () => {
        const message = "test"
        const shift = 27
        const actual = caesar(message, shift)
  
        expect(actual).to.be.false
    })
    it("should return false if the shift value is not present.", () => {
        const message = "test"
        const shift = ""
        const actual = caesar(message, shift)
  
        expect(actual).to.be.false
    })
    it("should ignore capital letters", () => {
        const message = "IGNORE"
        const shift = 2
        const actual = caesar(message, shift)

        expect(actual).to.equal("kipqtg")
    })
    it("should wrap around if the shift goes past the end or beginning of the alphabet", () => {
        const message = "zebra"
        const shift = 1
        const actual = caesar(message, shift)

        expect(actual).to.equal("afcsb")
    })
    it("should maintain spaces and other nonalphabetic characters before and after encoding", () => {
        const message = "wow it's done"
        const shift = 3
        const actual = caesar(message, shift)

        expect(actual).to.equal("zrz lw'v grqh")
    })
      it("should maintain spaces and other nonalphabetic characters before and after decoding", () => {
        const message = "zrz lw'v grqh"
        const shift = 3
        const actual = caesar(message, shift, false)

        expect(actual).to.equal("wow it's done")
    })
})