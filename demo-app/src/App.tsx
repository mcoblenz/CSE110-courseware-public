import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
    const [numRemainingItems, setNumRemainingItems] = useState(0);


    function handleCheckboxClick(e: React.ChangeEvent<HTMLInputElement>) {
        const checkbox: HTMLInputElement = e.target as HTMLInputElement;

        const diff = checkbox.checked ? 1 : -1;

        setNumRemainingItems(numRemainingItems + diff);
    }

    return (
        <div className="App">
            {/* <header className="App-header">
            </header> */}
            <div className="App-body">
                Items to buy: {numRemainingItems}
                <form action=".">
                    <ol>
                        {[ListItem("Apples", handleCheckboxClick),
                        ListItem("Bananas", handleCheckboxClick),
                        ListItem("Oranges", handleCheckboxClick)]}
                    </ol>
                </form>
            </div>
        </div>
    );
}


function ListItem(itemText: string, changeHandler: ChangeEventHandler) {
    return (
        <li key={itemText}><input type="checkbox" onChange={changeHandler} />{itemText}</li>
    )
}

export default App;
