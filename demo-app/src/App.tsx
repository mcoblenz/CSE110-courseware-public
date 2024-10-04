import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
            </header> */}
            <div className="App-body">
                <form action=".">
                    <ol>
                        {[ListItem("Apples"),
                        ListItem("Bananas"),
                        ListItem("Oranges")]}
                    </ol>
                </form>
            </div>
        </div>
    );
}


function ListItem(itemText: string) {
    return (
        <li><input type="checkbox" />{itemText}</li>
    )
}

export default App;
