import React, { useState } from "react";
import MainPostFeed from "../Post/MainPostFeed";
import Events from "./Events";
import Contacts from "./Contacts";
import Projects from "./Projects";
import Boards from "./Boards";
import PersonalProgress from "./PersonalProgress";
import Albums from "./Albums";
import Organizations from "./Organizations";
import PeopleYouFollow from "./PeopleYouFollow";
import Tasks from "./Tasks";
import Settings from "./Settings";
import './Navigation.css'

const Navigation = () => {
  const [selectedComponent, setSelectedComponent] = useState("NewsFeed");

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "NewsFeed":
        return <MainPostFeed />;
      case "Events":
        return <Events />;
      case "Contacts":
        return <Contacts />;
      case "Projects":
        return <Projects />;
      case "Boards":
        return <Boards />;
      case "Personal Progress":
        return <PersonalProgress />;
      case "Albums":
        return <Albums />;
      case "Organizations":
        return <Organizations />;
      case "People You Follow":
        return <PeopleYouFollow />;
      case "Tasks":
        return <Tasks />;
      case "Settings":
        return <Settings />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-around flex-wrap p-2">
        {[
          "NewsFeed",
          "Events",
          "Contacts",
          "Projects",
          "Boards",
          "Personal Progress",
          "Albums",
          "Organizations",
          "People You Follow",
          "Tasks",
          "Settings",
        ].map((component) => (
          <div
            key={component}
            onClick={() => setSelectedComponent(component)}
            className={`nav-item ${selectedComponent === component ? "selected" : ""}`}
          >
            {component}
          </div>
        ))}
      </div>
      {renderSelectedComponent()}
    </div>
  );
};

export default Navigation;
