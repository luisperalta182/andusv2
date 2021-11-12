import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

/*css*/
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';


const approachHome = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressPage(filter: {title: {eq: "Home"}}) {
              edges {
                node {
                  id
                  acf {
                    approach_section {
                      home_approach_one
                      home_approach_one_bolded
                      home_approach_two
                    }
                  }
                }
              }
            }
        }
        `} render={props => (
            <div className="whiteBg">
                <Container className="approachComponent">
                    <Row>
                        <Col>
                            <div className="approachHeader">
                                <h1>Approach<span>*</span></h1>
                            </div>
                        </Col>        
                    </Row>
                    <Row>
                        <Col md={{ span: 9, offset: 1 }}>
                            <div className="approachContent">
                                <p>{ props.allWordpressPage.edges[0].node.acf.approach_section.home_approach_one } <span>{ props.allWordpressPage.edges[0].node.acf.approach_section.home_approach_one_bolded }</span> </p>
                                <p>{ props.allWordpressPage.edges[0].node.acf.approach_section.home_approach_two }</p>
                            </div>
                        </Col>        
                    </Row>
                    <Row>
                        <Col md={{ span: 9, offset: 1 }}>
                            <Link className="mainButtonBlack" to="/approach/">
                            View all
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )}>

        </StaticQuery>
    )

}

export default approachHome;