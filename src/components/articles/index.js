import React, { useRef, useEffect, useState  } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

/* animation libraries */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProgressBar } from 'scrolling-based-progressbar';

/*css*/
import { Image } from 'react-bootstrap';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const Articles = () => {

    // const { data } = dataQuery;
	// const [currentData, setCurrentData] = useState([]);

	// const scrollRef = useRef(true);
		
	// useEffect(() => {
	// 	setCurrentData(data);
	// }, [])

	// if (typeof window !== "undefined") {
	// 	gsap.registerPlugin(ScrollTrigger); 
	// }

	// const filterByCategory = (categoryName) =>{
	// 	if (categoryName === "All"){
	// 		setCurrentData(data);
	// 		return;
	// 	}

	// 	const newData = data.filter(item => item.categories.edges.some(category => category.node.name === categoryName));
	// 	setCurrentData(newData);
	// }


    return(
        <StaticQuery query={graphql`
        {
            allWordpressPost{
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
                {/* { currentData.length > 0 &&  */}
                    <div className="">
                        <ProgressBar height="9px"
                            ContainerStyle={{backgroundColor:'#000',bottom:'0',top:'none'}} 
                            ProgressBarStyle={{backgroundColor:'#F9DA49'}} />

                                <section className="headingPost">
                                    <div className="">
                                        <h1>They say sharing is caring, right? We create articles to help give you insight and inspiration.</h1>
                                        <div className="divider" />
                                        <p>As a Digital Creative Agency, we help our partners take their next step through our capabilities — structured step-by-step engagements.</p>
                                    
                                        {/* <div className="filters">
                                            <button onClick={()=> filterByCategory("Insights")}>Insights</button>								
                                            <button onClick={()=> filterByCategory("Inspiration")}>Inspirations</button>
                                            <button onClick={()=> filterByCategory("Uncategorized")}>Uncategorized</button>

                                            <button onClick={()=> filterByCategory("All")}>All</button>
                                        </div>	 */}
                                    </div>							
                                </section>

                                <section className="postSection">
                                    <div className="flexContainer">
                                        {
                                            props.allWordpressPost.edges.map(postWp => (
                                                    <section className="horizontal" key={postWp.node.id} >	
                                                        <Link to={ postWp.node.slug }>	
                                                                <div className="horizontalPost" >
                                                                    <div>
                                                                        <Image src={ postWp.node.featured_media.source_url }  fluid />
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
                                                )
                                            )
                                        }
                                    </div>	
                                </section>
                    </div>
                {/* } */}
            </>       
        )}>

        </StaticQuery>
    )

}

export default Articles;