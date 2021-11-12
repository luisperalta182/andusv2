import React from "react";
import { graphql, StaticQuery } from "gatsby";

/*css*/
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';


const aboutContent = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressPage(filter: {title: {eq: "About"}}) {
              edges {
                node {
                  id
                  acf {
                    about_section {
                      about_heading
                      about_one
                      about_two
                    }
                  }
                }
              }
            }
        }
        `} render={props => (
            <Container className="aboutComponentApproach">
                <Row>
                    <Col>
                        <div className="aboutHeader">
                            <h1>About<span>*</span></h1>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="aboutContent">
                            <p className="headingAboutContent">{ props.allWordpressPage.edges[0].node.acf.about_section.about_heading}</p>
                            <div className="dividerAbout" />
                            <p>{ props.allWordpressPage.edges[0].node.acf.about_section.about_one }</p>
                            <p>{ props.allWordpressPage.edges[0].node.acf.about_section.about_two }</p>
                        </div>
                    </Col>        
                </Row>
            </Container>
        )}>

        </StaticQuery>
    )

}

export default aboutContent;