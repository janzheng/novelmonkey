
export default { 

  // keep this flat, helps w/ reactivity

  // system
  ext_handler: '',
  policy: false,
  currentPolicy: false,
  searchUrl: '',
  lightModes: ['daylight','twilight','moonlight'],
  cytosis: '',

  // user settings
  lightMode: 0, // maps to lightModes
  fullscreen: false, // flag for full screen
  zen: false, // zen mode
  expand: false, // expand to fill window, but not full screen

  // user session content
  sessionName: '',
  defaultName: 'New session',
  session: [], // each session contains many fragment objects
  sessionCount: 0, // total word count for the session
  inputString: '', // current, uncommitted string (before hitting enter)
  inputCount: 0, // current input char count

  // refs / DOM
  refWriter: '', // tracks the ref for writer component, for full screen
  refBelowRenderer: '', // bottom of the renderer (default is footer, but this would change if other things are added)

}

