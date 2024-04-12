'use client'
import React from "react";
/* API */
import { useState } from "react";

/* Components */
import TabButton from "../Atoms/Links/TabButton";
import ReactMarkdown from 'react-markdown';

export default function Tabs({ tabs, defaultContent, title }:
  {
    tabs: {
      title: string,
      content: string
    }[],
    defaultContent: string,
    title: React.ReactNode
  }
) {

  const [activeTab, setActiveTab] = useState(0);
  const [tabOpen, setTabOpen] = useState(false);

  const handleTabChange = (index: number) => {
    setTabOpen(index === activeTab ? !tabOpen : true);
    setActiveTab(index);
  }

  const TabButtons = tabs.map((tab, index) => {
    const active = tabOpen && activeTab === index || !tabOpen;
    const ariaCurrent = activeTab === index && tabOpen ? 'page' : undefined;
    return (
      <TabButton
        key={index}
        delay={index * 0.25}
        role="tab"
        id={`tab-${index}`}
        aria-current={ariaCurrent}
        aria-controls={`tab-${index}`}
        active={active}
        onClick={() => handleTabChange(index)}
      >{tab.title}</TabButton>
    );
  });

  const contentClassName = 'prose prose-slate dark:prose-invert mr-auto text-slate-900 dark:text-slate-200'

  const ActiveTab = () => {
    const tab = tabs[activeTab];
    return (
      <div
        className={contentClassName}
        id={`tab-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        <ReactMarkdown
          components={
            { a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" /> }
          }>{tab.content}</ReactMarkdown>
      </div>
    )
  }


  const NonActiveTab = () => {
    return (
      <ReactMarkdown className={contentClassName}>{defaultContent}</ReactMarkdown>
    )
  }

  return (
    <>
      {title}
      <div className="md:grid md:grid-cols-3" role="tablist">
        <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-3 md:gap-0 items-start md:items-end pr-5 mb-3">
          {TabButtons}
        </div>
        <div className="md:col-span-2">
          {tabOpen ? <ActiveTab /> : <NonActiveTab />}
        </div>
      </div>
    </>
  )
}
