# UnusedAlphabet Function

## First Thoughts

I am getting a string of characters and I need to know if it contains all 26 letters of the alphabet
Python dictionary with every letter in alphabet as a key and 0 as a value. We iterate through the input string and update the value of each letter that appears by +1 and at the end we find all the letters that had a value of 0 and join them into a string.

- dictionary seems unnecessary
- iterating through the string
- filtering the whole alphabet - !!

## Realization

The main operation is filtering the alphabet.
Shift focus from the input string to the alphabet

- iterate through a list of the 26 letters of the alphabet
- check for each letter in the input string

## First iteration

```
const unusedAlphabet1 = (input: string) => {
  const cleanedInput = input.toLowerCase().replace(/[^a-z]/g, "");
  const inputArray: string[] = cleanedInput.split("");
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alphabet.length; i++) {
    if (inputArray.includes(alphabet[i])) {
      alphabet[i] = "";
    }
  }
  return alphabet.join("");
};
```

- Red Flag 1: Using 2 string arrays, iterating through the alphabet and scanning the input array over and over again

## Second Iteration

Thinking about the initial intuitive choice to use a dictionary

- comparatively more performant lookup
- use a Set: no duplicates, fast lookup, order irrelevant

```
const unusedAlphabet2 = (input: string) => {
  const cleanedInput = input.toLowerCase().replace(/[^a-z]/g, "");
  const inputSet = new Set(cleanedInput);
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < alphabet.length; i++) {
    if (inputSet.has(alphabet[i])) {
      alphabet[i] = "";
    }
  }
  return alphabet.join("");
};
```

- Red Flag 2: replacing the letter in the alphabet string with an empty string

## Final Iteration

Use the filter function

- creates a new array using a pure function
- cleaner choice than replacing with empty string
