
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

}