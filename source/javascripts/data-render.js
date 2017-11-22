

/*

      Directory Data Loader

      - build the lists
      - feed them into list.js for search and sorting
      - tabs will eventually need to be list.js filters instead of tabs
      
*/


// $(document).ready(function() {
//   console.log(
//     // '- site loaded -',
//     // organizations,
//     // profiles,
//     // roles,
//   )
// })


// render the data to the directory
// raw render
function render_raw(profiles) {
  // reset the container lists
  $('.person-list').html('');
  console.log('> Raw Render', profiles)

  // render profiles
  profiles.raw.forEach(function(item) {
    render_profile(item);
  });

  // render hosts
  var hosts = convert_hosts(profiles.raw);
  $('.host-list').html('');
  Object.keys(hosts).forEach(function(host) {
    // console.log(host + ':',hosts[host]);
    render_host(hosts[host], host); 
  });
}

// render a PROFILE
// map item to the html
// for all views
// combined with list js?
function render_profile(item) {
  // skip if publish state is false 
  if(item.system.published == false) {
    return false;
  }

  // console.log('::: rendering: ', item); // , $('.person-list').html());
  var tmp_person = $('#template-person').clone();
    tmp_person.removeAttr('id');
    tmp_person.find('.person-img').hide(); // no images for now
    tmp_person.find('.person-name').text(item.name);
    tmp_person.find('.person-organization').text(item.org);
    tmp_person.find('.person-role').text(item.role);

    if( typeof(item.profiles.twitter) != 'undefined' && item.profiles.twitter != '') {
      tmp_person.find('.person-twitter a').attr('href','https://twitter.com/' + item.profiles.twitter.replace(/^@/g,''));
      tmp_person.find('.person-twitter a').text('@' + item.profiles.twitter.replace(/^@/g,'') );
    }
    if( typeof(item.profiles.scholar) != 'undefined' && item.profiles.scholar != '') {
      tmp_person.find('.person-scholar a').attr('href', item.profiles.scholar);
      tmp_person.find('.person-scholar a').text('Google Scholar' );
    }
    if( typeof(item.profiles.researchgate) != 'undefined' && item.profiles.researchgate != '') {
      tmp_person.find('.person-researchgate a').attr('href', item.profiles.researchgate);
      tmp_person.find('.person-researchgate a').text('ResearchGate' );
    }
    if( typeof(item.profiles.orcid) != 'undefined' && item.profiles.orcid != '') {
      tmp_person.find('.person-orcid a').attr('href', 'http://orcid.org/'+item.profiles.orcid);
      tmp_person.find('.person-orcid a').text(item.profiles.orcid);
    }

    tmp_person.find('.directory-item-notes').text(item.system.profile_str);
    
    if( typeof(item.orgs) != 'undefined') {
      tmp_person.find('.org-name').text(item.orgs[0].name + ` (${item.orgs[0].abbr})`);
    }
    else 
      tmp_person.find('.org-name').text(item.org);
    

    item.pi != '' ? tmp_person.find('.org-pi').text(item.pi) : tmp_person.find('.org-pi').hide();

    // var tmp_host = $('#template-host').clone().removeAttr('id').html('');
    item.phages.forEach(function(phage) {
      var tmp_host = $('#template-person-host').clone().removeAttr('id').html('');
      // console.log('phage: ' + phage)
      $(tmp_host).html(phage_process(phage));
      tmp_person.find('.directory-hosts').append($(tmp_host));
    });

  $('.person-list').append(tmp_person);
}





// render a HOST
function render_host(host_profiles, host) {
  console.log('render host profiles for ' + host, host_profiles)

  var tmp_host = $('#template-host').clone();
      tmp_host.removeAttr('id');
      tmp_host.find('.host-name').text(host);
  
  tmp_host.find('.host-orgs').html('');

  host_profiles.forEach(function(profile) {
    // console.log('', profile)
    var tmp_org = $('#template-org').clone();
        tmp_org.removeAttr('id');

    // // skip if publish state is false 
    if(profile.system.published == false) {
      return false;
    }

    // console.log('::: rendering: ', item); // , $('.person-list').html());

      // tmp_host.removeAttr('id');
      // tmp_host.find('.person-img').hide(); // no images for now
      tmp_org.find('.directory-person-name').text(profile.name);
      tmp_org.find('.directory-organization').text(profile.org);
      tmp_org.find('.person-role').text(profile.role);

      if( typeof(profile.profiles.twitter) != 'undefined' && profile.profiles.twitter != '') {
        tmp_org.find('.person-twitter a').attr('href','https://twitter.com/' + profile.profiles.twitter.replace(/^@/g,''));
        tmp_org.find('.person-twitter a').text('@' + profile.profiles.twitter.replace(/^@/g,'') );
      }
      if( typeof(profile.profiles.scholar) != 'undefined' && profile.profiles.scholar != '') {
        tmp_org.find('.person-scholar a').attr('href', profile.profiles.scholar);
        tmp_org.find('.person-scholar a').text('Google Scholar' );
      }
      if( typeof(profile.profiles.researchgate) != 'undefined' && profile.profiles.researchgate != '') {
        console.log('researchgate jess')
        tmp_org.find('.person-researchgate a').attr('href', profile.profiles.researchgate);
        tmp_org.find('.person-researchgate a').text('ResearchGate' );
      }
      if( typeof(profile.profiles.orcid) != 'undefined' && profile.profiles.orcid != '') {
        tmp_org.find('.person-orcid a').attr('href', 'http://orcid.org/'+profile.profiles.orcid);
        tmp_org.find('.person-orcid a').text(profile.profiles.orcid);
      }

      // tmp_org.find('.person-org-pi').text(profile.pi);
      console.log(profile.pi, tmp_org.find('.person-org-pi'));
      profile.pi != '' ? tmp_org.find('.person-org-pi').text(profile.pi) : tmp_org.find('.person-org-pi').hide();

    tmp_host.find('.host-orgs').append(tmp_org);
  });
  $('.host-list').append(tmp_host);

}


// add other stuff to phages
function phage_process(phage_str) {
  // console.log('process: ' + phage_str, /\(.*?\)/g.test(phage_str))
  return phage_str.replace(/\(.*?\)/g,"<span class='variant'>$&</span>");
  // return phage_str.replace(/\(.*?\)/g,"<span class='var'"+/\(.*?\)/g+"</span>");
  // find variants and add a span around them
  // phage_arr.forEach(function(phage,i){
    // phage_arr[i] = phage.replace(/\(.*?\)/g,"<span class='var'"+/\(.*?\)/g+"</span>")
    // console.log('>> ', phage_arr[i])
  // });
}





function convert_hosts(data) {
  /*
    this setup will have duplicate profiles but that's ok
    in future these will be references to an index

    phages = {
      "Phage name": [profile, profile, profile]
    }
  */
  var phages = {};
  data.forEach(function(profile) {
    // look through phages, add the profile to phages obj
    // if !exist add profile to a new phages obj
  // console.log('host convert data: ', convert_item(profile))
    if(profile.system.published != false) {
      profile.phages.forEach(function(phage) {
        // console.log('convert_hosts profile:', profile)
        if(typeof(phages[phage]) != 'undefined') {
          phages[phage].push(profile) // have to convert data from
        } else {
          phages[phage] = [profile];
        }
      });
    }
    // deprecated: building a unique array
    // can be used for testing
    // if(profile.system.published != false) {
    //   phages = _.union(phages, profile.phages);
    // }
  })
  return phages;
}

















// 
//      HELPERS
// 


// convert data for the site
// strip private stuff
// make copyable
// return json obj of array of item objects
function convert_profile(item) {
  var item_data = {
    timestamp: item[0],
    name: item[2],
    role: item[3],
    org: item[4],
    pi: item[5], 
    profiles: {
      twitter: item[6],
      scholar: '',
      orcid: '',
      researchgate: '',
    },
    phages: phageSplit(item[8]), // break down by ',' to array
    system: {
      published: true,
      notes: '',
    } 
  }
  if (item[7] !== '') {
    item_data.system['profile_str'] = item[7];
  }
}
function convert(data_raw) {
  // console.log('... converting ...')
  var data_array = [];
  // console.log('...converting...', data_raw);


  // check for duplicates against data_site
  // - goal is to preserve notes, changes, edits, etc.


  // convert array / csv values to real obj
  // NEW OBJECTS ONLY
  // 0 is metadata
  /*

    0:"Timestamp"
    1:"Username"
    2:"Full Name"
    3:"Role or Position"
    4:"Organization"
    5:"Principal Investigator"
    6:"Twitter Handle"
    7:"Scholar Profiles"
    8:"Bacterial pathogens for which you could provide phages"
  */
  for(i=1; i<data_raw.length; i++) {
    
    // var item = data_raw[i];
    data_array.push(convert_profile(data_raw[i]));
  }
  return {raw: data_array};
}
function phageSplit(phage_str) {
  return $.map(phage_str.split(','), $.trim);
}

// merge data data
function merge(data_raw, data_site) {
  // elimitate dupes using timestamp
  // console.log('merge: ', data_raw, data_site);

  // data_output.splice(0, 1); // get rid of the first line
  for(i=1; i<data_raw.length; i++) {
    // first item in data is always timestamp
    data.raw.forEach(function(item) {
      if (item.timestamp == data_raw[i][0]) {
        // console.log('dupe found: ', data_raw[i][0] );
        // data_raw = data_raw.slice(0,i) + data_raw.slice(i+1,data_raw.length);
        data_raw.splice(i, 1);
      }
    });
      
  }
  var data_converted = convert(data_raw);
  data_site.raw = data_site.raw.concat(data_converted.raw);
  // console.log('convert: ', data_converted, data_site);
  output(JSON.stringify(data_site, null, 3));
  render_raw(data_site);
  // join converted data w/ data_site

}


