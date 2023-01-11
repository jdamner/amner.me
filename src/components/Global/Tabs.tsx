import { useState } from "react";
import { event } from "../../api/Insights";

import type { post } from "../../types/post.type";

import TabButton from "../Links/TabButton";
import Title from "./Title";
import parse from 'html-react-parser';
import Html from "./Html";


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
    return (
      <TabButton
        key={index}
        index={index}
        name={tab.title}
        active={active}
        onClick={() => handleTabChange(index)}
      />
    );
  });

  const ActiveTab = () => {
    const tab = tabs[activeTab];
    return (
      <Html content={tab.content} className="mr-auto prose" />
    )
  }


  const NonActiveTab = () => {
    return (
      <Html content={content} className="mr-auto prose" />
    )
  }

  return (
    <div className="container mx-auto my-5 py-5 px-3 md:px-0">
      <Title title={'Techincal Skills'}>Web Development</Title>
      <div className="md:grid md:grid-cols-3">
        <div className="flex flex-row md:flex-col items-start md:items-end pr-4 mr-3 mb-3 md:mb-0">
          {TabButtons}
        </div>
        <div className="col-span-2">
          {tabOpen ? <ActiveTab /> : <NonActiveTab />}
        </div>
      </div>
    </div>
  )
}
