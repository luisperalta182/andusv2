import React, { useEffect } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

/* animation libraries */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProgressBar } from 'scrolling-based-progressbar';

/*css*/
import { Image } from 'react-bootstrap';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const ArticlesHome = () => {

    useEffect(() => {

        const sections = gsap.utils.toArray(".horizontal")

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-area",
                pin: true,
                scrub: 1,
                end: () => "+=" + document.querySelector(".horizontal-area").offsetWidth
            }
        })	
	}, [])

    return(
        <StaticQuery query={graphql`
        {
            allWordpressPost(limit: 5) {
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
          
        `} render={props => (
            <>
                <ProgressBar height="9px"
                    ContainerStyle={{backgroundColor:'#000',bottom:'0',top:'none'}} 
                    ProgressBarStyle={{backgroundColor:'#F9DA49'}} />

                <div className="horizontal-area homeArticles desktopArticles">
                    <section className="horizontal headingPost">
                        <div className="">
                            <h1>They say sharing is caring, right? We create articles to help give you insight and inspiration.</h1>
                            <div className="divider" />
                            <p>As a Digital Creative Agency, we help our partners take their next step through our capabilities — structured step-by-step engagements.</p>	
                        </div>							
                    </section>

                    {props.allWordpressPost.edges.map(postWp => (
                        <section className="horizontal" key={postWp.node.id} > 
                            <Link to={ postWp.node.slug }>
                                <div className="horizontalPost" >
                                    <div>
                                        <Image src={ postWp.node.featured_media.source_url } fluid  alt="Thumbnail" />
                                        <div className="infoPost">
                                            <ul>
                                            { 
                                                postWp.node.categories.map( category => (
                                                    <li key={category.id} dangerouslySetInnerHTML={{__html: category.name }} />
                                            ))}
                                            </ul>	
                                            <p className="" dangerouslySetInnerHTML={{__html: postWp.node.title }} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </section>
                    ))}

                </div>
            </>       
        )}>

        </StaticQuery>
    )

}

export default ArticlesHome;