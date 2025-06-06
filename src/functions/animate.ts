export function animate(initialPosition: string, speed: number): string[] {
  if (!initialPosition) {
    console.log("initial position cannot be empty");
    return ["Error: Initial position cannot be empty"];
  }

  if (speed <= 0) {
    console.log("speed cannot be less than or equal to 0");
    return ["Error: Speed cannot be less than or equal to 0"];
  }

  const chamberLength = initialPosition.length;

  // intitialization step
  // create a JSON object with the R and L keys and empty arrays
  const particlePositions: { R: number[]; L: number[] } = {
    R: [],
    L: [],
  };
  const finalPositions: string[] = [];

  // iterate over the initialPosition string and add the position to the corresponding array
  for (let i = 0; i < chamberLength; i++) {
    const char = initialPosition[i];
    if (char === "R") {
      particlePositions.R.push(i);
    } else if (char === "L") {
      particlePositions.L.push(i);
    } else if (char !== ".") {
      console.warn(
        `Unexpected character '${char}' at position ${i}. Skipping...`
      );
    }
  }
  //   console.log("particlePositions", particlePositions);
  //   console.log("initialPosition length", chamberLength);

  // get positions for the first string value
  const combinedPositions = [...particlePositions.R, ...particlePositions.L];
  const initialPositionString = getStringFromPositions(
    combinedPositions,
    chamberLength
  );

  finalPositions.push(initialPositionString);

  // rendering step
  // while the positions are not empty, move the particles
  while (particlePositions.R.length || particlePositions.L.length) {
    // move the particles by adding the speed to the R positions and subtracting the speed from the L positions
    particlePositions.R = particlePositions.R.map(
      (position) => position + speed
    );
    particlePositions.L = particlePositions.L.map(
      (position) => position - speed
    );
    // console.log("particlePositions after moving", particlePositions);

    // filter out positions that are greater than the length of the initial position and less than 0
    particlePositions.R = particlePositions.R.filter(
      (position) => position < chamberLength && position >= 0
    );
    particlePositions.L = particlePositions.L.filter(
      (position) => position >= 0 && position < chamberLength
    );
    // console.log("particlePositions after filtering", particlePositions);

    // get positions for the current string value
    const combinedPositions = [...particlePositions.R, ...particlePositions.L]; // this will have duplicates
    // console.log("combinedPositions", combinedPositions);
    const currentPositionString = getStringFromPositions(
      combinedPositions,
      chamberLength
    );
    finalPositions.push(currentPositionString);
  }
  console.log("finalPositions: ", finalPositions);
  return finalPositions;
}

function getStringFromPositions(positions: number[], length: number): string {
  const particleString = Array(length).fill(".");

  for (const pos of positions) {
    if (pos >= 0 && pos < length) {
      particleString[pos] = "X";
    }
  }
  return particleString.join("");
}

// console.log(animate("RR..LRL", 3));
// console.log(animate("..R....", 2));
// console.log(animate("LRLR.LRLR", 2));
// console.log(animate("RLRLRLRLRL", 10));
