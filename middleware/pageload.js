
/*

  Should be run on every page load
  - Manages the inter-page search string
  - Manages Phage Directory data (hydrates the db @ SSR and redirect)

*/

import _ from 'lodash'

export default async function ({route, env, store}) {
  const routeName = route.name;
  // console.log('pageload ctx:', context);

  // if(routeName != 'phages' && routeName != 'labs') {
  // // console.log('clear search.');
  //   store.dispatch('update', 
  //     {
  //       searchString: '',
  //       searchUrl: '',
  //     }
  //   )
  // }

  // add the external handler to store
  // if(!store.state.ext_handler || store.state.ext_handler == '') {
  //   store.commit('update', {ext_handler: env.ext_handler})
  // }

  // console.log('pageload:', process.server, process.client, process.static)

  async function loadDataOnServer() {
    // if universal mode, don't load data when not serer
    if(process.mode == 'universal' && !process.server)
      return false;

      let staticData
      if(!store.state.Content) {
        staticData = store.dispatch('loadCytosis', {
          env,
          tableIndex: 'static',
        })
      }

      return Promise.all([staticData])
  }

  // only do it on server-side
  // static is loaded on client on every page load/refresh, dynamic is only on generation
  
  store.dispatch('loadData')


  // set the light mode based on time

  const now = new Date
  const nowHour = now.getHours()
  // 12pm-7am is moonlight (no lights, pitch dark room)
  if (nowHour < 7) {
    store.dispatch('toggleLight',2)
  }
  else if (nowHour > 18) {
    // 6pm-12pm is twilight (evening, lights on)
    store.dispatch('toggleLight',1)
  }

  if(env.offline)
    return undefined

  return loadDataOnServer();

  // loads once on client; if cytosis exists it'll 
  // loadOnce();

  // clear search if we're not on a directory page

  // Populate Phage Directory 
  // If the user is not authenticated
  // if (!store.state.authenticated) {
  //   return redirect('/login')
  // }
}



