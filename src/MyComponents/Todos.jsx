import React, { useEffect, useState, useContext } from "react";
import TodoItem from "./TodoItem";
import { todo } from '../../src/index'
import { v4 as uuidv4 } from 'uuid';

const regexPattern = new RegExp(/^([A-Za-z]|[0-9]|_)+$/)
const innerPageStyle = {
  marginTop: 30,
};

export function todosAcation(state = [], action) {

  switch (action.type) {
    case 'ADD_TODO':
      return [...state.map((item) => {
        if (item.id === 1) {
          item.cards.push(action.value)
        }
        return item
      })]
    case 'REMOVE_TODO':
      return [...state.map((item) => {
        if (item.id === action.id) {
          var filtered = item.cards.filter(function (value) {
            return value.cid !== action.cid;
          });
          item.cards = [...filtered]
          return item
        } else {
          return item
        }
      })]
    case 'MOVE_LEFT_TODO':
      
      return [...state.map((item) => {
        if (item.id === action.id && action.id > 1) {
            var filtered = item.cards.filter(function (value) {
                return value.cid !== action.item.cid;
            });
            item.cards = [...filtered]
            return item
        } else if (item.id === action.id - 1) {
            item.cards.push(action.item)
        }
        return item
    })]
    case 'MOVE_RIGHT_TODO':
      return [...state.map((item) => {
        if (item.id === action.id && action.id < 4) {
          var filtered = item.cards.filter(function (value) {
            return value.cid !== action.item.cid;
          });
          item.cards = [...filtered]
          return item
        } else if (item.id === action.id + 1) {
          item.cards.push(action.item)
        }
        return item
      })]
    default:
      return state
  }
}

function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto",
  };

  const todoSContext = useContext(todo);
  const [todosListContext, settodosListContext] = useState([])
  const [backlogList, setBacklogList] = useState([])
  const [todosList, settodosList] = useState([])
  const [inProgressList, setInProgress] = useState([])
  const [doneList, setdoneList] = useState([])
  const [title, setTitle] = useState("");
  const submit = (e) => {

    e.preventDefault();
    if (!title) {
      alert("Backlog can't be blank");
    }
    else if (!regexPattern.test(title)) {
      alert("Not Matched")
      setTitle("");

    }
    else {

      setBacklogList([...backlogList, { name: title, stage: 0, cid: uuidv4() }]);
      setTitle("");
    }
  }



  const listItem = (todos, id) => {
    let data = []
    todos?.forEach(element => {
      if (element.id === id) {
        data = [...element.cards]
      }
    });
    return data
  }



  useEffect(() => {
    setBacklogList(listItem(todoSContext, 1))
    settodosList(listItem(todoSContext, 2))
    setInProgress(listItem(todoSContext, 3))
    setdoneList(listItem(todoSContext, 4))
  }, [todosListContext])

  useEffect(() => {
    settodosListContext(todoSContext)
  }, [todoSContext])

  return (
    <>
      <div className="container my-9 ">
        <h4 style={innerPageStyle}>Add New Backlog </h4>
        <form onSubmit={submit}>
          <div className="mb-3">
            <input
              type="text"
              placeholder='Please Add Backlog…'
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-primary">
            Add Backlog
          </button>
        </form>
      </div>
      <div className="container my-3" style={myStyle}>
        <h3 className="my-3">Backlog List</h3>
        <div className="row">
          <div className="col-sm-3">
            <h3>Backlog</h3>
            {backlogList.map((item) => {
              return <TodoItem {...item}  key={item.cid} removeTodoAction={() => settodosListContext(todosAcation(todosListContext, {
                cid: item.cid,
                id: 1,
                type: 'REMOVE_TODO'
              }))} moveLeftTodoAction={
                () => settodosListContext(todosAcation(todosListContext, {
                  item,
                  id: 1,
                  type: 'MOVE_LEFT_TODO'
                }))}

                moveRightAction={
                  () => settodosListContext(todosAcation(todosListContext, {
                    item,
                    id: 1,
                    type: 'MOVE_RIGHT_TODO'
                  }))}
              />
            })}
          </div>
          <div className="col-sm-3">
            <h3>Todo</h3>
            {todosList.map((item) => {
              return <TodoItem {...item}  key={item.cid} removeTodoAction={() => settodosListContext(todosAcation(todosListContext, {
                cid: item.cid,
                id: 2,
                type: 'REMOVE_TODO'
              }))} moveLeftTodoAction={
                () => settodosListContext(todosAcation(todosListContext, {
                  item,
                  id: 2,
                  type: 'MOVE_LEFT_TODO'
                }))}

                moveRightAction={
                  () => settodosListContext(todosAcation(todosListContext, {
                    item,
                    id: 2,
                    type: 'MOVE_RIGHT_TODO'
                  }))} />
            })}
          </div>
          <div className="col-sm-3">
            <h3>In-Progress</h3>
            {inProgressList.map((item) => {
              return <TodoItem {...item}  key={item.cid} removeTodoAction={() => settodosListContext(todosAcation(todosListContext, {
                cid: item.cid,
                id: 3,
                type: 'REMOVE_TODO'
              }))} moveLeftTodoAction={
                () => settodosListContext(todosAcation(todosListContext, {
                  item,
                  id: 3,
                  type: 'MOVE_LEFT_TODO'
                }))}

                moveRightAction={
                  () => settodosListContext(todosAcation(todosListContext, {
                    item,
                    id: 3,
                    type: 'MOVE_RIGHT_TODO'
                  }))} />
            })}
          </div>
          <div className="col-sm-3">
            <h3>Done</h3>
            {doneList.map((item) => {
              return <TodoItem {...item} key={item.cid} removeTodoAction={() => settodosListContext(todosAcation(todosListContext, {
                cid: item.cid,
                id: 4,
                type: 'REMOVE_TODO'
              }))} moveLeftTodoAction={
                () => settodosListContext(todosAcation(todosListContext, {
                  item,
                  id: 4,
                  type: 'MOVE_LEFT_TODO'
                }))}

                moveRightAction={
                  () => settodosListContext(todosAcation(todosListContext, {
                    item,
                    id: 4,
                    type: 'MOVE_RIGHT_TODO'
                  }))} />
            })}
          </div>
        </div>
      </div>
    </>

  );
}
export default Todos;
