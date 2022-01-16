const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-03-25',
  
})