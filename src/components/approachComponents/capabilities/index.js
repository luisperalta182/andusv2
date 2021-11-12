import React from "react";
import { graphql, StaticQuery } from "gatsby";

/*css*/
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';


const Capabilities = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressPage(filter: {title: {eq: "Approach"}}) {
              edges {
                node {
                  id
                  acf {
                    capabilities_section {
                      capabilities_heading
                      capabilities_text
                    }
                  }
                }
              }
            }
        }
        `} render={props => (
            <div className="whiteBg">
                <Container className="capabilitiesSection">
                    <Row>
                        <Col>
                            <div className="capabilitiesHeader">
                                <h1>Capabilities<span>*</span></h1>
                            </div>
                        </Col>        
                    </Row>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <div className="capabilitiesContent">
                                <p className="headingCapabilitiesContent">{ props.allWordpressPage.edges[0].node.acf.capabilities_section.capabilities_heading }</p>
                                <div className="divider" />
                                <p>{ props.allWordpressPage.edges[0].node.acf.capabilities_section.capabilities_text }</p>
                            </div>
                        </Col>        
                    </Row>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <div className="capabilitiesTable">
                                <p className="capabilitiesTableHeader">Strategy</p>
                                <div className="divider" />
                                <div className="capabilitiesTableContent">
                                    <ul>
                                        <li><p>Research & Discovery</p></li>
                                        <li><p>Site & Product Architecture</p></li>
                                        <li><p>Consultation</p></li>
                                    </ul>
                                    <ul>
                                        <li><p>UI / UX Strategy </p></li>
                                        <li><p>Customer Journey Mapping</p></li>
                                        <li><p>User Testing</p></li>
                                    </ul>
                                    <ul>
                                        <li><p>Competitor Analysis</p></li>
                                        <li><p>Platform SEO & Analytics</p></li>
                                        <li><p>Platform Migration</p></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <div className="capabilitiesTable">
                                <p className="capabilitiesTableHeader">Design</p>
                                <div className="divider" />
                                <div className="capabilitiesTableContent">
                                    <ul>
                                        <li><p>UI/UX Design</p></li>
                                        <li><p>Web Design</p></li>
                                        <li><p>Visual Design</p></li>
                                    </ul>
                                    <ul>
                                        <li><p>Moodboards</p></li>
                                        <li><p>Wireframing </p></li>
                                        <li><p>Prototyping</p></li>
                                    </ul>
                                    <ul>
                                        <li><p>Identity & Branding</p></li>
                                        <li><p>App Design</p></li>
                                        <li><p>Design Systems</p></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <div className="capabilitiesTable">
                                <p className="capabilitiesTableHeader">Development</p>
                                <div className="divider" />
                                <div className="capabilitiesTableContent">
                                    <ul>
                                        <li><p>Website / Web App Development</p></li>
                                        <li><p>Platform-specific Development</p></li>
                                        <li><p>E-commerce Development</p></li>
                                    </ul>
                                    <ul>
                                        <li><p>Headless Development</p></li>
                                        <li><p>Template / Theme Customization</p></li>
                                        <li><p>Custom / Static Websites</p></li>
                                    </ul>
                                    <ul>
                                        <li><p>Native App Development</p></li>
                                        <li><p>Hybrid App Development</p></li>
                                        <li><p>Admins & Dashboards</p></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <div className="capabilitiesTable">
                                <p className="capabilitiesTableHeader">Marketing</p>
                                <div className="divider" />
                                <div className="capabilitiesTableContent">
                                    <ul>
                                        <li><p>Growth Strategy</p></li>
                                        <li><p>PPC Campaigns</p></li>
                                        <li><p>Email Marketing</p></li>
                                    </ul>
                                    <ul>
                                        <li><p>Social Media Marketing</p></li>
                                        <li><p>Launch Strategies</p></li>
                                        <li><p>SEO</p></li>
                                    </ul>
                                    <ul>
                                        <li><p>SEM </p></li>
                                        <li><p>Copy Writing</p></li>
                                        <li><p>Campaigns</p></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )}>

        </StaticQuery>
    )

}

export default Capabilities;