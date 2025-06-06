import { animate } from "./functions/animate.ts";
import { unusedAlphabet } from "./functions/unusedAlphabet.ts";

function runAnimateTest(label: string, input: string, speed: number) {
  console.log(`\n--- ${label} ---`);
  console.log(`Input: "${input}", Speed: ${speed}`);
  const result = animate(input, speed);
  console.log(result);
}

function runUnusedAlphabetTest(label: string, input: string) {
  console.log(`\n--- ${label} ---`);
  console.log(`Input: "${input}"`);
  const result = unusedAlphabet(input);
  console.log(`Unused: "${result}"`);
}

// === Animate Tests ===
runAnimateTest("Case 1: Mixed R/L", "RR..LRL", 3);
runAnimateTest("Case 2: Single R Particle", "..R....", 2);
runAnimateTest("Case 3: Patterned L/R", "LRLR.LRLR", 2);
runAnimateTest("Case 4: All particles exit instantly", "RLRLRLRLRL", 10);
runAnimateTest("Case 5: Speed is 0", "RR..LRL", 0);
runAnimateTest("Case 6: Speed is negative", "RR..LRL", -1);
runAnimateTest("Edge 1: No particles at all", "........", 1);
runAnimateTest("Edge 2: Particles already out of bounds", "R......L", 10);
runAnimateTest("Edge 3: Speed > chamber length", "RLRL", 10);
runAnimateTest("Edge 4: Particles collide/pass through", "LR", 1);
runAnimateTest("Edge 5: Only R", "..R..", 1);
runAnimateTest("Edge 6: Only L", "..L..", 1);
runAnimateTest("Edge 7: Odd patterns/gaps", "R..L..R.L", 1);
runAnimateTest("Edge 8: Length 1 string", "R", 1);
runAnimateTest("Edge 9: Empty string", "", 1);

// === UnusedAlphabet Tests ===
runUnusedAlphabetTest(
  "Case 1: Full alphabet used",
  "A quick brown fox jumps over the lazy dog"
); // ""
runUnusedAlphabetTest(
  "Case 2: Missing some letters",
  "A slow yellow fox crawls under the proactive dog"
); // "bjkmqz"
runUnusedAlphabetTest("Case 5: Empty string", ""); // "abcdefghijklmnopqrstuvwxyz"
runUnusedAlphabetTest("Case 6: All uppercase", "THE QUICK BROWN FOX"); // "adgjlmpsvyz"
runUnusedAlphabetTest("Case 7: Mixed cases & punctuation", "Hello, World!"); // "abcfgijkmnpqstuvxyz"
runUnusedAlphabetTest("Case 8: Repeated letters", "aaaaabbbbcccc"); // everything except abc
runUnusedAlphabetTest("Case 9: Single letter", "z"); // everything except z
runUnusedAlphabetTest(
  "Case 10: All letters multiple times",
  "thequickbrownfoxjumpsoverthelazydogthequickbrownfoxjumpsoverthelazydog"
); // ""
