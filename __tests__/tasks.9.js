const rewire = require("rewire");

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('9. Description about yourself', () => {
    test('The variable "firstName" should exist', () => {
        const solution = rewire('../solution')
        const firstName = solution.__get__('firstName')
        expect(firstName).toBeDefined()
    });
    test('The variable "city" should exist', () => {
        const solution = rewire('../solution')
        const city = solution.__get__('city')
        expect(city).toBeDefined()
    });
    test('The variable "job" should exist', () => {
        const solution = rewire('../solution')
        const job = solution.__get__('job')
        expect(job).toBeDefined()
    });
    test('should print sentence containing values of "firstName", "city" and "job"', () => {
        const solutionFile = require('../solution')
        const solution = rewire('../solution')
        const firstName = solution.__get__('firstName')
        const city = solution.__get__('city')
        const job = solution.__get__('job')
        expect(consoleSpy).toHaveBeenCalledWith(`My name is ${firstName}. I live in ${city} and I am a ${job}`)
    })
})
