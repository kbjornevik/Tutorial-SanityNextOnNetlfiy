import {
    createClient, 
    createImageUrlBuilder,
    createPortableTextComponent,
    createPreviewSubscriptionHook,
    createCurrentUserHook,
  } from 'next-sanity'
 import {config} from './config'
  /**
   * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
   * Read more: https://www.sanity.io/docs/image-url
   **/
  export const urlFor = (source) => createImageUrlBuilder(config).image(source)
  // Set up Portable Text serialization
  export const PortableText = createPortableTextComponent({
    ...config,
    // Serializers passed to @sanity/block-content-to-react
    // (https://github.com/sanity-io/block-content-to-react)
    serializers: {},
  })
  // Set up the client for fetching data in the getProps page functions
  export const sanityClient = createClient(config)

  export default sanityClient