import React from "react";
import Layout from "../components/layout";
import AboutHero from "../components/aboutComponents/hero";
import AboutContent from "../components/aboutComponents/about";
import CoreValues from "../components/aboutComponents/coreValues";
import Team from "../components/aboutComponents/team";

export default ({pageContext}) => (
    <Layout>
        {/* <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} /> */}
        <AboutHero />
        <AboutContent />
        <CoreValues />
        <Team />
    </Layout>
);