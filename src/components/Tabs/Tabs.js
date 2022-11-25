import React, { useState } from "react";
import "./Tabs.css";

import { Modal, Button, ButtonGroup } from "react-bootstrap";


function AddModal(props) {
    return (
        <Modal
          {...props}
          className="addModal"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Thêm phim mới
            </Modal.Title>
          </Modal.Header>
          <Modal.Body closeButton>
            a
            b
            c
          </Modal.Body>
        </Modal>
    );
}

function Tabs({tabs = [], editable = false }) { 
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    // const [filmListState, setFilmListState] = useState(tabs[activeTabIndex].content)
    const [addPopup, setAddPopup] = useState(false);

    const activateTab = (index) => {
            setActiveTabIndex(index);
    }

    // console.log(tabs[activeTabIndex].content[0].props.deleted)
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
                    <div className="TabBody">
                        <div className="TabToolbar overflow-clip">
                            <Button type="button" className="add-btn"
                            onClick={() => setAddPopup(true)}
                            >
                                Thêm phim mới
                            </Button>
                            {console.log(addPopup)}
                        </div>
                        <div className="TabContent overflow-auto">
                        {tabs[activeTabIndex].content}
                        </div>
                        <AddModal
                            show={addPopup}
                            onHide={() => setAddPopup(false)}
                        />
                    </div>
                    
                    </>
                )}
        </div>
    )
}

export default Tabs;