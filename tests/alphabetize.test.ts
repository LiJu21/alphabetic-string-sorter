import { alphabetize } from "../src/alphabetize";

describe('alphabetize-test', () => {
    test('function works when input is an empty string', () => {
        expect(alphabetize('')).toBe('');
    });

    test('function works when input is mixed-case string', () => {
        expect(alphabetize('HiiveIsLive')).toBe('eehiiiilsvv');
    });

    test('function works when input is already sorted', () => {
        expect(alphabetize('abc')).toBe('abc');
    });

    test('function works when input contains non-letter characters', () => {
        expect(alphabetize('123abcABC')).toBe('123aabbcc');
    });

    test('function works when all characters of input are uppercase', () => {
        expect(alphabetize('CBA')).toBe('abc');
    });

    test('function works when input contains spaces and punctuation', () => {
        expect(alphabetize('Hello, World!')).toBe(' !,dehllloorw');
    });
});