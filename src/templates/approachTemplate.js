import React from "react";
import Layout from "../components/layout";
import HeroApproach from "../components/approachComponents/hero";
import AboutContent from "../components/approachComponents/about";
import Capabilities from "../components/approachComponents/capabilities";
import Process from "../components/approachComponents/process";

export default ({pageContext}) => (
    <Layout>
        <HeroApproach />
        <AboutContent />
        <Capabilities />
        <Process />
    </Layout>
);