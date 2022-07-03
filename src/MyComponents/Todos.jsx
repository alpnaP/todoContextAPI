import React, { useEffect, useState,useContext } from "react";
import TodoItem from "./TodoItem";
import {todo} from '../../src/index'


function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto",
  };
  const user = useContext(todo);
  const [backlogList, setBacklogList] = useState([])
  const [todosList, settodosList] = useState([])
  const [inProgressList, setInProgress] = useState([])
  const [doneList, setdoneList] = useState([])
  

  const { todos } = props

  const listItem = (todos, id) => {
    let data = []
    user?.forEach(element => {
      if (element.id === id) {
        data = [...element.cards]
      }
    });
    return data
  }
  useEffect(() => {
    setBacklogList(listItem(todos, 1))
    settodosList(listItem(todos, 2))
    setInProgress(listItem(todos, 3))
    setdoneList(listItem(todos, 4))
  }, [user])

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">Backlog List</h3>
      <div class="row">
        <div class="col-sm-3">
          <h3>Backlog</h3>
          {backlogList.map((item) => {
            return <TodoItem {...item} removeTodoAction={()=>props.removeTodoAction(item.cid,1)} moveLeftTodoAction={()=>props.moveLeftTodoAction(item,1)} moveRightAction={()=>props.moveRightAction(item,1)}/>
          })}
        </div>
        <div class="col-sm-3">
          <h3>Todo</h3>
          {todosList.map((item) => {
            return <TodoItem {...item} removeTodoAction={()=>props.removeTodoAction(item.cid,2)} moveLeftTodoAction={()=>props.moveLeftTodoAction(item,2)} moveRightAction={()=>props.moveRightAction(item,2)}/>
          })}
        </div>
        <div class="col-sm-3">
          <h3>In-Progress</h3>
          {inProgressList.map((item) => {
            return <TodoItem {...item} removeTodoAction={()=>props.removeTodoAction(item.cid,3)} moveLeftTodoAction={()=>props.moveLeftTodoAction(item,3)} moveRightAction={()=>props.moveRightAction(item,3)}/>
          })}
        </div>
        <div class="col-sm-3">
          <h3>Done</h3>
          {doneList.map((item) => {
            return <TodoItem {...item} removeTodoAction={()=>props.removeTodoAction(item.cid,4)} moveLeftTodoAction={()=>props.moveLeftTodoAction(item,4)} moveRightAction={()=>props.moveRightAction(item,4)}/>
          })}
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    moveLeftTodoAction: (cid,id) => dispatch({ type: 'MOVE_LEFT_TODO',value:{
      cid,
      id
    } }),
    moveRightAction: (cid,id) => dispatch({ type: 'MOVE_RIGHT_TODO',value:{
      cid,
      id
    } }),
    removeTodoAction: (cid,id) => dispatch({ type: 'REMOVE_TODO',value:{
      cid,
      id
    } }),
  }
}

export default Todos;
