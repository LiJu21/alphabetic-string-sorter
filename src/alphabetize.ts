/**
 * This function converts all characters to lowercase. Then it splits 
 * the string and sorts them alphabetically. Finally it joins these characters 
 * back to a new string.
 * @example input “HiiveIsLive" => output “eehiiiilsvv"
 * @param input - The string to be sorted.
 * @returns A new string sorted in alphabetical order.
 */
export function alphabetize(input: string): string {
    return input.toLowerCase().split('').sort().join('');
}

const input = "HiiveIsLive";
const result = alphabetize(input); 
console.log(`Original String: ${input}`);
console.log(`Sorted String: ${result}`);