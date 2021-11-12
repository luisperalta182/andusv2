import React, { useRef, useEffect, useState, Component  } from "react";
import { graphql, StaticQuery, Link } from "gatsby";

/* animation libraries */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProgressBar } from 'scrolling-based-progressbar';

/*css*/
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {

    const {useEffect} = React

	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger); 
	}

	useEffect(() => {
		let sections = gsap.utils.toArray(".horizontal")

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: ".horizontal-area-team",
				pin: true,
				scrub: 1,

				end: () => "+=" + document.querySelector(".horizontal-area-team").offsetWidth
			}
		})
	})

    return(
        <StaticQuery query={graphql`
        {
            allWordpressWpTeam {
              edges {
                node {
                  acf {
                    team_member {
                      name
                      position
                      photo {
                        source_url
                      }
                    }
                  }
                  id
                }
              }
            }
          }
          
        `} render={props => (
            <div className="horizontal-area-team">
                <ProgressBar height="9px"
                    ContainerStyle={{backgroundColor:'#000',bottom:'0',top:'none'}} 
                    ProgressBarStyle={{backgroundColor:'#F9DA49'}} />

                <section className="horizontal headingPost">
                    <div className="horizontalPost">
                        <h1>We’re an international body of people led by a remote lifestyle with an agency approach.</h1>
                        <div className="divider" />
                        <p>Meet some of the leadership and team leads, that run the day-to-day. We also have fancy zoom pics for you to enjoy. Cheers!</p>
                    </div>
                </section>

                {props.allWordpressWpTeam.edges.map(teamItem => (
                    <section className="horizontal" key={teamItem.node.id} >	
                    {
                        <div className="horizontalPost" >
                            <div>
                                <img src={ teamItem.node.acf.team_member.photo.source_url } />
                                <div className="infoPost">
                                    <p className="name">{ teamItem.node.acf.team_member.name }</p>
                                    <p className="position">{ teamItem.node.acf.team_member.position }</p>
                                </div>
                            </div>
                        </div>
                    }
                    </section>
                ))}
            </div>     
        )}>

        </StaticQuery>
    )

}

export default Team;