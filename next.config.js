const client = require('./client')
//import { sanityClient } from "./sanity.js"

module.exports = {
  exportPathMap: async function (defaultPathMap) {
   const paths = await client
    ///const paths = await sanityClient
      .fetch('*[_type == "post" && defined(slug)].slug.current')
      .then(data =>
        data.reduce(
          (acc, slug) => ({
            '/': { page: '/' },
            ...acc,
            [`/post/${slug}`]: { page: '/post/[slug]', query: { slug } }
          }),
          defaultPathMap
        )
      )
      .catch(console.error)
    return paths
  }
}