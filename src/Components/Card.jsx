import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className="row">
        <h4 className="col-sm-4"> {props?.name}</h4>
        <div className="col-sm-6">
          <FontAwesomeIcon onClick={props.moveLeftTodoAction} className="p-1 mx-1 border bg-light" icon={faArrowLeft} />
          <FontAwesomeIcon onClick={props.moveRightAction} className="p-1 mx-1 border bg-light" icon={faArrowRight} />
          <FontAwesomeIcon onClick={props.removeTodoAction} className="p-1 mx-1 border bg-light" icon={faClose} />
        </div>
      </div>
    </div>
  );
};

export default Card;
