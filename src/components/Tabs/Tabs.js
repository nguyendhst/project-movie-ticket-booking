import React, { useState } from "react";
import "./Tabs.css";

import Button from "react-bootstrap/esm/Button";

function Tabs({tabs = [], editable = false }) { 
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    // const [filmListState, setFilmListState] = useState(tabs[activeTabIndex].content)


    const activateTab = (index) => {
            setActiveTabIndex(index);
    }

    console.log(tabs[activeTabIndex].content[0].props.deleted)
    return(
        <div className="Tabs">
                {Object.keys(tabs).length === 0 ?
                    <div> No Tabs</div>
                :    
                    (
                    <>
                    <div className="Tab">
                        {
                            
                            tabs.map((tab, index) => (
                                <Button
                                    key = {index}
                                    className={index === activeTabIndex ? "tab-btn active-tab-btn" : "tab-btn"}
                                    onClick={() => activateTab(index)}
                                >
                                    {tab.name}
                                </Button>
                        ))}
                    </div>
                    <div className="TabContent overflow-auto">

                        {tabs[activeTabIndex].content}
                    </div>
                    </>
                )}
        </div>
    )
}

export default Tabs;