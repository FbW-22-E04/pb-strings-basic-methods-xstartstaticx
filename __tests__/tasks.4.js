const rewire = require("rewire");

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('4. jsStr string', () => {
    test('The variable "jsStr" should exist', () => {
        const solution = rewire('../solution')
        const jsStr = solution.__get__('jsStr')
        expect(jsStr).toBeDefined()
    });
    test('jsStr should contain string', () => {
        const solution = rewire('../solution')
        const jsStr = solution.__get__('jsStr')
        const text = 'JavaScript'
        expect(jsStr).toBe(text)
    })
    test('should print sub string to the console', () => {
        const solution = require('../solution')
        expect(consoleSpy).toHaveBeenCalledWith('aSc');
    })
})