import { sanityClient, urlFor } from "../sanity"
import Link from "next/link"
import {groq} from 'next-sanity'
const Home = ({properties  }) => {
    console.log(properties)
    return (
        <>
           {properties && (
           <div className="main">
            <div className="feed-container">
             Hello
               {properties.map((post) => (
                <Link href={`post/${post.slug.current}`}>
                  
                  <div key={post._id} className="card">
                    LINK
                    <hl className="Link1">{post.title}</hl>
                    <img src={urlFor(post.mainImage)
                      } />
                    <p>Publisert dato: {post.publishedAt}</p>
                  
                   <p>Post._id:{post._id}</p>
                    </div>
                </Link>
            )) 
            }
         </div>
        </div>
      
        )}
          <Link href="/Pages/about">About</Link>
      </>
    )
}

const query = groq`*[_type == "post" && publishedAt < now()]|order(publishedAt desc)`;
// NEXT future getServerSideProps or  getInitialProps
export const getServerSideProps = async () => {
    const query = '*[ _type ==  "post" ]'
    const properties = await sanityClient.fetch(query)
  
    if (!properties.length) {
      return {
        props: {
          properties: [],
        },
      }
    } else {
      return {
        props: {
          properties,
        },
      }
    }
  }
export default Home