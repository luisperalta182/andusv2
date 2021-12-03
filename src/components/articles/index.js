import React, { useRef, useEffect, useState  } from "react";
import { graphql, StaticQuery, Link, useStaticQuery } from "gatsby";

/* animation libraries */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProgressBar } from 'scrolling-based-progressbar';

/*css*/
import { Image } from 'react-bootstrap';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const Articles = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const query = useStaticQuery(graphql`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            title
            categories {
              id
              name
            }
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `);
  
  useEffect(() => {
    if (query) setData( selectedCategory === "All" ? query.allWordpressPost.edges : query.allWordpressPost.edges.filter(item => item.node.categories.some(category => category.name === selectedCategory)) );
  }, [query, selectedCategory])


  return(
    <>
      
        <div className="">
          <ProgressBar height="9px" ContainerStyle={{backgroundColor:'#000',bottom:'0',top:'none'}}  ProgressBarStyle={{backgroundColor:'#F9DA49'}} />
          <section className="headingPost">
            <div className="">
              <h1>They say sharing is caring, right? We create articles to help give you insight and inspiration.</h1>
              <div className="divider" />
              <p>As a Digital Creative Agency, we help our partners take their next step through our capabilities — structured step-by-step engagements.</p>
          
              <div className="filters">
                <button onClick={()=> setSelectedCategory("Branding & UI/UX")}>Branding & UI/UX</button>								
                <button onClick={()=> setSelectedCategory("Design")}>Design</button>
                <button onClick={()=> setSelectedCategory("App Development & Development")}>App Development & Development</button>
                <button onClick={()=> setSelectedCategory("Branding")}>Branding</button>
                <button onClick={()=> setSelectedCategory("UI/UX Design,")}>UI/UX Design,</button>

                <button onClick={()=> setSelectedCategory("All")}>All</button>

              </div>	
            </div>							
          </section>


          <section className="postSection">
            <div className="flexContainer">
            { data.length > 0 ?               
                data.map(postWp => (
                  <section className="horizontal" key={postWp.node.id} >	
                    <Link to={ postWp.node.slug }>	
                      <div className="horizontalPost" >
                        <div>
                          <Image src={ postWp.node.featured_media.source_url }  fluid />
                          <div className="infoPost">
                            <ul>
                              { 
                                postWp.node.categories.map(category => (
                                  <li key={category.id} dangerouslySetInnerHTML={{__html: category.name }} />
                                ))
                              }
                            </ul>

                            <p className="" dangerouslySetInnerHTML={{__html: postWp.node.title }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </section>
                ))
                :
              <h1>No posts</h1>
              }
            </div>	
          </section>
        </div>
    </> 
    )   

}

export default Articles;