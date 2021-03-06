
import _ from 'lodash'
import { count } from '~/assets/helpers.js'


export default { 

  setElement (state, el) {
    state.element = el
  },
  // generalized mutator for changing store
  // update (state, {name, payload}) {
  update (state, payload) {
    // takes: {stateName: payloadobject}
    // _this.$store.dispatch('update', { "enums.OVERFLOW": value})
    // future (multiple):  [{stateName: payloadobject}, {stateName: payloadobject})
    // console.log('mutate update')

    if ( !!payload && payload.length) {
      for (let n of payload) {
        // type 2: array of key/val pairs
        const name = Object.keys(payload)[n][0]
        const value = Object.values(payload)[n][0]

        // debug('Store.update', 'Updating:', name, payload, state)
        if(state[name] !== undefined) {
          state[name] = value
        } else {
          // console.log('Store update failed; object doesn’t exist for', name, state)
          console.error('Store.update', 'Failed: object doesn’t exist:', name, value, state)
        }
      }
    } else {
      const name = Object.keys(payload)[0]
      const value = Object.values(payload)[0]

      // type 2: name is "fruit.orange" we only want to edit the orange
      if(name.indexOf('.') > 0) {
        let substate = state
        let nameList = name.split('.')
        nameList.map((o) => {
          if(typeof(substate[o]) == 'object') {
            // console.log('popopopo')
            substate = substate[o]
          } else if(typeof(substate[o]) == 'undefined'){
            // console.log('wawawawa')
            substate[o] = {}
          }
        })
        substate[nameList[nameList.length-1]] = value

        // console.log('new state:', substate, state)
        return true
      }
      // type 1: only one key/val pair — this enforces checking for existence
      // replaces the whole object

      // debug('Store.update', 'Updating:', name, payload, state)
      if(state[name] !== undefined) {
        state[name] = value
      }
      else
        // console.log('Store update failed; object doesn’t exist for', name, state)
        console.error('Store.update', 'Failed: object doesn’t exist:', name, value, state)
    }
  },
  // generalized mutator for creating or updating new value
  updateCreate (state, payload) {
    // like update, but creates the object at location if it doesn't exist
    // basically like create w/o the checker
    // USE THIS SPARINGLY, most likely a state obj doesn't exist b/c of typo or race condition
    // if(!silent)
    // debug('Store.updateCreate', 'Creating', payload, state)
    // console.log('UPDATECREATE', payload)

    // iterator 
    Object.keys(payload).map((name) => {
      // const value = Object.values(payload)[0]
      // preserve things like functions, not just data w/ object.create
      state[name] = payload[name]
    })

    // single object
    // const name = Object.keys(payload)[0]
    // const value = Object.values(payload)[0]
    // state[name] = value
  },
  // clear (or reset) an object (esp. used on update)
  clear (state, {name}) {
    if(state[name] !== undefined) {
      state[name] = undefined
    }
    else
      // console.log('Store clear failed; object doesn’t exist for', name)
      console.error('Store.clear', 'Store clear failed; object doesn’t exist for', name)
  },


  // specifically overwrites the cytosis object
  // setCytosis (state, cytosis) {
  //   state['cytosis'] = cytosis
  // },

  setCytosis (state, cytosis) {

    // use the latest cytosis object, but combine all tables
    // console.log('setCyt before:', cytosis, state.cytosis)
    const aggregateTables = {...state.cytosis.tables, ...cytosis.tables}
    // console.log('setCyt aggregate:', aggregateTables)
    cytosis.tables = aggregateTables
    state.cytosis = _.cloneDeep(cytosis) 

    // spread each tables into state so mapstate can use them
    // state = {
    //   ... state,
    //   ... cytosis.tables
    // }
    for (let key of Object.keys(cytosis.tables)) {
      state[key] = cytosis.tables[key]
    }
    // console.log('setCyt after:', state.cytosis.find)
  },

  // track policy accepted or not, from Policy.vue
  
  updatePolicy (state) {
    state['policy'] = state['currentPolicy']
  },
  setPolicy (state, el) {
    state['policy'] = el
  },
  setCurrentPolicy (state, el) {
    state['currentPolicy'] = el
  },


  // Novelmonkey mutations

  // sets the current text, plus calculations
  setInputText (state, el) {
    state['inputString'] = el
    state['inputCount'] = count(el)
  },
  setSessionName (state, el) {
    state['sessionName'] = el
  },

  // reset the current session
  reset (state) {
    state['session'] = []
    state['sessionCount'] = 0

    state['inputString'] = ''
    state['inputCount'] = 0
  },

  // commits input text into a fragment, and resets the input text
  updateInput (state) {
    let fragment = {
      time: new Date(),
      string: state['inputString'],
      count: state['inputCount'],
      seshId: state.session.length, // used w/ :key
      // these would all be parsed
      // tags: [], // #topic — future
      // refs: [], // @person — future
      // projects: [], // future
    }
    state['session'].push(fragment)
    state['sessionCount'] += state['inputCount']

    state['inputString'] = ''
    state['inputCount'] = 0
  },

  // restores data from an object,
  // used for loading local data, saved files, indexeddb, and cloud
  restore (state, data) {
    state['session'] = data.session || []
    state['sessionCount'] = data.sessionCount || 0
    state['sessionName'] = data.sessionName || ''
  },

  // set reference for text input element
  // really useful for triggering focus
  setInputRef (state, el) {
    state['inputRef'] = el
  },

  setDevice (state, el) {
    state['device'] = el
  },



  // REFS / DOM setters
  // sets the writer ref so it can be accessed for full screen
  

  // set or unset fullscreen mode
  setFullscreen (state) {
    state['fullscreen'] = true
  },

  setFullscreenOff (state) {
    state['fullscreen'] = false
  },

  setExpand (state) {
    state['expand'] = true
  },
  setExpandOff (state) {
    state['expand'] = false
  },

  setZen (state) {
    state['zen'] = true
  },

  setZenOff (state) {
    state['zen'] = false
  },

  // tracks input state; reactively set by Inputter
  // (can't set from actions since so many ways to focus)
  setInputFocused (state) {
    state['focus'] = true
  },

  setInputUnfocused (state) {
    state['focus'] = false
  },

}





