import React, { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TodoItem = (props) => {
  return (
    <div className="row">
      <h4 className="col-sm-4"> {props?.name}</h4>
      <div className="col-sm-5">
          <FontAwesomeIcon onClick={props.moveLeftTodoAction} className="p-1 mx-1 border bg-light" icon={faArrowLeft} />
          <FontAwesomeIcon onClick={props.moveRightAction} className="p-1 mx-1 border bg-light" icon={faArrowRight} />
          <FontAwesomeIcon onClick={props.removeTodoAction} className="p-1 mx-1 border bg-light" icon={faClose} />
      </div>
    </div>
  );
};



export default TodoItem;
