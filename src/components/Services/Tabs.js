import React from "react";
import Seperator from "../Global/Seperator";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Tabs() {

    const [activeTab, setActiveTab] = React.useState(0);
    const [tabOpen, setTabOpen] = React.useState(false);

    const handleTabChange = (index) => {
        setTabOpen(index === activeTab ? !tabOpen : true);
        setActiveTab(index);
    }

    return (
        <StaticQuery
            query={graphql`
            query MyQuery {
                allFile(filter: {sourceInstanceName: {eq: "services"}}) {
                  edges {
                    node {
                      id
                      childrenMarkdownRemark {
                        frontmatter {
                          title
                          thumbnail {
                            childImageSharp {
                              gatsbyImageData(
                                width: 200
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                              )
                            }
                          }
                        }
                        html
                      }
                    }
                  }
                }
              }`}
            render={data => {
                const { allFile } = data;
                const TabButtons = allFile.edges.map(edge => {

                    const { frontmatter } = edge.node.childrenMarkdownRemark[0];
                    if (!frontmatter) {
                        return null;
                    }

                    const file = frontmatter.thumbnail ? getImage(frontmatter.thumbnail) : null;
                    console.log(file, frontmatter);
                    const image = file ? <GatsbyImage image={file} alt={frontmatter.title} objectFit={'contain'} /> : null;
                    

                    return (
                        <TabButton
                            key={edge.node.id}
                            name={frontmatter.title}
                            image={image}
                            active={tabOpen && activeTab === edge.node.id}
                            index={edge.node.id}
                            onClick={() => handleTabChange(edge.node.id)}
                        />
                    );
                })

                const active = allFile.edges.find(edge => edge.node.id === activeTab)
                const tab = active ? active.node.childrenMarkdownRemark[0] : null;


                return (
                    <div className="tab">
                        <div className='blog-wrap-title'>
                            <Seperator />
                            <h2>Special Skills</h2>
                            <Seperator modifier='rotate' />
                        </div>
                        <div className="tab-buttons-wrapper">
                            {TabButtons}
                        </div>
                        <div className="tab-content-wrapper">
                            {tabOpen ? <TabContent tab={tab} /> : null}
                        </div>
                    </div>
                )
            }
            }
        />
    )
}