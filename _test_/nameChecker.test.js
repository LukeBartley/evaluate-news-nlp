import {checkForName} from '../src/client/js/nameChecker'

describe("Test to make sure input is a url",() => {
    test("Test for checkForName() function", () => {
       expect(checkForName("Test")).toBe(false);
        })})
