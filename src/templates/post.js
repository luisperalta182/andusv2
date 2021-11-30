import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Marquee from 'react-double-marquee';
import styled from 'styled-components';

import Layout from "../components/layout";
import AboutHome from "../components/about";
import ApproachHome from "../components/approach";
import ArticlesHome from "../components/articlesHome";
import { Link } from "gatsby";

const PostBanner = styled.div`
    background-size: cover;
    height: 708px;
    position: relative;
`


export default ({pageContext}) => (
    <Layout>
        {/* hero */}
        <div className="whiteBg">
            <Container className="heroComponent">
                <Row>
                    <Col>
                        <div className="heroHeader">
                            <div className="heroLogoContainer">
                                <Link className="backButton" to="/articles"></Link> 
                            </div>
                            <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
                        </div>
                    </Col>        
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }} >
                        <div className="Tagline">
                            <h2>{pageContext.acf.articles_hero.title}</h2>
                            <h2>{pageContext.acf.articles_hero.sub_title} <span>{pageContext.acf.articles_hero.sub_title_yellow}</span></h2> 
                        </div>
                    </Col>
                </Row>
            </Container> 
            <Container fluid className="no-pad">
                <PostBanner style={{ backgroundImage:`url(${pageContext.featured_media.source_url})` }}>
                    <div className="heroMarquee"
                        style={{
                            width: '100%',
                            whiteSpace: 'nowrap',
                        }}
                        >
                        <Marquee direction="left" speed={0.2}>
                        PARTNER<span className="yellowText">*</span>APPROACCH PARTNER<span className="yellowText">*</span>APPROACCH PARTNER<span className="yellowText">*</span>APPROACCH PARTNER<span className="yellowText">*</span>APPROACCH PARTNER<span className="yellowText">*</span>APPROACCH PARTNER<span className="yellowText">*</span>APPROACCH 
                        </Marquee>
                    </div>
                </PostBanner>
            </Container>
        </div>   
        {/* hero ends */}
        <AboutHome />
        <ApproachHome />
        <ArticlesHome />
    </Layout>
);