/**
 * This function first validate the input customAlphabet to make sure it contains 
 * exactly 26 letters. Then it converts all characters to lowercase. It splits 
 * the string and sorts them according to the custom alphabet order. 
 * Finally it joins these characters back to a new string.
 * 
 * @example
 * customOrder("123abcABC", ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])
 * // returns "aabbcc123"
 * @example
 * customOrder("abc", ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a'])
 * // returns "cba"
 * @param input - The string to be ordered.
 * @param customAlphabet - A list of characters representing the custom alphabet order.
 * @returns A new string sorted in custom alphabet order.
 * @throws If the customAlphabet does not contain 26 unique letters, the function will throw an error.
 */
export function customOrder(input: string, customAlphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')): string {
    if (customAlphabet.length !== 26) {
        throw new Error('Custom alphabet must contain exactly 26 letters.');
    }

    const seenLetters = new Set();
    for (const char of customAlphabet) {
        if (!/^[a-zA-Z]$/.test(char)) {
            throw new Error('Custom alphabet must only contain English letters.');
        }
        if (seenLetters.has(char.toLowerCase())) {
            throw new Error('Custom alphabet must not contain duplicate letters.');
        }
        seenLetters.add(char.toLowerCase());
    }

    return input.toLowerCase().split('').sort((a, b) => {
        return customAlphabet.indexOf(a.toLowerCase()) - customAlphabet.indexOf(b.toLowerCase());
    }).join('');
}

const input = "abc";
const result = customOrder(input, ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a']); 
console.log(`Original String: ${input}`);
console.log(`Sorted String: ${result}`);