import React, { useState } from "react";
import "./Tabs.css";

import Button from "react-bootstrap/esm/Button";

function Tabs({tabs = [], editable = false }) { 
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    
    const activateTab = (index) => {
            setActiveTabIndex(index);
    }

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
                    <div className="TabContent">
                        {tabs[activeTabIndex].content}
                    </div>
                    </>
                )}
        </div>
    )
}

export default Tabs;