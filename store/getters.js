
export default {
  
  copyContent (state) {
    let content = ''

    for(let sesh of state.session) {
      content += sesh.string + '\n'
    }
    return content
  },

  lightModeName (state) {
    return state.lightModes[state.lightMode]
  },

  typefaceName (state) {
    return state.typefaces[state.typeface]
  },

  hasWritten (state) {
    if (state.sessionCount > 0)
      return true
    return false
  },

  activeCount (state) {
    return state.sessionCount + state.inputCount
  },

  json (state) {
    return JSON.stringify(state)
  },

  zenClass(state) {
    if(state.zen)
      return '--zen'
    return ''
  },

  fullscreenClass(state) {
    return state.fullscreen ? '--fullscreen' : ''
  },

  focusedClass(state) {
    return state.focus ? '--focused' : ''
  },

  expandClass(state) {
    return state.expand ? '--grow':''
  }

}