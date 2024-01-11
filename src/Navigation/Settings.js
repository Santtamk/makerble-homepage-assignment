import React from 'react'
// import Events from "./Events";
// import Contacts from "./Contacts";
// import Projects from "./Projects";
// import Boards from "./Boards";
// import PersonalProgress from "./PersonalProgress";
// import Albums from "./Albums";
// import Organizations from "./Organizations";
// import PeopleYouFollow from "./PeopleYouFollow";
// import Tasks from './Tasks';



const Settings = () => {
    // const { visibleComponents, toggleComponent } = useState([
    //     Events, Contacts, Projects, Boards, PersonalProgress, Albums, Organizations, PeopleYouFollow, Tasks]);
    //   const toggleComponent = (component) => {
    //     if (visibleComponents.includes(component)) {
    //       setVisibleComponents(visibleComponents.filter(c => c !== component));
    //     } else {
    //       setVisibleComponents([...visibleComponents, component]);
    //     }
    //   };

  return (
    <div className='d-flex flex-column'> 
        <h3 className="text-center">Settings</h3>
        <p className="text-center">Choose what you want to display in the Feed</p>
            
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Events</label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            <label className="form-check-label" for="flexSwitchCheckChecked">Contacts</label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            <label className="form-check-label" for="flexSwitchCheckChecked">Projects</label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            <label className="form-check-label" for="flexSwitchCheckChecked">Boards</label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            <label className="form-check-label" for="flexSwitchCheckChecked">PersonalProgress</label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            <label className="form-check-label" for="flexSwitchCheckChecked">Albums</label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            <label className="form-check-label" for="flexSwitchCheckChecked">Organizations</label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            <label className="form-check-label" for="flexSwitchCheckChecked">PeopleYouFollow</label>
        </div>

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
            <label className="form-check-label" for="flexSwitchCheckChecked">Tasks</label>
        </div>
        

    </div>
  )
}

export default Settings