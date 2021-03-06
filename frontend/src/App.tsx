import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

    const [numbers, setNumbers] = useState<number[]>([]);

    useEffect(() => {
        axios.get('/api-call').then((response) => console.log(response));
        axios.get("/test.json").then((response) => {
            setNumbers(response.data);
        });
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <p>
                    {numbers.join(' - ')}
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

export default App;
