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
    expect(haiku.wordCheck()).toEqual(1);
  });
  it('should register "bbbbbble" as one syllable', function() {
    let haiku = new Haiku("bbbble");
    expect(haiku.wordCheck()).toEqual(1);
  });
  it('should register "tele" as two syllable', function() {
    let haiku = new Haiku("tele");
    expect(haiku.wordCheck()).toEqual(2);
  });
  it('should register "able" as one syllable', function() {
    let haiku = new Haiku("able");
    expect(haiku.wordCheck()).toEqual(2);
  });
  it('should register "homies" as one syllable', function() {
    let haiku = new Haiku("homies");
    expect(haiku.wordCheck()).toEqual(2);
  });
  it('should register "home" as one syllable', function() {
    let haiku = new Haiku("home");
    expect(haiku.wordCheck()).toEqual(1);
  });
  it('should register "phenomenon" as one syllable', function() {
    let haiku = new Haiku("phenomenon");
    expect(haiku.wordCheck()).toEqual(4);
  });
  it('should register "outside" as one syllable', function() {
    let haiku = new Haiku("outside");
    expect(haiku.wordCheck()).toEqual(2);
  });
  // it('should test register user entered 3 lines', function() {
  //   let test = Haiku("test1")
  // });
});
