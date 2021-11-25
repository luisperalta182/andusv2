import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import SiteInfo from '../siteInfo'

const MainMenu = () => (
    <StaticQuery query = {graphql`
    {
        allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Main Menu"}}) {
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
        <div>
            <div>
                <SiteInfo />
            </div>
            <div>
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>(
                    <Link to={`/${item.object_slug}`} key={item.title}>
                        {item.title}
                    </Link>   
                ))}
            </div>
        </div>
    )} />
);

export default MainMenu;