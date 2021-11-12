import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

/*css*/
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';


const aboutHome = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressPage(filter: {title: {eq: "Home"}}) {
              edges {
                node {
                  id
                  acf {
                    about_section {
                      home_about_one
                      home_about_two
                    }
                  }
                }
              }
            }
        }
        `} render={props => (
            <div>
                <Container className="aboutComponent">
                    <Row>
                        <Col>
                            <div className="aboutHeader">
                                <h1>About<span>*</span></h1>
                            </div>
                        </Col>        
                    </Row>
                    <Row>
                        <Col md={{ span: 9, offset: 1 }}>
                            <div className="aboutContent">
                                <p>{ props.allWordpressPage.edges[0].node.acf.about_section.home_about_one}</p>
                                <p>{ props.allWordpressPage.edges[0].node.acf.about_section.home_about_two}</p>
                            </div>
                        </Col>        
                    </Row>
                    <Row>
                        <Col md={{ span: 9, offset: 1 }}>
                            <Link className="mainButton" to="/about/">
                                Get to know us
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )}>

        </StaticQuery>
    )

}

export default aboutHome;