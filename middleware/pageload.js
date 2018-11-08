
/*

  Should be run on every page load
  - Manages the inter-page search string
  - Manages Phage Directory data (hydrates the db @ SSR and redirect)

*/

import _ from 'lodash'


export function loadStatic(env, store, routeName='') {
  let data
  if(store.state && !!!store.state.Content) {
    data = store.dispatch('loadCytosis', {
      env,
      tableIndex: 'static',
      caller: routeName
    })
  }
  return data
}

async function loadDataOnServer(routeName, store, env) {
  // Load static data
  // await store.dispatch('loadCytosis', {
  //   env,
  //   tableIndex: 'static',
  // })

  // if universal mode, don't load data when not server
  if(process.mode == 'universal' && !process.server)
    return false;

  console.log('loading cytosis. Data:', `Content:${!!store.state.Content}, Orgs:${!!store.state.Organizations}`)
  // if(process.server) {
    // checks to prevent over-eager fetching?
    let staticData, dynamicData, newsData

    staticData = loadStatic(env, store, routeName)

    return Promise.all([staticData, dynamicData])
  // }
}



export default function ({route, env, store, isMobileOrTablet, isMobile}) {
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
  if(!store.state.ext_handler || store.state.ext_handler == '') {
    store.commit('update', {ext_handler: env.ext_handler})
  }

  console.log('Pageload:', routeName, `[server:${process.server} / client:${process.client} / static:${process.static}]`)

  // console.log('PL', isMobile)
  // load novelmonkey saved content
  store.dispatch('loadData')
  store.dispatch('setSessionStart')

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

  // only do it on server-side
  // static is loaded on client on every page load/refresh, dynamic is only on generation
  
  // console.log(env)
  if(env.offline)
    return null

  // nuxt expects a promise for async middleware
  // const data = await loadDataOnServer()
  return loadDataOnServer(routeName, store, env)

}






