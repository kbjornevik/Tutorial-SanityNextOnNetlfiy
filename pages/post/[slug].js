//import groq from 'groq'
import {groq} from 'next-sanity'

import { createImageUrlBuilder,
    createPortableTextComponent,
    createPreviewSubscriptionHook,
    createCurrentUserHook
         } from 'next-sanity'
import BlockContent from '@sanity/block-content-to-react'
import Image from "../../components/images"
import getFormattedDate from "../../components/util"
import client from '../../client'
import {PortableText,urlFor,sanityClient } from "../../sanity"
//import imageUrlBuilder from '@sanity/image-url'
//import BlockContent from '@sanity/block-content-to-react'

//function urlFor (source) {   return createImageUrlBuilder(client).image(source)}

const Post = (props) => {
 
  const {
    title = 'Missing title',
    name = 'Missing name',
    publishedAt,
    authorImage,
    mainImage,
    body = [],
  
  } = props
  const sPublishedAt = getFormattedDate(publishedAt);
  console.log("date...:",sPublishedAt)
  console.log("Props body...:",props.body)
  return (
    <div className="container">
      <h1>{title}</h1>
      <img src={urlFor(mainImage).url()}  className="main"/>
      <div className="author-flex-container ">
        {authorImage && (
          <div className="itemAuthor">
            <img className="image-author" 
              src={urlFor(authorImage).url()}
            />
          
          </div>
        )}
        <div>By .: {name}</div>
        <div>Date: {sPublishedAt}</div>
        
      </div>
   

      <BlockContent
        blocks={body}s
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
      <div>
      <PortableText blocks={body} />
      </div>
  
      </div>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  mainImage,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
   body
}`

// getInitialProps is part of the next library 
// Enables server-side rendering in a page and allows you to do initial data population, it means sending the page with the data already populated from the server.

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  console.log("Start-----------getInitialProps")
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
  //const data = await client.fetch(query, { slug })
 // console.log("getInitialProps",data)
  // return{data}

}

export default Post