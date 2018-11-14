
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo);




export const count = function(str) {
  return (str.match(/\S+/g)||[]).length;
}


export const getWordCount = function() {
  // current session wordcount + input str's word count 
  // return addCommas(this.state.wordCount + this.state.inputWordCount);
}

// scrolling
// regular in-page, scroll so always see last sentence
let writerBottom
export const setRefWriterBottom = function(el) {
  writerBottom = el
}
export const scrollToWriterBottom = function(_this) {
  console.log('yeee scrollToWriterBottom', writerBottom)
      // VueScrollTo.scrollTo('#writer', 200, { easing: 'linear' })
	if (writerBottom) {
    const calc = writerBottom.offsetTop - window.innerHeight + 32
    
    if(calc - window.scrollY < 50) {
      window.scroll(0, calc) // smooth scroll annoying when continuous typing
    } else {
      window.scroll({
        left: 0,
        top: calc,
        behavior: 'smooth',
      })
    }
    if(_this)
      _this.$store.dispatch('inputFocus')
  }

}

// full screen mode, scroll so always see last sentence
let refWriter
export const setWriter = function(el) {
  refWriter = el
}
export const scrollToFullscreenBottom = function(_this) {
  // console.log('scrollToFullscreenBottom', refWriter)
	if (refWriter) {
    refWriter.scroll({
      left: 0,
      top: refWriter.scrollHeight,
      behavior: 'smooth'
    })
    if(_this)
      _this.$store.dispatch('inputFocus')
		// refWriter.scrollTop = refWriter.scrollHeight
  }
}


// full-screen functions (vuex not happy with storing refs)
export const fullscreenEnter = function(_this) {
  _this.$fscreen.requestFullscreen(refWriter)

  // need events bc you can leave fullscreen thru ESC and browser
  _this.$fscreen.addEventListener('fullscreenchange', handler, false);
  function handler() {
   if (_this.$fscreen.fullscreenElement !== null) {
    _this.$store.commit('setFullscreen')
    scrollToFullscreenBottom(_this)
   } else {
    _this.$store.commit('setFullscreenOff')
    scrollToWriterBottom(_this)
   }
  }
}
export const fullscreenLeave = function(_this) {
  _this.$fscreen.exitFullscreen()
}



