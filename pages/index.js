import { sanityClient, urlFor } from "../libconfig/sanity"
import Link from "next/link"

import {groq} from 'next-sanity'
import getFormattedDate from "../components/util"
const Home = ({properties  }) => {
    console.log(properties)
    return (
        <>
           {properties && (
           <div className="main">
            <div className="feed-container">
      
               {properties.map((post) => (
                <div className="postitem" key={post._id}>
                 <Link href={`post/${post.slug.current}`}>
                  
                  <div key={'Card:' + post._id } className="card">
                  
                   
                    <img src={urlFor(post.mainImage)   } />
                    <hl className="Link1">{post.title}</hl>
                    <p>Publisert dato: {getFormattedDate(post.publishedAt)}</p>
                  
                   <p>{post.ingress}</p>
                    </div>
                </Link>
                </div>
            )) 
            }
         </div>
        </div>
      
        )}
        
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