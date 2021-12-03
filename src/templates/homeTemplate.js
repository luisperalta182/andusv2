import React from "react";
import Layout from "../components/layout";
import PartnersItems from "../components/partners";
import HeroHome from "../components/hero";
import AboutHome from "../components/about";
import ApproachHome from "../components/approach";
import ArticlesHome from "../components/articlesHome";

export default ({pageContext}) => (
    <Layout>
        {/* <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} /> */}
        <HeroHome />
        <AboutHome />
        <ApproachHome />
        <PartnersItems />
        <div className="articlesDesktop"><ArticlesHome /></div>
    </Layout>
);