import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValueType = 'all' | 'completed' | 'active'
const App = () => {
    const todolistTitle_1: string = "What to learn"
    const todolistTitle_2: string = "What to do"
    const todolistTitle_3: string = "What to review"

    const [tasks, setTasks] = useState([
            {id: 1, title: "CSS", isDone: true},
            {id: 2, title: "JS", isDone: false},
            {id: 3, title: "React", isDone: false}
                                             ])

    const [filter, setFilter] = useState<FilterValueType>('all')

    // let tasks1: TaskType[] = [
    //     {id: 1, title: "CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: false},
    //     {id: 3, title: "React", isDone: false}
    // ]
    //
    // let tasks2: TaskType[] = [
    //     {id: 4, title: "CV", isDone: true},
    //     {id: 5, title: "Exam", isDone: false},
    //     {id: 6, title: "Set up environment", isDone: false}
    // ]
    //
    // let tasks3: TaskType[] = [
    //     {id: 7, title: "Questions", isDone: true},
    //     {id: 8, title: "React", isDone: true},
    //     {id: 9, title: "JS", isDone: false}
    // ]



    const removeTask = (taskId: number) => {
        const newTasksState: Array<TaskType> = []
        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].id !== taskId){
                newTasksState.push(tasks[i])
            }
        } setTasks(newTasksState)
    }
    const getFilteredTasks = (tasks: Array<TaskType>, filterValue: FilterValueType) =>{
        switch(filterValue){
            case 'all':
                return tasks
            case 'completed':
                return tasks.filter(t=>t.isDone === true)
            case 'active':
                return tasks.filter(t=> t.isDone !== true)
            break
        }
    }

    const setFilterValue = (filterValue: FilterValueType) => {
        setFilter(filterValue)
    }
    const filteredTasks: Array<TaskType> = getFilteredTasks(tasks, filter)
    return (
        <div className="App">
            <Todolist removeTask={removeTask} title={todolistTitle_1} tasks={filteredTasks} setFilterValue={setFilterValue}/>
            {/*<Todolist removeTask={removeTask} title={todolistTitle_2} tasks={tasks2}/>*/}
            {/*<Todolist removeTask={removeTask} title={todolistTitle_3} tasks={tasks3}/>*/}
        </div>
    );
}

export default App;
