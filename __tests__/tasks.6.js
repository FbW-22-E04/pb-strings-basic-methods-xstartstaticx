const rewire = require("rewire")

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('6. old_newStr string', () => {
    test('The variable "newStr" should exist', () => {
        const solution = rewire('../solution')
        const newStr = solution.__get__('newStr')
        expect(newStr).toBeDefined()
    });
    test('The variable "oldStr" should exist', () => {
        const solution = rewire('../solution')
        const oldStr = solution.__get__('oldStr')
        expect(oldStr).toBeDefined()
    });
    test('newStr should contain modified string', () => {
        const solution = rewire('../solution')
        const solutionFile = require('../solution')
        const oldStr = solution.__get__('oldStr')
        expect(consoleSpy).toHaveBeenCalledWith(`${oldStr[0]}${oldStr}${oldStr[0]}`)
    })
})