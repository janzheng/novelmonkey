
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo);




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

// scrolling
// regular in-page, scroll so always see last sentence
let refBelowRenderer
export const setRefBelowRenderer = function(el) {
  refBelowRenderer = el
}
export const scrollToRendererBottom = function() {
      // VueScrollTo.scrollTo('#writer', 200, { easing: 'linear' })
	if (refBelowRenderer) {
    const calc = refBelowRenderer.offsetTop - window.innerHeight + 32
    
    window.scroll({
      left: 0,
      top: calc,
      behavior: 'smooth',
    })
  }

}

// full screen mode, scroll so always see last sentence
let refWriter
export const setWriter = function(el) {
  refWriter = el
}
export const scrollToFullscreenBottom = function() {
  // console.log('scrollToFullscreenBottom', refWriter)
	if (refWriter)
    refWriter.scroll({
      left: 0,
      top: refWriter.scrollHeight,
      behavior: 'smooth'
    })
		// refWriter.scrollTop = refWriter.scrollHeight
}


// full-screen functions (vuex not happy with storing refs)
export const fullscreenEnter = function(_this) {
  _this.$fscreen.requestFullscreen(refWriter)

  // need events bc you can leave fullscreen thru ESC and browser
  _this.$fscreen.addEventListener('fullscreenchange', handler, false);
  function handler() {
   if (_this.$fscreen.fullscreenElement !== null) {
    _this.$store.commit('setFullscreen')
    scrollToFullscreenBottom()
   } else {
    _this.$store.commit('setFullscreenOff')
    scrollToRendererBottom()
   }
  }
}
export const fullscreenLeave = function(_this) {
  _this.$fscreen.exitFullscreen()
}



