import { Haiku}  from './../js/logic.js';

describe('Haiku', function() {
  // it('should test Haiku instance of Haiku', function() {
  //   let haiku = new Haiku("hello");
  //   expect(haiku.line1).toEqual("hello");
  // });

  // it('should test register "a" as one vowel', function() {
  //   let haiku = new Haiku("a");
  //   expect(haiku.vowelCheck("a")).toEqual(1);
  // });
  // it('should test register "ab" as a two vowels', function() {
  //   let haiku = new Haiku("ab");
  //   expect(haiku.vowelCheck("ab")).toEqual(1);
  // });
  // it('should test register "aba" as a two vowels', function() {
  //   let haiku = new Haiku("aba");
  //   expect(haiku.vowelCheck("aba")).toEqual(2);
  // });
  it('should test register "aba" as one syllable', function() {
    let haiku = new Haiku("aba");
    expect(haiku.wordCheck("aba")).toEqual(2);
  });
  it('should register "bbbbbble" as one syllable', function() {
    let haiku = new Haiku("bbbbbble");
    expect(haiku.wordCheck("bbbbbble")).toEqual(1);
  });
  it('should register "tele" as two syllable', function() {
    let haiku = new Haiku("tele");
    expect(haiku.wordCheck("tele")).toEqual(2);
  });
  it('should register "able" as one syllables', function() {
    let haiku = new Haiku("able");
    expect(haiku.wordCheck("able")).toEqual(2);
  });
  it('should register "homies" as one syllable', function() {
    let haiku = new Haiku("homies");
    expect(haiku.wordCheck("homies")).toEqual(2);
  });
  it('should register "home" as one syllable', function() {
    let haiku = new Haiku("home");
    expect(haiku.wordCheck("home")).toEqual(1);
  });
  it('should register "phenomenon" as one syllable', function() {
    let haiku = new Haiku("phenomenon");
    expect(haiku.wordCheck("phenomenon")).toEqual(4);
  });
  it('should register "syllables" as one syllable', function() {
    let haiku = new Haiku("syllables");
    expect(haiku.wordCheck("syllables")).toEqual(3);
  });
  it('should register "outside" as one syllable', function() {
    let haiku = new Haiku("outside");
    expect(haiku.wordCheck("outside")).toEqual(2);
  });
  it('should test register a sentence as syllables', function() {
    let haiku = new Haiku("homies home outside");
    expect(haiku.parseSentence("homies home outside")).toEqual(5);
  });
  // it('should test register an entire Haiku as syllables', function() {
  //   let haiku = new Haiku("A summer river being crossed, how pleasing, with sandals in my hands");
  //   expect(haiku.parseSentence()).toEqual(true);
  // });
});
