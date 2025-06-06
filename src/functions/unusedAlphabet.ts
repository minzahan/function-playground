export function unusedAlphabet(input: string): string {
  const cleanedInput: string = input.toLowerCase().replace(/[^a-z]/g, "");
  const inputSet: Set<string> = new Set(cleanedInput);
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const unusedAlphabet: string[] = alphabet.filter(
    (letter) => !inputSet.has(letter)
  );
  const unusedAlphabetString: string = unusedAlphabet.join("");
  return unusedAlphabetString;
}
