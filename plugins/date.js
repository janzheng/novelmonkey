
// import Vue from 'vue'
// import moment from 'moment'
import dayjs from 'dayjs'

Vue.filter('niceDate', function(value) {
  if (value) {
    return dayjs(String(value)).format('MMMM Do, YYYY')
  }
})

export default ({ app }, inject) => {
  inject('dayjs', dayjs)
}
