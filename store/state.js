
export default { 

  // keep this flat, helps w/ reactivity

  // system
  ext_handler: '',
  policy: false,
  currentPolicy: false,
  searchUrl: '',
  lightModes: ['daylight','twilight','moonlight'],

  // user settings
  lightMode: 0,
   
  // user session content
  sessionName: '',
  session: [], // each session contains many fragment objects
  sessionCount: 0, // total word count for the session
  inputString: '', // current, uncommitted string (before hitting enter)
  inputCount: 0, // current input char count

}

