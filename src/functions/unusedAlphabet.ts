export function unusedAlphabet(input: string): string {
  const cleanedInput = input.toLowerCase().replace(/[^a-z]/g, "");
  const inputSet = new Set(cleanedInput);
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const unusedAlphabet = alphabet.filter((letter) => !inputSet.has(letter));
  const unusedAlphabetString = unusedAlphabet.join("");
  console.log("unusedAlphabetString: ", unusedAlphabetString);
  return unusedAlphabetString;
}
