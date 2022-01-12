const sanityClient = require('@sanity/client')
import {createClient} from 'next-sanity'
//module.exports = sanityClient({
module.exports = createClient({

  projectId: 'qginuabd', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})