import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

/*css*/
import { Container, Row, Col, Image } from 'react-bootstrap';
import './style.scss';


const partnersItems = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressPage(filter: {title: {eq: "Home"}}) {
                edges {
                    node {
                    id
                    acf {
                        partners_section {
                        partners_heading
                        partners_heading_bold
                        }
                    }
                    }
                }
            }
            allWordpressWpPartners {
                edges {
                    node {
                    acf {
                        partner_cpt {
                        partner_field
                        partner_name
                        partner_image {
                            id
                            source_url
                          }
                        }
                    }
                    id
                    title
                    }
                }
            }
        }
        `} render={props => (
            <div className="whiteBg">
                <Container className="partnersComponent">
                    <Row>
                        <Col>
                            <div className="partnersHeader">
                                <h1>The Partners<span>*</span></h1>
                            </div>
                        </Col>        
                    </Row>
                    <Row>
                        <Col md={{ span: 9, offset: 1 }}>
                            <div className="partnersContent">
                                <p>Say hello to some of our value-based partners. </p>
                            </div>
                        </Col>

                        {props.allWordpressWpPartners.edges.map(partnerItem => (
                            <Col key={partnerItem.node.id} md={{ span: 9, offset: 1 }}>
                                <Link className="rowPartners" >
                                    <p className="partnerName">{ partnerItem.node.acf.partner_cpt.partner_name }</p>
                                    <p className="partnerField">{ partnerItem.node.acf.partner_cpt.partner_field } </p>
                                </Link>
                                <div className="hoverImage"><Image src={ partnerItem.node.acf.partner_cpt.partner_image.source_url }  fluid /></div>
                                <div className="bgHover"></div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )}>

        </StaticQuery>
    )

}

export default partnersItems;