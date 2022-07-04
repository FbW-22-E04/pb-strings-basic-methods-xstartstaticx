const rewire = require("rewire");

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('2. helloStr string', () => {
    test('The variable "helloStr" should exist', () => {
        const solution = rewire('../solution')
        const helloStr = solution.__get__('helloStr')
        expect(helloStr).toBeDefined()
    });
    test('helloStr should contain string', () => {
        const solution = rewire('../solution')
        const helloStr = solution.__get__('helloStr')
        const text = 'Hello World'
        expect(helloStr).toBe(text)
    })
    test('should print the text upper cased to the console', () => {
        const solution = require('../solution')
        expect(consoleSpy).toHaveBeenCalledWith('HELLO WORLD');
    })
})