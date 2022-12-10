import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = {
    id: string,
    title: string
}

type TasksStateType = {
    [key: string]: DataType
}

type DataType = {
    data: Array<TaskType>
    filter: FilterValuesType
}


function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn"}, //0 el.id
        {id: todolistId2, title: "What to buy"}    //1 el.id
    ])


    let [tasks, setTasks] = useState<TasksStateType>({
            [todolistId1]: {
                data: [
                    {id: v1(), title: "HTML&CSS1111", isDone: true},
                    {id: v1(), title: "JS1111", isDone: true}
                ],
                filter: "all"
            },
            [todolistId2]: {
                data: [
                    {id: v1(), title: "HTML&CSS22222", isDone: true},
                    {id: v1(), title: "JS2222", isDone: true}
                ],
                filter: "all"
            }
        }
    );


    function removeTask(todolistID: string, taskID: string) {
        setTasks({
            ...tasks,
            [todolistID]: {...tasks[todolistID], data: tasks[todolistID].data.filter(el => el.id !== taskID)}
        })
    }
    function addTask(todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: {...tasks[todolistID], data: [newTask, ...tasks[todolistID].data]}})

    }
    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        setTasks({
            ...tasks,
            [todolistID]:{...tasks[todolistID],data:tasks[todolistID].data.map(el=>el.id===taskId ? {...el,isDone} :el) }
        })
    }

    function changeFilter(todolistID: string,value: FilterValuesType) {
     setTasks({...tasks,[todolistID]:{...tasks[todolistID],filter:value}})
    }


    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id].data;

                if (tasks[el.id].filter === "active") {
                    tasksForTodolist = tasksForTodolist.filter(t => !t.isDone );
                }
                if (tasks[el.id].filter === "completed") {
                    tasksForTodolist = tasks[el.id].data.filter(t => t.isDone );
                }
                return (
                    <Todolist
                        key={el.id}
                        todolistID={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tasks[el.id].filter}
                    />
                )
            })}


        </div>
    );
}

export default App;
