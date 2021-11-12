import React from "react";
import { graphql, StaticQuery } from "gatsby";

/*css*/
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';


const aboutContent = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressPage(filter: {title: {eq: "Approach"}}) {
              edges {
                node {
                  id
                  title
                  acf {
                    approach_section {
                      home_about_heading
                      home_about_one
                      home_about_two
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
                            <h1>Approach<span>*</span></h1>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="aboutContent">
                            <p className="headingAboutContent">{ props.allWordpressPage.edges[0].node.acf.approach_section.home_about_heading}</p>
                            <div className="dividerAbout" />
                            <p>{ props.allWordpressPage.edges[0].node.acf.approach_section.home_about_one }</p>
                            <p>{ props.allWordpressPage.edges[0].node.acf.approach_section.home_about_two }</p>
                        </div>
                    </Col>        
                </Row>
            </Container>
        )}>

        </StaticQuery>
    )

}

export default aboutContent;