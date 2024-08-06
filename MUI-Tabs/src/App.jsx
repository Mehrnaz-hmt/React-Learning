import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(2);
  const [isOpen, setIsOpen] = useState(true);

  const handlerActive = (id) => {
    setActiveTab(id);
    setUser({ name: "Ali" });
  };

  function TabComponent() {
    return (
      <div className="tab">
        <div className="tab__header">
          {tabData.map((tab) => (
            <button
              onClick={() => handlerActive(tab.id)}
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
            >
              <span>{tab.title}</span>
              <span className="tab-indicator"></span>
            </button>
          ))}
        </div>
        <div className="tab__content">{tabData[activeTab - 1].content}</div>
      </div>
    );
  }

  return (
    <div>
      {isOpen ? <TabComponent /> : <p>Close tab</p>}
      <button className="hide-tab " onClick={() => setIsOpen(!isOpen)}>
        Hide
      </button>
    </div>
  );
}

export default App;
