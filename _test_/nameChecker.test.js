import {checkForName} from '../src/client/js/nameChecker'

describe("Test for url",() => {
    test("Test checkForName() function", () => {
       expect(checkForName("Test")).toBe(false);
        })})
