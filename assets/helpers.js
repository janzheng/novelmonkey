

export const count = function(str) {
  return (str.match(/\S+/g)||[]).length;
}

export const addCommas = function(number) {
  // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getWordCount = function() {
  // current session wordcount + input str's word count 
  // return addCommas(this.state.wordCount + this.state.inputWordCount);
}