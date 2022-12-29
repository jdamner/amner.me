import React, { Fragment } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import Title from "../Global/Title";
import { event } from "../../api/insights";

export default function Tabs({ tabs }) {

  if (!tabs) return null;

  const [activeTab, setActiveTab] = React.useState(0);
  const [tabOpen, setTabOpen] = React.useState(false);

  const handleTabChange = (index) => {
    event('tab-change', { index, tabOpen });
    setTabOpen(index === activeTab ? !tabOpen : true);
    setActiveTab(index);
  }

  const TabButtons = tabs.map((tab, index) => {
    const active = tabOpen && activeTab === index;
    return (
      <Fragment key={index}>
        <TabButton
          key={index}
          name={tab.title}
          active={active}
          index={index}
          onClick={() => handleTabChange(index)}
        />
        <div className='tab-content-divider' />
        <div className="tab-content-wrapper">
          {active ?
            <div className="tab-content"
              key={index}>
              <TabContent tab={tab} />
            </div> : null}
        </div>
      </Fragment>
    );
  });

  return (
    <div className="tab">
      <Title text={"Special Skills"} />
      <div className="tab-buttons-wrapper">
        {TabButtons}
      </div>
    </div>
  )
}
