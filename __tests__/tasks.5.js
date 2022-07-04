const rewire = require("rewire")
const fs = require("fs");

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('5. niceShoesStr string', () => {
    test('The variable "niceShoesStr" should exist', () => {
        const solution = rewire('../solution')
        const niceShoesStr = solution.__get__('niceShoesStr')
        expect(niceShoesStr).toBeDefined()
    });
    test('niceShoesStr should contain string', () => {
        const solution = rewire('../solution')
        const niceShoesStr = solution.__get__('niceShoesStr')
        const text = 'nice shoes'
        expect(niceShoesStr).toBe(text)
    })
    test('text does not contain letter l and should print false', () => {
        const content = fs
            .readFileSync("./solution.js")
            .toString("utf-8")
            .replace(/ /g, "");
        const solution = require('../solution')
        expect(content.includes('.includes("l")')).toBeTruthy();
        expect(consoleSpy).toHaveBeenCalledWith(false);
    })
    test('text does contain letter n and should print true', () => {
        const content = fs
            .readFileSync("./solution.js")
            .toString("utf-8")
            .replace(/ /g, "");
        const solution = require('../solution')
        expect(content.includes('.includes("n")')).toBeTruthy();
        expect(consoleSpy).toHaveBeenCalledWith(true);
    })
})
