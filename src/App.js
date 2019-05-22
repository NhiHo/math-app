import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Math from './Components/Math';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Math Math />
            </div>
        );
    }
}

export default App;
