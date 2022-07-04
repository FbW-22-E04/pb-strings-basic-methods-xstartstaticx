const rewire = require("rewire");

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('7. scritcherStr string', () => {
    test('The variable "scritcherStr" should exist', () => {
        const solution = rewire('../solution');
        const scritcherStr = solution.__get__('scritcherStr')
        expect(scritcherStr).toBeDefined()
    });
    test('The variable "scritcherStr" length is >= 3', () => {
        const solution = rewire('../solution');
        const scritcherStr = solution.__get__('scritcherStr')
        expect(scritcherStr.length).toBeGreaterThanOrEqual(3);
    });
    test('should print scritcherStr with last three char appended', () => {
        const solution = rewire('../solution');
        const scritcherStr = solution.__get__('scritcherStr')
        const solutionFile = require('../solution')
        const lastThree = scritcherStr.substring(scritcherStr.length - 3);
        const result = `${lastThree}${scritcherStr}${lastThree}`
        expect(consoleSpy).toHaveBeenCalledWith(result);
    })
})