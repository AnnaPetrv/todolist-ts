import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

const title1 = "What to learn"
const title2 = "What to buy"

const tasks1 = [
    {id: 1, isDone: true, title: "CSS"},
    {id: 2, isDone: true, title: "JS"},
    {id: 3, isDone: false, title: "HTML"},
]

const tasks2 = [
    {id: 4, isDone: false, title: "Bread"},
    {id: 5, isDone: true, title: "Chocolate"},
    {id: 6, isDone: true, title: "Sugar"},
]

function App() {
    return (
        <div className="App">
            <Todolist title={title1} tasks={tasks1}/>
            <Todolist title={title2} tasks={tasks2}/>
        </div>
    );
}

export default App;
