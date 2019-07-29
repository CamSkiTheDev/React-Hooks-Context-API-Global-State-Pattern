// Import useContext and useEffect hooks to get and update state in this component.
import React, { useContext, useEffect } from 'react';

import logo from '../logo.svg';
import '../App.css';

// Import GlobalStateContext form GlobalState.js so we can use state in this component.
import { GlobalStateContext } from '../utilites/GlobalState';

export default () => {
    // Declear and get state from Context API.
    const [globalState, setGlobalState] = useContext(GlobalStateContext);

    // Use destructuring to grab what we need from state.
    const { person } = globalState;
    const { name, companyName } = person;

    // Declear function to fire when component mounts to change state.
    const CompDidMount = () => {
        // Update State to make name correct when component mounts.
        setGlobalState({ ...globalState, person: { ...person, name: 'Sundar Pichai' } })
    }

    //Use the useEffect hook to emulate ComponentDidMount.
    useEffect(CompDidMount, []);



    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h4>
                    {
                        // Use our state in our app. ;)
                        name
                    }
                </h4>
                <h5>
                    {
                        // Use our state in our app. ;)
                        companyName
                    }
                </h5>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
