import { customOrder } from "../src/customOrder";

describe('customOrder-test', () => {
    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    test('function works when input is an empty string', () => {
        expect(customOrder("", standardAlphabet)).toBe("");
    });

    test('function works when there is no second input', () => {
        expect(customOrder("cba")).toBe("abc");
    });

    test('function works when the custom alphabet is a standard alphabet', () => {
        expect(customOrder("cba", standardAlphabet)).toBe("abc");
    });

    test('function works when the custom alphabet is not a standard alphabet', () => {
        const customAlphabet = 'zyxwvutsrqponmlkjihgfedcba'.split('');
        expect(customOrder("abc", customAlphabet)).toBe("cba");
    });

    test('function works when input is mixed-case string', () => {
        expect(customOrder('HiiveIsLive')).toBe('eehiiiilsvv');
    });

    test('function works when input is already sorted', () => {
        expect(customOrder('abc')).toBe('abc');
    });

    test('function works when input contains non-letter characters', () => {
        expect(customOrder('123abcABC')).toBe('123aabbcc');
    });

    test('function works when all characters of input are uppercase', () => {
        expect(customOrder('CBA')).toBe('abc');
    });

    test('function works when input contains spaces and punctuation', () => {
        expect(customOrder('Hello, World!')).toBe(', !dehllloorw');
    });

    test('function throws error with invalid custom alphabet', () => {
        const invalidAlphabetWithFiveChars = 'abcde'.split('');
        expect(() => customOrder("test", invalidAlphabetWithFiveChars)).toThrow('Custom alphabet must contain exactly 26 letters.');
        const invalidAlphabetWithDupChars = 'abbcdefghijklmnopqrstuvwxy'.split('');
        expect(() => customOrder("test", invalidAlphabetWithDupChars)).toThrow('Custom alphabet must not contain duplicate letters.');
        const invalidAlphabetWithNonLetter = 'abcdefghijklmnopqrstuvwxy,'.split('');
        expect(() => customOrder("test", invalidAlphabetWithNonLetter)).toThrow('Custom alphabet must only contain English letters.');
    });

    test('function works when custom alphabet contains uppercase letters', () => {
        let customAlphabet = 'zyxwvutsrqponmlkjihgfedcbA'.split('');
        expect(customOrder('abcz', customAlphabet)).toBe('zcba');
        customAlphabet = 'zyxwvutsrqponmlkjihgfedcBa'.split('');
        expect(customOrder('abcz', customAlphabet)).toBe('zcba');
    });
});
