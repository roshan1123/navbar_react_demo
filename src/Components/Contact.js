import React, {Component } from 'react';
import {Button } from 'react-bootstrap';


export default class Contact extends Component {
    state = {
        Label: "",
        ToDoSecondary: "",
        ToDoListArray: [],
        open: false,
        index: null,
      };
      HandleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
         
        });
      };

      HandleClick = () => {
        this.setState({
          ToDoListArray: [...this.state.ToDoListArray, this.state.Label],
          Label: "",
        });
      };

    render() {
        let response = this.state.ToDoListArray.map((todo, index) => {
        return(
            <div>
            <li key={index}>
            <div>
              {" "}
              <button></button> <p> {todo} </p>{" "}
            </div></li>
            </div>

        );

        });



        return (
           <div> <input 
            type="text"
            name="Label"
            placeholder="Enter Label"
            onChange={this.HandleChange}
            value={this.state.Label}
            /> 
            <Button 
            name="btnAddItem"
            onClick={this.HandleClick}>Add Item</Button>
             <ul>{response}</ul>

            </div>
        );

    }
}

