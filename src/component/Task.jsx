import React, { useState } from 'react'
import '../App.css'
import Header from './Header';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import Card from './Card';
const Task = () => {
  const [add, setAdd] = useState(false);
  const [Tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState("");
  const [singleDes, setSingleDes] = useState("");
  const UpdateTask = (id) => {
    setTasks(Tasks.map((t) => (t.id == id ? { ...t, complete: true } : t)));
  };
  const deleteTask = (id) => {
    setTasks(Tasks.filter((t) => (t.id == id ? false : true)));
  };
  const addToCard = () => {
    const id = Tasks.length == 0 ? 1 : Tasks.length + 1;
    const taskDetail = {
      id: id,
      task: singleTask,
      des: singleDes,
      complete: false,
    };
    setTasks([...Tasks, taskDetail]);
  };
  const ClearInput = () => {
    setSingleTask("");
    setSingleDes("");
  };
  const handleCustomTask = (event) => {
    setSingleTask(event.target.value);
  };

  const handleInput = () => {
    setAdd(!add);
  };
  return (
    <div>
      
      <h1 className="task">Welcome to Task Managament App</h1>

      <div className="main">
        <div className="inputSection">
          <Header handleInput={handleInput} />
          {add == true ? (
            <>
              <CustomInput
                value={singleTask}
                placeHolder="Enter Task"
                name="Task"
                change={handleCustomTask}
              />
              <div className="btnwrapper">
                <CustomButton
                  color="White"
                  bg="#1877F2"
                  name="Save Task"
                  
                  className="btn1"
                  click={addToCard}
                />
                <CustomButton
                  color="White"
                  bg="red"
                  name="Cancle"
                  className="btn1"
                  click={ClearInput}
                />
              </div>
            </>
          ) : null}
        </div>
        <div className="cardSection">
          {Tasks.map((t) => (
            <Card
              title={t.task}
              des={t.des}
              key={t.id}
              delete={() => deleteTask(t.id)}
              update={() => UpdateTask(t.id)}
              complete={t.complete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Task