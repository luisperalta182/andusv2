import React, { useContext } from "react";
import { graphql, StaticQuery, Link } from "gatsby";
import { MenuContext } from "../menuManager";
import { Facebook, Instagram, Youtube, Dribbble, Twitch } from "react-feather";
import cn from "classnames";

import "./style.scss";

const MenuContent = () => {
  const { open } = useContext(MenuContext);

  return(
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
      <div className="menu-holder">
        <div className={cn("menu-inside", { open })}>
          <div className="menu-nav-container">
            <ul className="internal-nav-links">
              {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>(
                  <li key={item.title}>
                    <Link to={`/${item.object_slug}`}>
                          {item.title}
                    </Link>   
                  </li>
              ))}
            </ul>
            <div className="external-nav-links">
              <p className="headerContent">
                California
              </p>
              <p className="contentSmall">
                <span>21040 Pacific City Cir.</span>
                <span>Huntington Beach, CA 92648</span>
              </p>
              <p className="headerContent">
                Florida
              </p>
              <p className="contentSmall">
                <span>1910 N Ola Ave</span>
                <span>Tampa, FL 33602</span>
              </p>
              <p className="headerContent">
                Nicaragua
              </p>
              <p className="contentSmall">
                <span>La Joya Co-Work</span>
                <span>Tola Rivas, Hacienda Iguana</span>
              </p>
              <div className="bottomMenu">
                <ul>
                  <li><a>Awards</a></li>
                  <li><a>Internships </a></li>
                  <li><a>Careers</a></li>
                </ul>
                <ul>
                  <li><a>Inquires </a></li>
                  <li><a>Contact Us </a></li>
                  <li><a>Plan a Project</a></li>
                </ul>
              </div>
              <div className="socialIcons">
                <ul>
                  <li><a>Fb</a></li>
                  <li><a>Ig</a></li>
                  <li><a>In</a></li>
                  <li><a>Be</a></li>
                  <li><a>Terms</a></li>
                  <li><a>Sitemap</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )} />
  )
};

export default MenuContent;