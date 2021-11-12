import React, { useEffect } from "react";
import { graphql, StaticQuery } from "gatsby";

/* animation libraries */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/*css*/
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {

    gsap.registerPlugin(ScrollTrigger );

    useEffect(() => {
        
        var points = gsap.utils.toArray('.point');
        var indicators = gsap.utils.toArray('.indicator');
        
        var height = 100 * points.length;
        
        gsap.set('.indicators', {display: "flex"});
        
        var tl = gsap.timeline({
          duration: points.length,
          scrollTrigger: {
            trigger: ".philosophie",
            start: "top center",
            end: "+="+height+"%",
            scrub: true,
            id: "points",
          }
        })
        
        var pinner = gsap.timeline({
          scrollTrigger: {
            trigger: ".philosophie .wrapper",
            start: "top top",
            end: "+="+height+"%",
            scrub: true,
            pin: ".philosophie .wrapper",
            pinSpacing: true,
            id: "pinning",
            markers: false
          }
        })
        
        
        
        points.forEach(function(elem, i) {
          gsap.set(elem, {position: "absolute", top: 0});
        
          tl.to(indicators[i], {backgroundColor: "#fff", duration: 0.25}, i)
          tl.from(elem.querySelector('.numberScrolling'), {autoAlpha:0}, i)
          tl.from(elem.querySelector('.contentScrolling'), {autoAlpha:0, translateY: 100}, i)
          
          if (i != points.length-1) {
            tl.to(indicators[i], {backgroundColor: "#fff", duration: 0.25}, i+0.75)
            tl.to(elem.querySelector('.contentScrolling'), {autoAlpha:0, translateY: -100}, i + 0.75)
            tl.to(elem.querySelector('.numberScrolling'), {autoAlpha:0}, i + 0.75)
          }
          
        });        

	})


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
            <div className="processComponent whiteBg">
                <Container>
                    <section className="processSection">
                        <Row>
                            <Col>
                                <div className="processHeaderDiv">
                                    <h1>Core Values<span>*</span></h1>
                                </div>
                            </Col>        
                        </Row>
                    </section>
                    <section className="philosophie">
                        <div className="wrapper">
                            <div className="indicators">
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                                <div className="indicator"></div>
                            </div>
                            <div className="point">
                                <div className="numberScrolling">
                                        <span className="whiteColor">01</span> <span>04</span>
                                </div>
                                <div className="contentScrolling">
                                    <p>
                                        As a team, we’re design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution.
                                    </p>
                                </div>
                            </div>
                            <div className="point">
                                <div className="numberScrolling">
                                        <span className="whiteColor">02</span> <span>04</span>
                                </div>
                                <div className="contentScrolling">
                                    <p>
                                        As a team, we’re design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution.
                                    </p>
                                </div>
                            </div>
                            <div className="point">
                                <div className="numberScrolling">
                                        <span className="whiteColor">03</span> <span>04</span>
                                </div>
                                <div className="contentScrolling">
                                    <p>
                                        As a team, we’re design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution.
                                    </p>
                                </div>
                            </div>
                            <div className="point">
                                <div className="numberScrolling">
                                        <span className="whiteColor">04</span> <span>04</span>
                                </div>
                                <div className="contentScrolling">
                                    <p>
                                        As a team, we’re design-focused across every touchpoint or interaction. Everything we do and dream up has a solid design impact. We get up and go in the morning, supercharged to make a difference with design as a top-of-mind solution.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
            </div>
        )}>

        </StaticQuery>
    )

}

export default CoreValues;