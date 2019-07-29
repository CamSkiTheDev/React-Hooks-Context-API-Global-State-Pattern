// Import react and the usestate hook from react.
import React, { useState } from 'react';

// Declare and set default state object.
const State = {
    isLoading: true,
    person: {
        name: `John Doe`,
        age: 21,
        email: 'johndoe@gmail.com',
        companyName: 'Google LLC'
    }
}

// Export or Global State Context Provider for use in other components.
export const GlobalStateContext = React.createContext(State);


// Export Default Functional Component
export default ({ children }) => {
    const [globalState, setGlobalState] = useState(State);

    return (
        <GlobalStateContext.Provider value={[globalState, setGlobalState]}>
            {children}
        </GlobalStateContext.Provider>
    );
}
