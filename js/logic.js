export class Haiku {
  constructor(string) {
    this.string = string;
  }

  vowelCheck(letter) {
    const vowelArray = ['a','e','i','o','u'];
    let vowell = null;
    // let length = lineArray.length;
    for (var i = 0; i < vowelArray.length; i++) {
      if (vowelArray[i] === letter) {
          vowell = true;
      }
    }
    return vowell;
  }

  wordCheck() {
    let asArray= this.string.split("");
    let vowelCount = 0;
    let syllables = 0;
    if (this.string.length > 0 && this.string.length < 4) {
      syllables = 1;
      return syllables;
    }
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
