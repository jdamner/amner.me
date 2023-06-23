/* API */
import { useState } from "react";
import { event } from "../../api/Insights";

/* Components */
import TabButton from "../Links/TabButton";
import Title from "./Title";
import ReactMarkdown from 'react-markdown';

/* Types */
import type { post } from "../../types/post.type";

/**
 * Tabs 
 * 
 * @param {tabs: post[], content: string} props
 * @returns  {JSX.Element}
 */
export default function Tabs({ tabs, content }: { tabs: post[], content: string }): JSX.Element {

  const [activeTab, setActiveTab] = useState(0);
  const [tabOpen, setTabOpen] = useState(false);

  const handleTabChange = (index) => {
    event('tab-change', { index, tabOpen });
    setTabOpen(index === activeTab ? !tabOpen : true);
    setActiveTab(index);
  }

  const TabButtons = tabs.map((tab, index) => {
    const active = tabOpen && activeTab === index || !tabOpen;
    const ariaCurrent = activeTab === index && tabOpen ? 'page' : undefined;
    return (
      <TabButton
        key={index}
        role="tab"
        id={ `tab-${index}` }
        aria-current={ariaCurrent}
        aria-controls={`tab-${index}`}
        active={active}
        onClick={() => handleTabChange(index)}
      >{tab.title}</TabButton>
    );
  });

  const contentClassName = 'prose prose-slate dark:prose-invert mr-auto px-3 md:px-0 text-slate-900 dark:text-slate-200'

  const ActiveTab = () => {
    const tab = tabs[activeTab];
    return (
      <div 
        className={contentClassName}
        id={`tab-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        >
      <ReactMarkdown>{tab.content}</ReactMarkdown>
      </div>
    )
  }


  const NonActiveTab = () => {
    return (
      <ReactMarkdown className={contentClassName}>{ content }</ReactMarkdown>
    )
  }

  return (
    <section className="container mx-auto my-5 py-5 px-3 md:px-0" id="services-tabs">
      <Title title={'Techincal Skills'}>Web Development</Title>
      <div className="md:grid md:grid-cols-3" role="tablist">
        <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-3 md:gap-0 items-start md:items-end pr-5 mb-3">
          {TabButtons}
        </div>
        <div className="md:col-span-2">
          {tabOpen ? <ActiveTab /> : <NonActiveTab />}
        </div>
      </div>
    </section>
  )
}
