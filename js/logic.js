export class Haiku {
  constructor(string) {
    this.string = string;
  }
  //
  // parseLine(string) {
  //
  // }


  // parseSentence(string){
  //   // let words = this.string.split(""); // array of sentences
  //   let splitLine = string.split(" ");
  //   let lineCount = 0;
  //   for (let i = 0; i < splitLine.length; i++) {
  //     lineCount += psplitLine[i]
  //   }
  //   return lineCount;
    // let splitLinesValue = { //syllable count
    //   line0:0,
    //   line1 : 0,
    //   line2 : 0
    // };
    // let splitLines = { //array of singular words
    //   line0 : null, //['hey', 'hi', 'how'];
    //   line1 : null,
    //   line2 : null
    // };
    //
    // for (let i = 0; i < lines.length; i++) {
    //   splitLines[line + "i"] = lines[i].split(" ");
    // }
    //
    //
    // for (let line in splitLines) {
    //   for (let i = 0; i < line.length; i++) {
    //     splitLinesValues[line + "i"] = this.wordCheck(line[i]);
    //   }
    // }

    // let totalSyllables = 0;
    // for (let otherLine in splitLinesValues) {
    //   // otherLine += totalSyllables;
    //   totalSyllables += otherLine;
    // }

    // return totalSyllables === 17;
    // return totalSyllables;
    // let lineCount = 0;
    // for (let i = 0; i < words.length; i++) {
    //   totalSyllables += this.wordCheck(words[i]);
    // }
    // return this.wordCheck(string);

  // }

  vowelCheck(letter) {
    const vowelArray = ['a','e','i','o','u','y'];
    let vowell = null;
    // let length = lineArray.length;
    for (var i = 0; i < vowelArray.length; i++) {
      if (vowelArray[i] === letter) {
          vowell = true;
      }
    }
    return vowell;
  }

  wordCheck(stringIn) {
    let asArray= stringIn.split("");
    let vowelCount = 0;
    let syllables = 0;

    if (asArray[asArray.length - 1] === 'e') {
      asArray.pop();
      if (asArray[asArray.length - 1] === 'l') {
        syllables++;
        asArray.pop();
      }
    }
    while(asArray.length) {
      if (this.vowelCheck(asArray[0]) && (this.vowelCheck(1))) {
        syllables ++;
        asArray.shift();
        asArray.shift();
      } else if (this.vowelCheck(asArray[0])){
        syllables ++;
        asArray.shift();
      }
      asArray.shift();
  }
  return syllables;
  }
}
