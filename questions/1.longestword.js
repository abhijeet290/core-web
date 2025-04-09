function findLongestWord(str) {
  if (str.trim().length === 0) return false;
  let words = str.split(" ");
  // //   console.log(strArr)
  let longest = "";
  // wo
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(findLongestWord("Hello from coding questions"));
