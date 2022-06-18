import React, { Fragment } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Title from "../Global/Title";
import { motion, AnimatePresence } from "framer-motion";

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
                            publicURL
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

                    const active = tabOpen && activeTab === edge.node.id;

                    const file = frontmatter.thumbnail ? getImage(frontmatter.thumbnail) : null;
                    var image = null;
                    if (file) {
                      image = <GatsbyImage image={file} alt={frontmatter.title} objectFit={'contain'} />;
                    } else if(frontmatter.thumbnail) {
                      image = <img src={frontmatter.thumbnail.publicURL} alt={frontmatter.title} />;
                    }

                    return (
                        <Fragment key={edge.node.id}>
                        <TabButton
                            key={edge.node.id}
                            name={frontmatter.title}
                            image={image}
                            active={active}
                            index={edge.node.id}
                            onClick={() => handleTabChange(edge.node.id)}
                        />
                        <div className="tab-content-wrapper">
                            <AnimatePresence exitBeforeEnter>
                            {active ? 
                            <motion.div className="tab-content" 
                              key={edge.node.id}
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              transition={{ duration: 0.5 }}>
                                <TabContent tab={edge.node.childrenMarkdownRemark[0]} />
                              </motion.div> : null}
                            </AnimatePresence>
                        </div>
                        </Fragment>
                    );
                })

                return (
                    <div className="tab">
                        <Title text={"Special Skills"} />
                        <div className="tab-buttons-wrapper">
                            {TabButtons}
                        </div>
                    </div>
                )
            }
            }
        />
    )
}
