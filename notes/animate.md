## First Thoughts

What is the input?

- a string of chars and dots
- there’s going to iteration of the string to find a char thats not a dot. - loop
- once we find the char, whether its an R or an L will determine where it moves

How do I move it?

- to move it I need to know the current index that char is at.
- if its an R then it’ll be the current index + speed. - condition
- if its an L then it’ll be the current index - speed. - condition
- process needs to repeat until the char is out of the string - while loop

How will I know when its out of the string?

- R is out of the string if the index is > the length of the input string - condition
- L is out of the string if the index < 0 - condition

What do I need from the input string?

- the indices of char R and L in the input string
- the length of the input string

## Iterate through the string and dump the indices of R and L into a JSON object

- JSON object with a string key and number[] value
- for key R go through each index in the value array and add speed -.map()
- for key L subtract speed. -.map()
- for R if the new index value is greater than the length of the string, we remove it - .filter()
- for L if the new index value is less than 0, we remove it. - .filter()
- this operation can continue until both R and L value arrays are empty. - while loop

## Rendering the strings

- we don’t care if its R or L, we just need the indices they exist at for every operation
- string creation should be separate from the actual operation - helper function
- send the post op JSON object with updated indices to a helper function that builds and returns the string
- throw the string on a final results array

## Initialization step

- first value of the result array will be exactly the input string with Xs instead of Rs and Ls
- place the first value in the result array
- push subsequent string renderings to the result array until value arrays are empty

## Polishing

Input Validation

- unexpected characters
- 0 or negative speed

Error handling and logging

- debug logs
- error messages
