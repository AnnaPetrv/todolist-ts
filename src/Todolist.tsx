import React from "react";


export type TaskType = {
    title: string,
    id: number,
    isDone: boolean,

}


type PropsType = {
    title: string,
    tasks: TaskType[],
    removeTask: (taskId: number) => void
}


export const Todolist: React.FC<PropsType> = (props) => {
    let listItems: Array<JSX.Element> = props.tasks.map(t => {
        const onClickRemoveTaskHandler = () => props.removeTask(t.id)
        return (
            <li
                key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onClickRemoveTaskHandler}>X</button>
            </li>)
    })
    //if the list is not empty than show listitems
    const tasksList: JSX.Element = props.tasks.length
        ? <ul>{listItems}</ul>
        : <span>Your tasks list is empty</span>

return (<div className="todolist">
    <h3>{props.title}</h3>
    <div>
        <input/>
        <button>+</button>
    </div>
    {tasksList}
    {/*<ul>*/}
    {/*    {props.tasks.map(t => {*/}
    {/*    return (*/}
    {/*        <li key={t.id}>*/}
    {/*            <input type="checkbox" checked={t.isDone}/>*/}
    {/*            <span>{t.title}</span>*/}
    {/*        </li>)*/}
    {/*    })}*/}
    {/*{listItems}*/}
    {/*</ul>*/}

    <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
    </div>
</div>)
}

