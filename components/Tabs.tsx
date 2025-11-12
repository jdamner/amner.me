
import React from "react";
/* API */
import { useState } from "react";

/* Components */
import TabButton from "./Atoms/Links/TabButton";

import { useAllServices } from "../utils";
import { font } from "../utils/header-font";

export default function Tabs({
  tabs,
  defaultContent,
  title,
}: {
  tabs: ReturnType<typeof useAllServices>;
  defaultContent: React.ReactNode;
  title: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [tabOpen, setTabOpen] = useState(false);

  const handleTabChange = (index: number) => {
    setTabOpen(index === activeTab ? !tabOpen : true);
    setActiveTab(index);
  };

  const TabButtons = tabs.map((tab, index) => {
    const active = tabOpen && activeTab === index;
    const ariaCurrent = activeTab === index && tabOpen ? "page" : undefined;
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
      >
        {tab.data.title}
      </TabButton>
    );
  });

  const contentClassName = "prose mr-auto text-black";

  function ActiveTab() {
    const tab = tabs[activeTab];
    return (
      <div
        className={contentClassName}
        id={`tab-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        <h3 className="text-3xl font-bold mb-5 uppercase" style={font.style}>
          {tab.data.title}
        </h3>
        <tab.content />
      </div>
    );
  }

  function NonActiveTab() {
    return <div className={contentClassName}>{defaultContent}</div>;
  }

  return (
    <div className="flex flex-col pt-5 lg:pt-0 lg:flex-row justify-between">
      <div className="mt-5 px-3 md:px-0">{title}</div>
      <div
        className="md:grid md:grid-cols-3 bg-orange-100 h-full py-5 px-3"
        role="tablist"
      >
        <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-3 md:gap-0 items-start md:items-end pr-5 mb-3">
          {TabButtons}
        </div>
        <div className="md:col-span-2">
          {tabOpen ? <ActiveTab /> : <NonActiveTab />}
        </div>
      </div>
    </div>
  );
}
