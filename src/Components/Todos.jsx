import React, { useEffect, useState, useContext } from "react";
import Card from "./Card";
import { todo } from '../../src/index'
import { v4 as uuidv4 } from 'uuid';

/* Validation regex pattern */
const regexPattern = new RegExp(/^([A-Za-z]|[0-9]|_)+$/)

/* Inner Page Style */
const innerPageStyle = {
  marginTop: 30,
};

/* Card Style */
let cardStyle = {
  minHeight: "70vh",
  margin: "10px auto",
};

/* 
* Context action handeler
* We are passing current context state & action
*/

export function todosAction(state = [], action) {

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

/* 
* Todo Component
*/
const Todos = (props) => {

  const todoSContext = useContext(todo);
  const [todosListContext, settodosListContext] = useState([])
  const [backlogList, setBacklogList] = useState([])
  const [todosList, settodosList] = useState([])
  const [inProgressList, setInProgress] = useState([])
  const [doneList, setdoneList] = useState([])
  const [title, setTitle] = useState("");

/* 
* Adding New todo action item
*/
  const submit = (event) => {
    event.preventDefault();
    if (!title) {
      alert("Backlog name can't be blank!");
    }
    else if (!regexPattern.test(title)) {
      alert("Validation Failed!")
      setTitle("");
    }
    else {
      setBacklogList([...backlogList, { name: title, stage: 0, cid: uuidv4() }]);
      setTitle("");
    }
  }

  /* 
   Handeler for filtering items based on status
  */

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
        < innerPageStyle><h4>Add New Backlog </h4></innerPageStyle>
        <form onSubmit={submit}>
          <div className="mb-3 row">
            <input
              type="text"
              placeholder='Please Add Backlog…'
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="input-css col-sm-10 "
              id="title"
              aria-describedby="emailHelp"
            />
            <button type="submit" className="col-sm-2 btn btn-sm btn-primary">
              Add Backlog
            </button>
          </div>

        </form>
      </div>
      <div className="container my-3 card-border" style={cardStyle}>
        <h3 className="my-3">Backlog List</h3>
        <div className="row ">
          <div className="col-sm-3">
            <div class="col-sm-12 card card-h-100">
              <h3>Backlog</h3>
              {backlogList.map((item) => {
                return <Card {...item} key={item.cid} removeTodoAction={() => settodosListContext(todosAction(todosListContext, {
                  cid: item.cid,
                  id: 1,
                  type: 'REMOVE_TODO'
                }))} moveLeftTodoAction={
                  () => settodosListContext(todosAction(todosListContext, {
                    item,
                    id: 1,
                    type: 'MOVE_LEFT_TODO'
                  }))}

                  moveRightAction={
                    () => settodosListContext(todosAction(todosListContext, {
                      item,
                      id: 1,
                      type: 'MOVE_RIGHT_TODO'
                    }))}
                />
              })}
            </div>
          </div>
          <div className="col-sm-3">
            <div class="col-sm-12 card card-h-100">
              <h3>Todo</h3>
              {todosList.map((item) => {
                return <Card {...item} key={item.cid} removeTodoAction={() => settodosListContext(todosAction(todosListContext, {
                  cid: item.cid,
                  id: 2,
                  type: 'REMOVE_TODO'
                }))} moveLeftTodoAction={
                  () => settodosListContext(todosAction(todosListContext, {
                    item,
                    id: 2,
                    type: 'MOVE_LEFT_TODO'
                  }))}

                  moveRightAction={
                    () => settodosListContext(todosAction(todosListContext, {
                      item,
                      id: 2,
                      type: 'MOVE_RIGHT_TODO'
                    }))} />
              })}
            </div>
          </div>
          <div className="col-sm-3">
            <div class="col-sm-12 card card-h-100">
              <h3>In-Progress</h3>
              {inProgressList.map((item) => {
                return <Card {...item} key={item.cid} removeTodoAction={() => settodosListContext(todosAction(todosListContext, {
                  cid: item.cid,
                  id: 3,
                  type: 'REMOVE_TODO'
                }))} moveLeftTodoAction={
                  () => settodosListContext(todosAction(todosListContext, {
                    item,
                    id: 3,
                    type: 'MOVE_LEFT_TODO'
                  }))}

                  moveRightAction={
                    () => settodosListContext(todosAction(todosListContext, {
                      item,
                      id: 3,
                      type: 'MOVE_RIGHT_TODO'
                    }))} />
              })}
            </div>
          </div>
          <div className="col-sm-3">
            <div class="col-sm-12 card card-h-100">
              <h3>Done</h3>
              {doneList.map((item) => {
                return <Card {...item} key={item.cid} removeTodoAction={() => settodosListContext(todosAction(todosListContext, {
                  cid: item.cid,
                  id: 4,
                  type: 'REMOVE_TODO'
                }))} moveLeftTodoAction={
                  () => settodosListContext(todosAction(todosListContext, {
                    item,
                    id: 4,
                    type: 'MOVE_LEFT_TODO'
                  }))}

                  moveRightAction={
                    () => settodosListContext(todosAction(todosListContext, {
                      item,
                      id: 4,
                      type: 'MOVE_RIGHT_TODO'
                    }))} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todos;
