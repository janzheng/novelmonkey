

import Vue from 'vue'


// export const addCommas = function(number) {
//   // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
//   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

Vue.filter('comma', 
  val => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  )
