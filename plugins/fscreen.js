
// temp fix for @nuxtjs/markdownit
// injects into $md.render

import fscreen from 'fscreen'

export default ({ app }, inject) => {
  inject('fscreen', fscreen)
}
