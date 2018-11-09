
// import Cytosis from 'cytosis'
import fscreen from 'fscreen'
import Cytosis from '~/other/cytosis'
import _ from 'lodash'
import moment from 'moment'

import { scrollToWriterBottom, scrollToFullscreenBottom } from '~/assets/helpers'

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

  toggleTypeface({ commit, state }, el) {
    let typeface = state.typeface + 1

    if (state.typeface == state.typefaces.length-1 )
      typeface = 0

    console.log('typeface:',typeface);

    // if pass in a number, ignore everything else
    if (el)
      typeface = el

    commit('update', {typeface: typeface})
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

    const now = moment(Date.now()).format('MM-DD-YY_HH.mm')
    console.log('save:',now)

    const a = document.createElement("a")
    document.body.appendChild(a)
    a.style = "display: none"

    const sessionName = state.sessionName || state.defaultName

    const url = window.URL.createObjectURL(blob)
      a.href = url
      a.download = `${sessionName}_${state.sessionCount}w_${now}.save` // filename
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

  // start the session; each session start gets a new start date/time
  // lets users keep track of sessions
  // future: add more metrics 
  // if idle for a while, could make another session start
  setSessionStart({ state }) {
    // const now = Date.now()
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
  },

  toggleExpand({ state, commit, dispatch }) {
    if(state['expand']) {
      commit('setExpandOff')
    }
    else {
      commit('setExpand')
    }
    dispatch('inputFocus')
  },
  
  toggleZen({ state, commit, dispatch }) {
    if(state['zen'])
      commit('setZenOff')
    else
      commit('setZen')
    dispatch('inputFocus')
  },

  // escape key action
  escape({ state, commit, dispatch }) {
    // if(state['expand'])
    //   commit('setExpandOff')
    if(!state['zen'] || !state['expand']) {
      commit('setExpand')
      commit('setZen')
      _.delay(scrollToFullscreenBottom,100)
    } else {
      commit('setExpandOff')
      commit('setZenOff')
      _.delay(scrollToWriterBottom,100)
    }
    dispatch('inputFocus')
    // dispatch('toggleExpand')
  },
}

// Helper methods
const emit = function (evtName, data) { // replaces entire dance object
  window.dispatchEvent( new CustomEvent(evtName, {detail: data}));
}

const debouncedUpdate = _.debounce(function(commit, object){
  // console.log('update debounced!')
  commit('update', object)
}, 1800)

