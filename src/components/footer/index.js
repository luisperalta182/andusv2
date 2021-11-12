import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

/*images*/
import  logo from '../../images/logo-pages-black.png';


/*css*/
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';


const partnersItems = () => {
    return(
        <StaticQuery query={graphql`
        {
            allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Footer Menu"}}) {
              edges {
                node {
                  name
                  items {
                    title
                    object_slug
                  }
                }
              }
            }
        }
        `} render={props => (
            <footer className="footer whiteBg">
                <Container className="heroComponent">
                    <Row>
                        <Col>
                            <div className="heroHeader">
                                <div className="heroLogoContainer">
                                    <img className="heroLogo" src={logo} alt="&US" />   
                                </div>
                                <h1>Contact Us<span>*</span> </h1>
                            </div>
                        </Col>        
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col md={{ span: 9, offset: 1 }}>
                            <div className="widgetFooter">
                                <p className="footer__sidebar-one footer-widget">
                                    Starting a new project or want to partner up
                                    with us? We’d love that.
                                </p>
                            </div>
                        </Col>
                    </Row>	
                    <Row>
                        <Col md={{ span: 9, offset: 1 }}>
                            <Link className="mainButtonBlack" to="/approach/">
                            Plan a project
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 10, offset: 1 }}>
                            <div className="footerNavigation">
                                <div className="footerCol one">
                                    <Link className="footerLink" to="mailto:partner@andus.agency">
                                        partner@andus.agency
                                    </Link>
                                    <Link className="footerLink" to="tel:209-59-8291">
                                        209-59-8291
                                    </Link>
                                </div>
                                <div className="footerCol two">
                                    <ul>
                                        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                                            <li key={item.title}>
                                                <Link className="header-nav__menu-link" to={`/${item.object_slug}`}>
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* <ul className="social-links">
                                        { socialLinks.map( socialLink => (
                                            <li key={ socialLink.iconName }>
                                                <a href={ socialLink.iconUrl } target="_blank" rel="noreferrer">
                                                    Facebook
                                                </a>
                                            </li>
                                        ) ) }
                                    </ul> */}
                                    {/* <div className="copyright-text">{ copyrightText }</div> */}
                                </div>		
                            </div>
                        </Col>
                    </Row>	
                </Container>
            </footer>
        )}>

        </StaticQuery>
    )

}

export default partnersItems;