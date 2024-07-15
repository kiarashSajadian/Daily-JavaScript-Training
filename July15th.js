// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  let arr = name.split("");
  console.log(arr);
  if (arr[0] === "r" || arr[0] === "R") {
    return name + " plays banjo";
  }
  return name + " does not play banjo";
}

// other ways

function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}

// other ways

function areYouPlayingBanjo(name) {
  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}

