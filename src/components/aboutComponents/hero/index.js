import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Marquee from 'react-double-marquee';

/*images*/
import  logo from '../../../images/logo-pages.png';

/*css*/
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';


const heroAbout = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressPage(filter: {title: {eq: "About"}}) {
                edges {
                node {
                    id
                    acf {
                    hero_section {
                        hero_tagline_one
                        hero_tagline_two
                        hero_tagline_yellow
                    }
                    }
                }
                }
            }
        }
        `} render={props => (
            <div>
            <Container className="heroComponent">
                <Row>
                    <Col>
                        <div className="heroHeader">
                            <div className="heroLogoContainer">
                                <img className="heroLogo" src={logo} alt="&US" />   
                            </div>
                            <h1>Digital Creative Agency<span>*</span> </h1>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} >
                        <div className="Tagline">
                            <h2>{ props.allWordpressPage.edges[0].node.acf.hero_section.hero_tagline_one }</h2>
                            <h2><strong>{ props.allWordpressPage.edges[0].node.acf.hero_section.hero_tagline_two }</strong> <span>{ props.allWordpressPage.edges[0].node.acf.hero_section.hero_tagline_yellow}</span></h2> 
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="no-pad">
                <div className="heroImages about">
                    <div className="heroMarquee"
                        style={{
                            width: '100%',
                            whiteSpace: 'nowrap',
                        }}
                        >
                        <Marquee direction="left" speed={0.2}>
                            SUBSCRIPTION<span className="yellowText">*</span>AGENCY SUBSCRIPTION<span className="yellowText">*</span>AGENCY SUBSCRIPTION<span className="yellowText">*</span>AGENCY SUBSCRIPTION<span className="yellowText">*</span>AGENCY SUBSCRIPTION<span className="yellowText">*</span>AGENCY SUBSCRIPTION<span className="yellowText">*</span>AGENCY 
                        </Marquee>
                    </div>
                </div>
            </Container>
        </div>
        )}>

        </StaticQuery>
    )

}

export default heroAbout;