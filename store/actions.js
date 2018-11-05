
// import Cytosis from 'cytosis'
import Cytosis from '~/other/cytosis'
import _ from 'lodash'


export default {
  async loadCytosis ({ commit, state }, {env, tableIndex, options}) {
    const airKey = env.airtable_api
    const airBase = env.airtable_base

    console.log('[actions/loadCytosis]')
    let cytosis = await new Cytosis({
      airKey, 
      airBase, 
      tableIndex, 
      options
    })
    commit('setCytosis', cytosis)
    return Promise.resolve(cytosis)
  },


  // initializes the store
  setElement ({ commit }, el) { // replaces entire object
    commit('setElement', el)
  },
  update ({ commit }, el) {
    // generic mutator action
    // el is: {name: 'stateName', payload: {data} }

    // special rules
    // if updating settings, must clear the data
    // if(el.name == 'settings')
    //   commit('clear', {name: 'data'})

    commit('update', el)
  },
  debouncedUpdate ({ commit }, el) {
    debouncedUpdate(commit, el)
  },
  updateCreate ({ commit }, el) {
    commit('updateCreate', el)
  },
  clear ({ commit }, el) {
    // generic mutator action to clear something
    commit('update', el)
  },

  // actions
  toggleLight({ commit, state }, el) {
    let lightMode = state.lightMode + 1

    if (state.lightMode >= state.lightModes.length -1)
      lightMode = 0

    // if pass in a number, ignore everything else
    if (el)
      lightMode = el

    commit('update', {lightMode: lightMode})
  },

  commitInput({ commit, state, dispatch }) {
    commit('updateInput')
    dispatch('localSave')
  },

  generateSave({ state }) {
    const data = JSON.stringify({
      session: state.session,
      sessionCount: state.sessionCount,
      sessionName: state.sessionName,
    })
    const blob = new Blob([data], {type: "octet/stream"})

    const a = document.createElement("a")
    document.body.appendChild(a)
    a.style = "display: none"

    const sessionName = state.sessionName || 'novelmonkey'

    const url = window.URL.createObjectURL(blob)
      a.href = url
      a.download = `${sessionName}-${state.sessionCount}.save` // filename
      a.click()
      window.URL.revokeObjectURL(url)
  },

  localSave({ state }) {
    const data = JSON.stringify({
      session: state.session,
      sessionCount: state.sessionCount,
      sessionName: state.sessionName,
    })
    localStorage.setItem('session', data)
  },

  // load data from a raw (json) string or localstorage
  // and populate the store
  loadData({ commit, state }, raw=localStorage.getItem('session')) {
    // const data = JSON.stringify({
    //   session: state.session,
    //   sessionCount: state.sessionCount,
    // })
    if (!!raw) {
      const data = JSON.parse(raw) || {}
      commit('restore', data)
    }
  },

  // reset the localstorage
  localReset({ commit }) {
    localStorage.removeItem('session')
  },

  // reset the current session, but also trigger localStorage reset (for v1 at least)
  sessionReset({ commit, dispatch}) {
    dispatch('localReset')
    commit('reset')
  },

  // file loading example
  // https://codepen.io/nguernse/pen/JyYdNY
  loadFiles({ commit, dispatch }, files) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var content = e.target.result;
      console.log('file content:', content)
      dispatch('loadData', content)
    };
    reader.readAsText(files[0], "UTF-8");
  },

  // focus on input, passed in as a ref (optional)
  inputFocus({ state }, ref) {
    if (ref)
      ref.focus()
    else
      state.inputRef.focus()
  }

}

// Helper methods
const emit = function (evtName, data) { // replaces entire dance object
  window.dispatchEvent( new CustomEvent(evtName, {detail: data}));
}

const debouncedUpdate = _.debounce(function(commit, object){
  // console.log('update debounced!')
  commit('update', object)
}, 1800)

